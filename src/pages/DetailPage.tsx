
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_FILMS } from '../constants';
import { Film } from '../types';
import { useApp } from '../hooks/useApp';
import { isBrowser } from '../utils/isBrowser';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useApp();
  
  const film = MOCK_FILMS.find(f => f.id === id);

  useEffect(() => {
    if (!film) {
      navigate('/');
    } else if (isBrowser()) {
      window.scrollTo(0, 0);
    }
  }, [film, navigate]);

  if (!film) return null;

  const isWishlisted = isInWishlist(film.id);

  return (
    <article className="detail-container animate-slide-up" data-category={film.category}>
      <button 
        onClick={() => navigate(-1)} 
        style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '8px' }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
        Back to Cinema
      </button>

      <div className="detail-layout">
        <figure className="detail-img-col">
          <img src={film.imageUrl} alt={film.title} className="poster-img" />
        </figure>

        <section className="detail-info-col" aria-labelledby="detail-title">
          <div className="meta-row">
            <span style={{ borderBottom: '2px solid' }}>{film.category}</span>
            <span>{film.year}</span>
            <span>{film.runtime}</span>
          </div>

          <h1 id="detail-title" className="detail-title">{film.title}</h1>
          
          <div className="detail-rating">
            <span className="detail-rating-value">★ {film.rating}</span>
            <span className="detail-rating-label">IMDB Score</span>
          </div>

          <p className="detail-desc">{film.description}</p>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <button 
              className={`btn-wishlist ${isWishlisted ? 'active' : ''}`}
              onClick={() => isWishlisted ? removeFromWishlist(film.id) : addToWishlist(film)}
            >
              {isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}
            </button>
          </div>

          <dl className="detail-meta-grid">
            <div>
              <dt className="detail-meta-label">Director</dt>
              <dd style={{ fontWeight: 600 }}>{film.director}</dd>
            </div>
            <div>
              <dt className="detail-meta-label">Studio</dt>
              <dd style={{ fontWeight: 600 }}>ReactFlix Original</dd>
            </div>
          </dl>
        </section>
      </div>
    </article>
  );
};

export default DetailPage;
