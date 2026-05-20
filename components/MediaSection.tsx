import React from 'react';
import { InteractiveBentoGallery, MediaItemType } from './ui/interactive-bento-gallery';
import { TranslationSet } from '../types';

const academyMediaItems: MediaItemType[] = [
  {
    id: 1,
    type: "video",
    title: "Kursimiz haqida",
    desc: "Kursimizning ta'lim jarayonlari yoritildi.",
    url: "/media/video.mp4", 
    span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 2,
    type: "image",
    title: "Anti-Corruption Hackathon 2025",
    desc: "Talabalarimiz nufuzli musobaqada yuqori o'rinlarni egallashdi.",
    url: "/media/hackathon.jpg", 
    span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
  },
  {
    id: 3,
    type: "image",
    title: "Innovatsion yechimlar",
    desc: "Talabalarimizning loyihalari va ishlanmalari.",
    url: "/media/hackathon2.jpg", 
    span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
  },
  {
    id: 4,
    type: "image",
    title: "Tech Horizon Sammiti",
    desc: "Global texnologik tadbirlarda faol ishtirok etib kelmoqdamiz.",
    url: "/media/summit.jpg", 
    span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
  },
  {
    id: 5,
    type: "image",
    title: "Tech Horizon Sammiti",
    desc: "Global texnologik tadbirlarda faol ishtirok etib kelmoqdamiz.",
    url: "/media/summit2.jpg", 
    span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
  }
];

const MediaSection = ({ t }: { t: TranslationSet }) => {
  return (
    <div className="py-16 bg-white dark:bg-slate-950">
      <InteractiveBentoGallery 
        mediaItems={academyMediaItems}
        title={
          <div className="flex flex-col items-center justify-center">
            <span className="text-slate-900 dark:text-white">{t.gallery.titleTop}</span>
            <span className="gradient-text pb-1">
              {t.gallery.titleBottom}
            </span>
          </div>
        }
        description={t.gallery.description}
      />
    </div>
  );
};

export default MediaSection;
