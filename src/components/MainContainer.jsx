import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  // console.log(movies);
  const mainVideo = movies[0];
  const { original_title, overview, id } = mainVideo;
  // console.log(mainVideo);
  return (
    <div>
      <VideoTitle Title={original_title} Discription={overview} />
      <VideoBackground MovieId={id} />
    </div>
  );
};
export default MainContainer;
