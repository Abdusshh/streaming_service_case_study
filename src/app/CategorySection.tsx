import Image from "next/image";
import { useRef } from "react";

// Define the type for the video object
type Video = {
  id: number;
  src: string;
  alt: string;
  title: string;
};

// Reusable video thumbnail component
const VideoThumbnail = ({ video }: { video: Video }) => (
  <a href={`/video/${video.id}?id=${video.id}`} className="w-[19.3%] flex-shrink-0">
    <div className="w-full h-0 pb-[56.25%] relative">
      <Image
        src={video.src}
        alt={video.alt}
        fill
        className="object-cover rounded-lg"
      />
    </div>
    <p className="mt-2 text-center text-white">{video.title}</p>
  </a>
);

// Reusable Category Component
const CategorySection = ({ title, videos }: { title: string; videos: Video[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      const videoWidth = scrollRef.current.clientWidth / 5; // Width of one video (container shows 5 videos)
      const scrollAmount =
        direction === "left"
          ? scrollRef.current.scrollLeft - videoWidth * 5
          : scrollRef.current.scrollLeft + videoWidth * 5;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full max-w-full mb-12">
      <h2 className="text-4xl font-semibold mb-6 text-white text-center">
        {title}
      </h2>
      <div className="relative w-full">
        {/* Left Scroll Button */}
        <button
          className="absolute left-0 z-10 p-3 w-12 h-12 bg-gray-800 hover:bg-gray-600 text-white rounded-full shadow-lg flex justify-center items-center top-1/2 -translate-y-1/2 transition-all transform hover:scale-110"
          onClick={() => scroll("left")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Video Thumbnails */}
        <div
          className="flex space-x-6 overflow-x-hidden scrollbar-hide px-10"
          ref={scrollRef}
        >
          {videos.map((video) => (
            <VideoThumbnail key={video.id} video={video} />
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          className="absolute right-0 z-10 p-3 w-12 h-12 bg-gray-800 hover:bg-gray-600 text-white rounded-full shadow-lg flex justify-center items-center top-1/2 -translate-y-1/2 transition-all transform hover:scale-110"
          onClick={() => scroll("right")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default CategorySection;
