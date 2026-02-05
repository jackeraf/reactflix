
import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../hooks/useApp';
import MovieCard from '../components/MovieCard';

const WishListPage: React.FC = () => {
  const { wishlist } = useApp();

  return (
    <article className="detail-container animate-fade">
      <header className="wishlist-header">
        <div>
          <h1>My Wishlist</h1>
          <p className="wishlist-subtitle">{wishlist.length} movies saved for later</p>
        </div>
        <Link to="/" className="btn-primary" style={{ textDecoration: 'none' }}>Browse More</Link>
      </header>

      {wishlist.length === 0 ? (
        <section className="empty-state" aria-label="Empty wishlist">
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔖</div>
          <h2>Your list is currently empty</h2>
          <p>Explore our library and save your favorite films here.</p>
          <Link to="/" className="btn-secondary" style={{ display: 'inline-block', marginTop: '2rem', textDecoration: 'none' }}>Go to Home</Link>
        </section>
      ) : (
        <section className="wishlist-grid" aria-label="Wishlist movies">
          {wishlist.map((film) => <MovieCard key={film.id} film={film} />)}
        </section>
      )}
    </article>
  );
};

export default WishListPage;
