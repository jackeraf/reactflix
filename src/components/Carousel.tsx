
import React, { useRef } from 'react';
import { Film } from '../types';
import MovieCard from './MovieCard';

interface CarouselProps {
  title: string;
  films: Film[];
}

const Carousel: React.FC<CarouselProps> = ({ title, films }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="carousel-section" aria-label={title}>
      <div className="carousel-inner">
        <div className="carousel-header">
          <h2 className="carousel-title">{title}</h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={() => scroll('left')} className="btn-secondary" style={{ padding: '8px', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button onClick={() => scroll('right')} className="btn-secondary" style={{ padding: '8px', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
        <div ref={scrollRef} className="carousel-track">
          {films.map((film) => <MovieCard key={film.id} film={film} />)}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
