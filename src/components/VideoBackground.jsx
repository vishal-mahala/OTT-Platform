import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMoveiTrailer";

const VideoBackground = ({ MovieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(MovieId);

  return (
    <div className="lg:-mt-40 -mt-35">
      <iframe
        className="w-full h-150 lg:h-200 overflow-hidden"
        //  className="w-auto h-full object-cover absolute top-0 left-1/2 -translate-x-1/2 z-0"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&loop=1&playlist=" +
          trailerVideo?.key +
          "&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&playsinline=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
