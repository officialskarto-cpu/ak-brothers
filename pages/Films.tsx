
import React, { useState } from 'react';
import { GALLERY_DATABASE, BRAND } from '../constants.tsx';
import { Play, Youtube, ExternalLink } from 'lucide-react';
import VideoModal from '../components/VideoModal.tsx';

const Films: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="pt-40 min-h-screen bg-obsidian">
      <section className="px-6 md:px-20 mb-32 text-center">
        <span className="text-gold font-cinzel text-[10px] tracking-[1em] uppercase mb-6 block opacity-60">Motion Pictures</span>
        <h2 className="font-cinzel text-6xl md:text-[12rem] text-silver tracking-tighter leading-none mb-10 uppercase">The Films</h2>
        
        <div className="flex justify-center gap-6 mt-12">
           <a 
            href={BRAND.youtube} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-red-600/10 border border-red-600/30 px-8 py-4 text-red-500 font-cinzel text-[10px] tracking-[0.3em] uppercase hover:bg-red-600 hover:text-white transition-all duration-500"
           >
             <Youtube size={18} /> YouTube Channel
           </a>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-20 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {GALLERY_DATABASE.films.map((film, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedVideo(film.url)}
              className="group relative aspect-video bg-charcoal overflow-hidden cursor-pointer border border-white/5"
            >
              <img 
                src={`https://img.youtube.com/vi/${film.url.split('v=')[1]}/maxresdefault.jpg`} 
                alt={film.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/30 group-hover:bg-transparent transition-all">
                <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-obsidian transition-all duration-500">
                  <Play size={24} fill="currentColor" />
                </div>
                <h3 className="font-cinzel text-lg md:text-2xl text-white tracking-widest uppercase max-w-md mb-4">{film.title}</h3>
                <div className="flex items-center gap-2 text-gold/60 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={14} /> <span className="text-[10px] tracking-widest uppercase">Watch on YouTube</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <VideoModal isOpen={!!selectedVideo} onClose={() => setSelectedVideo(null)} videoUrl={selectedVideo || ''} />
    </div>
  );
};

export default Films;
