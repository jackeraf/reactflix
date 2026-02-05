
import React from 'react';
import Carousel from '../components/Carousel';
import { MOCK_FILMS } from '../constants';
import { Category } from '../types';

const HomePage: React.FC = () => {
  const actionFilms = MOCK_FILMS.filter(f => f.category === Category.ACTION);
  const comedyFilms = MOCK_FILMS.filter(f => f.category === Category.COMEDY);
  const scifiFilms = MOCK_FILMS.filter(f => f.category === Category.SCIFI);

  return (
    <article className="animate-fade">
      <section className="hero" aria-label="Featured">
        <img src="https://picsum.photos/seed/cinema/1920/1080" alt="Hero Banner" className="hero-img" />
        <div className="hero-overlay">
          <h1 className="hero-title">Experience <br /> The Ultimate Cinema</h1>
          <p className="hero-desc">
            Stream the world&apos;s most cinematic stories from heart-pounding action to mind-bending sci-fi.
          </p>
          <div className="btn-group">
            <button className="btn-primary">Play</button>
          </div>
        </div>
      </section>

      <Carousel title="Pulse-Pounding Action" films={actionFilms} />
      <Carousel title="Comedy Hits" films={comedyFilms} />
      <Carousel title="Sci-Fi Journeys" films={scifiFilms} />
    </article>
  );
};

export default HomePage;
