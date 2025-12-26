
import React from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_DATABASE } from '../constants.tsx';
import { Camera } from 'lucide-react';

const PreWeddings: React.FC = () => {
  return (
    <div className="pt-40 min-h-screen bg-obsidian">
      <section className="px-6 md:px-20 mb-32 text-center">
        <span className="text-gold font-cinzel text-[10px] tracking-[1em] uppercase mb-6 block opacity-60">Before The Vows</span>
        <h2 className="font-cinzel text-6xl md:text-[10rem] text-silver tracking-tighter leading-none mb-10 uppercase">Pre-Weddings</h2>
      </section>

      <div className="container mx-auto px-6 lg:px-20 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">
          {GALLERY_DATABASE.preWeddings.map((album) => (
            <Link key={album.id} to={`/pre-weddings/${album.id}`} className="group block">
              <div className="relative aspect-[4/5] bg-charcoal overflow-hidden border border-white/5 mb-8">
                <img 
                  src={album.coverImage} 
                  alt={album.clientName} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera size={32} className="text-gold opacity-50" />
                </div>
              </div>
              <div className="text-center md:text-left px-2">
                <h3 className="font-cinzel text-2xl text-silver tracking-widest uppercase mb-3 transition-colors group-hover:text-gold">{album.clientName}</h3>
                <div className="flex items-center gap-3 text-platinum/40 group-hover:text-gold/60 transition-colors">
                  <span className="text-[10px] tracking-[0.3em] uppercase">View Gallery</span>
                  <div className="h-[1px] flex-grow bg-white/10 group-hover:bg-gold/30 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreWeddings;
