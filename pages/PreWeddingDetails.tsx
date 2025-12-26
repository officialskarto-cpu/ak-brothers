
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { GALLERY_DATABASE } from '../constants.tsx';
import { ArrowLeft, Camera } from 'lucide-react';

const PreWeddingDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const album = GALLERY_DATABASE.preWeddings.find(a => a.id === id);

  if (!album) {
    return (
      <div className="pt-40 min-h-screen bg-obsidian flex flex-col items-center justify-center text-center px-6">
        <h2 className="font-cinzel text-3xl text-silver mb-8 uppercase">Album Not Found</h2>
        <Link to="/pre-weddings" className="text-gold font-cinzel text-xs tracking-widest uppercase border-b border-gold/40 pb-2">Back to Collections</Link>
      </div>
    );
  }

  return (
    <div className="pt-40 min-h-screen bg-obsidian pb-32">
      <div className="container mx-auto px-6 lg:px-20">
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-3xl">
            <Link to="/pre-weddings" className="flex items-center gap-3 text-platinum/40 hover:text-gold transition-colors mb-10 group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-cinzel tracking-[0.4em] uppercase">Back to Collections</span>
            </Link>
            <span className="text-gold font-cinzel text-[10px] tracking-[1em] uppercase mb-6 block opacity-60">Pre-Wedding Gallery</span>
            <h1 className="font-cinzel text-4xl md:text-7xl text-silver tracking-tighter leading-none uppercase mb-6">{album.clientName}</h1>
            <p className="text-platinum/60 text-sm font-light leading-loose tracking-wide">{album.description}</p>
          </div>
          <div className="flex items-center gap-4 text-gold/40">
            <Camera size={24} />
            <span className="text-2xl font-cinzel">{album.images.length} <span className="text-xs uppercase tracking-widest block opacity-50">Stills</span></span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {album.images.map((img, i) => (
            <div key={i} className="group aspect-[4/5] bg-charcoal overflow-hidden border border-white/5 relative">
              <img 
                src={img} 
                alt={`${album.clientName} Still ${i + 1}`} 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreWeddingDetails;
