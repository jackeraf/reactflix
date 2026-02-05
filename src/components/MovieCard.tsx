
import React from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../types';

interface MovieCardProps {
  film: Film;
}

const MovieCard: React.FC<MovieCardProps> = ({ film }) => {
  return (
    <Link to={`/movie/${film.id}`} className="movie-card">
      <img src={film.imageUrl} alt={film.title} className="card-img" loading="lazy" />
      <header className="card-content">
        <h3>{film.title}</h3>
        <p className="card-meta">
          {film.year} • {film.rating} IMDB
        </p>
      </header>
    </Link>
  );
};

export default MovieCard;
