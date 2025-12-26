
import React from 'react';
import InstagramGrid, { MediaItem } from '../components/InstagramGrid.tsx';
import { GALLERY_DATABASE, BRAND } from '../constants.tsx';
import { Instagram } from 'lucide-react';

const Images: React.FC = () => {
  const imageData: MediaItem[] = GALLERY_DATABASE.portraits.map((img, i) => ({
    id: `img-${i}`,
    type: 'image',
    thumbnail: img,
    likes: `${(Math.random() * 10 + 1).toFixed(1)}k`,
    comments: Math.floor(Math.random() * 200 + 10).toString(),
    caption: `${BRAND.name} Signature Stills`
  }));

  return (
    <div className="pt-40 min-h-screen bg-obsidian">
      <section className="px-4 md:px-10 lg:px-20 mb-20 text-center">
        <span className="text-gold font-cinzel text-[11px] tracking-[1em] uppercase mb-6 block opacity-80">Visual Stills</span>
        <h2 className="font-cinzel text-7xl md:text-[10rem] text-silver tracking-tighter leading-none uppercase">Portraits</h2>
        
        <div className="mt-12 flex justify-center">
          <a 
            href={BRAND.instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-4 border border-gold/40 px-10 py-5 text-gold font-cinzel text-[10px] tracking-[0.4em] uppercase hover:bg-gold hover:text-obsidian transition-all duration-500"
          >
            <Instagram size={18} /> Instagram Visit
          </a>
        </div>
      </section>
      
      <InstagramGrid 
        items={imageData} 
        title="Visual Feed" 
        subtitle="Gallery" 
      />
    </div>
  );
};

export default Images;
