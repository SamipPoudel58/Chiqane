"use client";

const Track = ({
  url,
  invertColor,
}: {
  url: string;
  invertColor?: boolean;
}) => {
  return (
    <div className="flex items-center justify-center bg-[url(/images/grid.png)] bg-center bg-contain bg-no-repeat h-[400px] md:h-[500px] w-full sm:w-[500px]">
      <img
        className={`max-w-[250px] ${invertColor ? "invert" : "invert"}`}
        src={url}
        alt="track"
      />
    </div>
  );
};

export default Track;
