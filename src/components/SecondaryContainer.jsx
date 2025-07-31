import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);
  return (
    <div className=" bg-black">
      <div className="lg:-mt-40 -mt-15 scale-z-90">
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Up Comming"} movies={movies.upComingMovies} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
