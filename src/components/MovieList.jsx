import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 md:px-6 lg:px-10">
      <h1 className="text-white text-2xl md:text-2xl lg:text-3xl py-2 md:py-4 font-semibold">
        {title}
      </h1>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-x-3 lg:gap-x-4">
          {movies &&
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                posterPath={movie.poster_path}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
