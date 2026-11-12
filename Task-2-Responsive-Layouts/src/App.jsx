
/*
  TASK 2: watch.it Movie Website-COMPLETE-React JSX
*/

// Import the six movie posters from the assets folder.
// App.jsx is inside src, so ../ goes up one folder.
import rogerRabbit from '../assets/who-framed-roger-rabbit.jpg'
import hook from '../assets/hook.jpg'
import laLaLand from '../assets/la-la-land.jpg'
import hiddenFigures from '../assets/hidden-figures.jpg'
import palmSprings from '../assets/palm-springs.jpg'
import barbie from '../assets/barbie.jpg'

// Import this page's CSS.
import './App.css'

// Store movie information in an array.
// React will use this data to create six movie cards.
const movies = [
  {
    id: 1,
    title: 'Who Framed Roger Rabbit',
    year: 1988,
    genre: 'Comedy',
    image: rogerRabbit,
    description:
      'In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists, this unique film will pull you into a world where anything is possible!',
  },
  {
    id: 2,
    title: 'Hook',
    year: 1991,
    genre: 'Action',
    image: hook,
    description:
      'Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter, who must rediscover his inner child to rescue his kids from the clutches of Captain Hook. Adventure, magic, and nostalgia blend in this timeless family classic.',
  },
  {
    id: 3,
    title: 'La La Land',
    year: 2016,
    genre: 'Romance',
    image: laLaLand,
    description:
      'Love, dreams, and the magic of LA take center stage in this musical masterpiece. Watch as two starry-eyed artists navigate passion and ambition in a world where every moment feels like a cinematic spectacle!',
  },
  {
    id: 4,
    title: 'Hidden Figures',
    year: 2016,
    genre: 'Drama',
    image: hiddenFigures,
    description:
      "Three unsung heroes of NASA's space race take the spotlight in this inspiring true story. Battling discrimination and defying the odds, these brilliant African-American women prove that intelligence, perseverance, and unity can change history and break barriers.",
  },
  {
    id: 5,
    title: 'Palm Springs',
    year: 2020,
    genre: 'Romance',
    image: palmSprings,
    description:
      'A never-ending wedding day turns into an unforgettable time-loop romance! Stuck in the same day, two strangers find love, chaos, and meaning in the most unexpected ways.',
  },
  {
    id: 6,
    title: 'Barbie',
    year: 2023,
    genre: 'Comedy',
    image: barbie,
    description:
      'Step into the dazzling world of Barbie as she embarks on an unexpected journey from her perfect doll life to the real world. Filled with humor, heart, and empowering messages, this vibrant adventure redefines what it means to dream big!',
  },
]

// Header component.
// The navigation is hidden on mobile using CSS.
function Header() {
  return (
    <header className="site-header">
      <a className="site-logo" href="#top">
        watch.it
      </a>

      <nav className="site-nav" aria-label="Movie genres">
        <a href="#movies">Action</a>
        <a href="#movies">Comedy</a>
        <a href="#movies">Romance</a>
        <a href="#movies">Drama</a>
      </nav>

      <button
        className="search-button"
        type="button"
        onClick={() => {
          document.getElementById('movies')?.scrollIntoView({
            behavior: 'smooth',
          })
        }}
      >
        SEARCH
      </button>
    </header>
  )
}

// MovieCard is a reusable React component.
// Each movie uses the same structure and styling.
function MovieCard({ movie, index }) {
  return (
    <article
      className={`movie-card ${
        index === 0 ? 'movie-card-featured' : ''
      }`}
    >
      {/* Movie poster */}
      <img
        className="movie-poster"
        src={movie.image}
        alt={`${movie.title} movie poster`}
      />

      {/* Movie information */}
      <div className="movie-information">
        <div className="movie-description">
          <h2>
            {movie.title} ({movie.year})
          </h2>

          <p>{movie.description}</p>
        </div>

        {/* Button is visual until a real video URL is provided. */}
        <button
          className="watch-button"
          type="button"
          onClick={() => {
            alert(`No streaming link supplied for ${movie.title}.`)
          }}
        >
          WATCH NOW
        </button>
      </div>
    </article>
  )
}

// Main App component.
// map() creates one card for each movie in the array.
function App() {
  return (
    <div id="top" className="app">
      <Header />

      <main id="movies" className="movie-container">
        {movies.map((movie, index) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            index={index}
          />
        ))}
      </main>
    </div>
  )
}

export default App
