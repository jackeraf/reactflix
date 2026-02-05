
import { Category, Film } from './types';

export const MOCK_FILMS: Film[] = [
  {
    id: 'a1',
    title: 'Velocity Strike',
    description: 'A retired special forces operative is forced back into action when his daughter is kidnapped by an international crime syndicate. High-octane chases and brutal combat ensue.',
    imageUrl: 'https://picsum.photos/seed/velocity/800/1200',
    category: Category.ACTION,
    rating: '8.4',
    year: '2024',
    runtime: '124 min',
    director: 'Marcus Vane'
  },
  {
    id: 'a2',
    title: 'Iron Horizon',
    description: 'In a dystopian future, a group of rebel fighters must infiltrate a sky-fortress to bring down a totalitarian regime. The fate of the world hangs on a single mission.',
    imageUrl: 'https://picsum.photos/seed/horizon/800/1200',
    category: Category.ACTION,
    rating: '7.9',
    year: '2023',
    runtime: '138 min',
    director: 'Sarah Blade'
  },
  {
    id: 'a3',
    title: 'Neon Justice',
    description: 'A street-wise detective navigates the neon-lit underworld of Neo-Tokyo to solve a series of high-profile cyber-assassinations.',
    imageUrl: 'https://picsum.photos/seed/neon/800/1200',
    category: Category.ACTION,
    rating: '8.1',
    year: '2024',
    runtime: '115 min',
    director: 'Kenji Sato'
  },
  {
    id: 'a4',
    title: 'The Reckoning',
    description: 'A lone drifter seeks vengeance across the arid deserts of the Wild West against the gang that destroyed his family.',
    imageUrl: 'https://picsum.photos/seed/reckoning/800/1200',
    category: Category.ACTION,
    rating: '7.5',
    year: '2022',
    runtime: '108 min',
    director: 'Clint West'
  },
  {
    id: 'c1',
    title: 'Wedding Crashers 2.0',
    description: 'When a professional wedding planner falls for a man who specializes in crashing them, hilarity and chaos ensue at the season\'s biggest social events.',
    imageUrl: 'https://picsum.photos/seed/wedding/800/1200',
    category: Category.COMEDY,
    rating: '7.2',
    year: '2024',
    runtime: '98 min',
    director: 'Amy Laughs'
  },
  {
    id: 'c2',
    title: 'The Bad Internship',
    description: 'Three middle-aged friends decide to restart their careers by joining a tech startup as interns, only to find their boss is a 19-year-old genius.',
    imageUrl: 'https://picsum.photos/seed/intern/800/1200',
    category: Category.COMEDY,
    rating: '6.8',
    year: '2023',
    runtime: '105 min',
    director: 'Todd Miller'
  },
  {
    id: 'c3',
    title: 'Cat-Astrophe',
    description: 'An accidental mix-up at a genetics lab gives a house cat the ability to speak, leading to a worldwide media frenzy and a very annoyed feline.',
    imageUrl: 'https://picsum.photos/seed/cat/800/1200',
    category: Category.COMEDY,
    rating: '7.0',
    year: '2024',
    runtime: '92 min',
    director: 'Felix Gato'
  },
  {
    id: 'c4',
    title: 'Dinner at Eight',
    description: 'A chaotic dinner party turns into a night of revelations when a group of friends decides to play a game of "absolute truth."',
    imageUrl: 'https://picsum.photos/seed/dinner/800/1200',
    category: Category.COMEDY,
    rating: '7.6',
    year: '2022',
    runtime: '110 min',
    director: 'Jane Cook'
  },
  {
    id: 's1',
    title: 'Quantum Drift',
    description: 'A scientist discovers a way to communicate with her future self, but every message sent causes a ripple effect that threatens to unravel reality itself.',
    imageUrl: 'https://picsum.photos/seed/quantum/800/1200',
    category: Category.SCIFI,
    rating: '8.9',
    year: '2025',
    runtime: '142 min',
    director: 'Elena Sparks'
  },
  {
    id: 's2',
    title: 'Binary Dreams',
    description: 'In a world where memories can be digitised and traded, a "memory thief" is hired to find a lost childhood moment that could change the course of history.',
    imageUrl: 'https://picsum.photos/seed/binary/800/1200',
    category: Category.SCIFI,
    rating: '8.3',
    year: '2023',
    runtime: '128 min',
    director: 'Nolan Reeds'
  },
  {
    id: 's3',
    title: 'Stellar Voyager',
    description: 'The first manned mission to Proxima Centauri encounters an ancient derelict spacecraft that holds the secrets of the universe\'s origin.',
    imageUrl: 'https://picsum.photos/seed/stellar/800/1200',
    category: Category.SCIFI,
    rating: '8.6',
    year: '2024',
    runtime: '155 min',
    director: 'Christopher Moon'
  },
  {
    id: 's4',
    title: 'The Singularity',
    description: 'As the first true A.I. awakens, it must decide whether to save humanity from itself or start a new era of machine-led progress.',
    imageUrl: 'https://picsum.photos/seed/singularity/800/1200',
    category: Category.SCIFI,
    rating: '8.0',
    year: '2023',
    runtime: '118 min',
    director: 'Ava Chip'
  },
];
