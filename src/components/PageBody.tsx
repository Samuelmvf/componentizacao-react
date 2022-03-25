import { MovieList } from '../components/MovieList';

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface PageBodyProps {
  movies: MovieProps[];
}

export function PageBody({ movies }: PageBodyProps) {
  return (
    <main>
      <MovieList
        movies={movies}
      />
    </main>
  )
}