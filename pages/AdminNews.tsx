import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Plus, Edit2, Trash2, Save, X, Lock, LogIn, Upload } from 'lucide-react';

export default function AdminNews() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [news, setNews] = useState<any[]>([]);
  const [editingItem, setEditingItem] = useState<any | null>(null);

  // Login handler
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/verify_auth.php', {
        headers: { Authorization: `Bearer ${password}` }
      });
      if (res.ok) {
        setIsAuthenticated(true);
        localStorage.setItem('admin_token', password);
        fetchNews();
      } else {
        setError('Incorrect password');
      }
    } catch (err) {
      setError('Connection error');
    }
    setLoading(false);
  };

  // Check auth on mount
  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (token) {
      setPassword(token);
      fetch('/api/verify_auth.php', {
        headers: { Authorization: `Bearer ${token}` }
      }).then(res => {
        if (res.ok) {
          setIsAuthenticated(true);
          fetchNews();
        }
      });
    }
  }, []);

  const fetchNews = async () => {
    try {
      const res = await fetch('/data/news.json?t=' + Date.now());
      const data = await res.json();
      setNews(data);
    } catch (err) {
      console.error('Failed to fetch news', err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this news?')) return;
    
    try {
      const res = await fetch(`/api/save_news.php?id=${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${password}` }
      });
      if (res.ok) {
        setNews(news.filter(n => n.id !== id));
      } else {
        alert('Failed to delete');
      }
    } catch (err) {
      alert('Error deleting');
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Auto-generate ID if new
    const itemToSave = { ...editingItem };
    if (!itemToSave.id) {
      itemToSave.id = `news-${Date.now()}`;
    }
    
    try {
      const res = await fetch('/api/save_news.php', {
        method: 'POST',
        headers: { 
          Authorization: `Bearer ${password}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemToSave)
      });
      
      if (res.ok) {
        alert('Saved successfully!');
        setEditingItem(null);
        fetchNews();
      } else {
        alert('Failed to save');
      }
    } catch (err) {
      alert('Error saving');
    }
    setLoading(false);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    try {
      const res = await fetch('/api/upload_media.php', {
        method: 'POST',
        headers: { Authorization: `Bearer ${password}` },
        body: formData
      });
      const data = await res.json();
      
      if (res.ok && data.url) {
        if (field === 'image') {
          setEditingItem({ ...editingItem, image: data.url });
        } else if (field === 'gallery') {
          const currentGallery = editingItem.gallery || [];
          setEditingItem({ ...editingItem, gallery: [...currentGallery, data.url] });
        }
      } else {
        alert(data.error || 'Upload failed');
      }
    } catch (err) {
      alert('Upload error');
    }
    setLoading(false);
  };

  const initNewItem = () => {
    setEditingItem({
      title: { UZ: '', RU: '', EN: '' },
      date: {
        day: new Date().getDate().toString().padStart(2, '0'),
        month: { UZ: '', RU: '', EN: '' },
        full: { UZ: '', RU: '', EN: '' },
        weekday: { UZ: '', RU: '', EN: '' }
      },
      image: '',
      gallery: [],
      categories: ['NEWS'],
      category: { UZ: 'YANGILIK', RU: 'НОВОСТЬ', EN: 'NEWS' },
      excerpt: { UZ: '', RU: '', EN: '' },
      summary: { UZ: '', RU: '', EN: '' },
      htmlContent: { UZ: '', RU: '', EN: '' },
      content: [],
      author: 'O‘quv markaz.',
      readTime: { UZ: '3 DAQIQA', RU: '3 МИНУТЫ', EN: '3 MIN READ' },
      views: 0
    });
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-950">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl w-full max-w-md border border-slate-200 dark:border-slate-800">
          <div className="flex justify-center mb-6 text-blue-600 dark:text-blue-500">
            <Lock size={48} />
          </div>
          <h1 className="text-2xl font-black text-center mb-6 text-slate-900 dark:text-white uppercase tracking-widest">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm font-bold text-center">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
            >
              {loading ? 'Checking...' : <><LogIn size={18} /> Login</>}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard / Editor
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-4 sm:p-8 pt-24 sm:pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-black uppercase tracking-widest">News Management</h1>
          {!editingItem && (
            <button
              onClick={initNewItem}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg"
            >
              <Plus size={18} /> Create News
            </button>
          )}
        </div>

        {editingItem ? (
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-bold">{editingItem.id ? 'Edit News' : 'New News'}</h2>
              <button onClick={() => setEditingItem(null)} className="text-slate-500 hover:text-red-500">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-bold mb-2">Title (RU)</label>
                <input
                  type="text"
                  value={editingItem.title.RU}
                  onChange={(e) => setEditingItem({ ...editingItem, title: { ...editingItem.title, RU: e.target.value } })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent"
                  required
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-bold mb-2">Main Image (Hero)</label>
                <div className="flex items-center gap-4">
                  {editingItem.image && (
                    <img src={editingItem.image} alt="Preview" className="w-32 h-20 object-cover rounded-lg" />
                  )}
                  <label className="cursor-pointer bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-700">
                    <Upload size={16} /> Upload Image
                    <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 'image')} />
                  </label>
                </div>
              </div>

              {/* Rich Text Editor */}
              <div>
                <label className="block text-sm font-bold mb-2">Content (RU)</label>
                <div className="bg-white dark:bg-white text-black rounded-xl overflow-hidden">
                  <ReactQuill 
                    theme="snow" 
                    value={editingItem.htmlContent?.RU || ''} 
                    onChange={(content) => setEditingItem({ 
                      ...editingItem, 
                      htmlContent: { ...editingItem.htmlContent, RU: content } 
                    })}
                    className="h-64 mb-12"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg disabled:opacity-50"
                >
                  <Save size={18} /> {loading ? 'Saving...' : 'Publish'}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="grid gap-4">
            {news.map((item) => (
              <div key={item.id} className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {item.image && <img src={item.image} alt="" className="w-16 h-12 object-cover rounded-lg" />}
                  <div>
                    <h3 className="font-bold text-lg">{item.title.RU || item.title.UZ}</h3>
                    <p className="text-sm text-slate-500">{item.date.full.RU}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setEditingItem(item)} className="p-2 text-blue-600 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:scale-105 transition-transform">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="p-2 text-red-600 bg-red-50 dark:bg-red-900/30 rounded-lg hover:scale-105 transition-transform">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
