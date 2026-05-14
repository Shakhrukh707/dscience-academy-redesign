"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

export type MediaItemType = {
    id: number;
    type: 'video' | 'image';
    title: string;
    desc: string;
    url: string;
    span: string;
}

const MediaItem = ({ item, className, onClick, showControls = false }: { item: MediaItemType, className?: string, onClick?: () => void, showControls?: boolean }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [isBuffering, setIsBuffering] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.2 }
        );
        if (videoRef.current) observer.observe(videoRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (videoRef.current && item.type === 'video' && !showControls) {
            if (isInView) {
                videoRef.current.play().catch(() => {});
            } else {
                videoRef.current.pause();
            }
        }
    }, [isInView, item.type, showControls]);

    if (item.type === 'video') {
        return (
            <div className={`${className} relative overflow-hidden bg-slate-900`}>
                {isBuffering && !showControls && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm z-10">
                        <div className="w-8 h-8 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
                    </div>
                )}
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    onClick={onClick}
                    playsInline
                    muted={!showControls}
                    controls={showControls}
                    loop={!showControls}
                    onWaiting={() => setIsBuffering(true)}
                    onPlaying={() => setIsBuffering(false)}
                    onCanPlay={() => setIsBuffering(false)}
                >
                    <source src={item.url} type="video/mp4" />
                </video>
            </div>
        );
    }

    return (
        <img
            src={item.url}
            alt={item.title}
            className={`${className} object-cover cursor-pointer`}
            onClick={onClick}
            loading="lazy"
        />
    );
};

const GalleryModal = ({
    selectedItem,
    isOpen,
    onClose,
    setSelectedItem,
    mediaItems
}: {
    selectedItem: MediaItemType;
    isOpen: boolean;
    onClose: () => void;
    setSelectedItem: (item: MediaItemType) => void;
    mediaItems: MediaItemType[];
}) => {
    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-slate-950/90 backdrop-blur-2xl p-4 md:p-8"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-6 right-6 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all z-[160]"
            >
                <X size={32} />
            </button>

            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl z-[155] bg-black"
                onClick={(e) => e.stopPropagation()}
            >
                <MediaItem item={selectedItem} className="w-full h-full object-contain" showControls={true} />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
                    <h3 className="text-white text-2xl md:text-3xl font-black tracking-tight mb-2">
                        {selectedItem.title}
                    </h3>
                    <p className="text-white/70 text-lg font-medium max-w-2xl">
                        {selectedItem.desc}
                    </p>
                </div>
            </motion.div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 z-[160]" onClick={e => e.stopPropagation()}>
                {mediaItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setSelectedItem(item)}
                        className={`relative w-16 h-16 rounded-xl overflow-hidden transition-all duration-300 ${
                            selectedItem.id === item.id ? 'ring-4 ring-blue-500 scale-110' : 'opacity-50 hover:opacity-100 hover:scale-105'
                        }`}
                    >
                        <MediaItem item={item} className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>
        </motion.div>
    );
};

interface InteractiveBentoGalleryProps {
    mediaItems: MediaItemType[];
    title: string;
    description: string;
}

export const InteractiveBentoGallery: React.FC<InteractiveBentoGalleryProps> = ({ mediaItems, title, description }) => {
    const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null);

    return (
        <section className="py-16 px-4 sm:px-6 md:px-8 bg-white dark:bg-slate-950">
            <div className="container mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <motion.h2
                        className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.95]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {title}
                    </motion.h2>
                    {description && (
                        <motion.p
                            className="mt-6 text-lg sm:text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            {description}
                        </motion.p>
                    )}
                </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 auto-rows-[250px]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    {mediaItems.map((item) => (
                        <motion.div
                            key={item.id}
                            layoutId={`media-${item.id}`}
                            className={`relative overflow-hidden rounded-[2rem] cursor-pointer shadow-xl border border-slate-100 dark:border-slate-800 ${item.span}`}
                            onClick={() => setSelectedItem(item)}
                            whileHover={{ scale: 1.02 }}
                        >
                            <MediaItem item={item} className="absolute inset-0 w-full h-full" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 pointer-events-none">
                                <h3 className="text-white text-lg font-black">{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <AnimatePresence>
                    {selectedItem && (
                        <GalleryModal
                            selectedItem={selectedItem}
                            isOpen={true}
                            onClose={() => setSelectedItem(null)}
                            setSelectedItem={setSelectedItem}
                            mediaItems={mediaItems}
                        />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
