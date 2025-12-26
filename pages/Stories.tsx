
import React from 'react';
import { GALLERY_DATABASE } from '../constants.tsx';

const Stories: React.FC = () => {
  return (
    <div className="pt-40 min-h-screen bg-obsidian">
      <section className="px-6 md:px-20 mb-20 text-center">
        <span className="text-gold font-cinzel text-[10px] tracking-[1em] uppercase mb-6 block opacity-60">Visual Narratives</span>
        <h2 className="font-cinzel text-6xl md:text-[10rem] text-silver tracking-tighter leading-none mb-10 uppercase">The Stories</h2>
      </section>

      <div className="container mx-auto px-6 lg:px-20 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">
          {GALLERY_DATABASE.stories.map((story) => (
            <div key={story.id} className="group flex flex-col">
              <div className="relative aspect-[4/5] bg-charcoal overflow-hidden border border-white/5 mb-8">
                <img 
                  src={story.image} 
                  alt={story.clientName} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="text-center md:text-left px-2">
                <h3 className="font-cinzel text-2xl md:text-3xl text-gold mb-4 tracking-widest uppercase">{story.clientName}</h3>
                <div className="w-12 h-[1px] bg-gold/30 mb-4 hidden md:block" />
                <p className="text-platinum/60 text-xs md:text-sm font-light leading-relaxed tracking-wide">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
