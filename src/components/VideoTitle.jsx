const VideoTitle = ({ Title, Discription }) => {
  return (
    <div className="w-screen aspect-video pt-80 lg:pt-100 lg:px-12 px-5 absolute lg:h-250 h:10 bg-gradient-to-r from-black scale-z-10 ">
      <h1 className="lg:text-5xl text-4xl font-bold w-[90%] text-white">
        {Title}
      </h1>
      <p className="py-6 lg:text-lg text-[10px] lg:w-2/3 w-[95%] text-white">
        {Discription}
      </p>
      <div className="">
        <button className="bg-white/90 font-bold lg:text-xl text-[10px] text-black  lg:w-40 w-20 lg:p-4 p-2 rounded-md hover:opacity-70  duration-200">
          <i class="bi bi-play-fill text-sm lg:text-2xl"></i>Play
        </button>
        <button className="bg-black/80 font-bold lg:text-xl text-[10px]  text-white lg:w-40 w-25 lg:p-4 p-2 mx-4 rounded-md">
          <i class="bi bi-info-circle text-sm lg:text-2xl"></i> More info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
