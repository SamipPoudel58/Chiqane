'use client';
import { useEffect, useState } from 'react';

const Track = ({ url }: { url: string }) => {
  const [svgTrack, setSvgTrack] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((data) => data.text())
      .then((svg) => {
        setSvgTrack(svg);
        setLoading(false);
      });
  }, [url]);

  return svgTrack ? (
    <div
      className={`${
        loading ? 'opacity-5 transition-opacity duration-300' : 'opacity-100'
      } trackSvg flex items-center justify-center h-full sm:h-[200px] w-full sm:w-[200px]`}
      dangerouslySetInnerHTML={{ __html: svgTrack }}
    ></div>
  ) : (
    <div></div>
  );
};

export default Track;
