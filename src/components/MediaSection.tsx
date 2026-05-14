import React from 'react';
import { InteractiveBentoGallery, MediaItemType } from './ui/interactive-bento-gallery';

const academyMediaItems: MediaItemType[] = [
  {
    id: 1,
    type: "video",
    title: "O'zbekiston 24: DScience haqida",
    desc: "Markaziy telekanalda akademiyamizning ta'lim jarayonlari yoritildi.",
    url: "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4", 
    span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 2,
    type: "image",
    title: "Anti-Corruption Hackathon 2025",
    desc: "Talabalarimiz nufuzli musobaqada yuqori o'rinlarni egallashdi.",
    url: "/media/hackathon.jpg", // Corrected to /media/ as per project structure
    span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
  },
  {
    id: 3,
    type: "image",
    title: "Tech Horizon Sammiti",
    desc: "Global texnologik tadbirlarda faol ishtirok etib kelmoqdamiz.",
    url: "/media/summit.jpg", // Corrected to /media/ as per project structure
    span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
  }
];

const MediaSection = () => {
  return (
    <InteractiveBentoGallery 
      mediaItems={academyMediaItems}
      title="Talabalarimiz yutuqlari va OAV biz haqimizda"
      description="Bizning akademiyamiz hayotidan yorqin lahzalar va yutuqlar"
    />
  );
};

export default MediaSection;
