import Track from './track';

const TrackWrapper = ({ url }: { url: string }) => {
  return (
    <div className="flex items-center justify-center bg-[url(/images/grid.png)] bg-center bg-contain bg-no-repeat h-[400px] md:h-[500px] w-full sm:w-[500px]">
      <Track url={url} />
    </div>
  );
};

export default TrackWrapper;
