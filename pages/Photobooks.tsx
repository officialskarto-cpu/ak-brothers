
import React from 'react';
import { GALLERY_DATABASE } from '../constants.tsx';
import { BookOpen } from 'lucide-react';

const Photobooks: React.FC = () => {
  return (
    <div className="pt-40 min-h-screen bg-obsidian">
      <section className="px-6 md:px-20 mb-32 text-center">
        <span className="text-gold font-cinzel text-[10px] tracking-[1em] uppercase mb-6 block opacity-60">Legacy Print</span>
        <h2 className="font-cinzel text-6xl md:text-[10rem] text-silver tracking-tighter leading-none mb-10 uppercase">Photobooks</h2>
        <p className="text-platinum/40 text-xs tracking-[0.4em] uppercase max-w-xl mx-auto leading-loose">
          Handcrafted heritage volumes that preserve your most cherished memories for a lifetime.
        </p>
      </section>

      <div className="container mx-auto px-6 lg:px-20 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {GALLERY_DATABASE.photobooks.map((book) => (
            <div key={book.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-charcoal overflow-hidden border border-white/5 mb-8 shadow-2xl">
                <img 
                  src={book.coverImage} 
                  alt={book.clientName} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
                <div className="absolute bottom-10 left-10 flex items-center gap-4 text-gold/80">
                  <BookOpen size={20} />
                  <span className="text-[10px] font-cinzel tracking-[0.4em] uppercase">Premium Album</span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-cinzel text-2xl md:text-4xl text-silver tracking-widest uppercase mb-4 transition-colors group-hover:text-gold">{book.clientName}</h3>
                <p className="text-platinum/40 text-[10px] tracking-[0.2em] uppercase">{book.description || 'Wedding Chronicles'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photobooks;
