import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ title = "Movie", posterPath }) => {
  return (
    <div className="min-w-[140px] md:min-w-[160px] lg:min-w-[200px] max-w-[250px] pr-3 overflow-hidden">
      <img
        alt={title}
        src={IMG_CDN + posterPath}
        className="w-full aspect-[2/3] object-cover rounded-md shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:z-20"
      />
    </div>
  );
};

export default MovieCard;
