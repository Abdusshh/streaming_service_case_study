import Image from "next/image";
import { useRef } from "react";
import dynamic from "next/dynamic";

const IconButton = dynamic(() => import("@mui/material/IconButton"), {
  ssr: false,
});

const ArrowBackIcon = dynamic(() => import("@mui/icons-material/ArrowBack"), {
  ssr: false,
});

const ArrowForwardIcon = dynamic(() => import("@mui/icons-material/ArrowForward"), {
  ssr: false,
});


// Define the type for the video object
type Video = {
  id: number;
  src: string;
  alt: string;
  title: string;
};

// Reusable video thumbnail component
const VideoThumbnail = ({ video }: { video: Video }) => (
  <a
    href={`/video/${video.id}?id=${video.id}`}
    className="w-[18.85%] flex-shrink-0"
  >
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
const CategorySection = ({
  title,
  videos,
}: {
  title: string;
  videos: Video[];
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      const videoWidth = scrollRef.current.children[0].clientWidth + 24; // 24px beacuse of space-x-6 margin between videos
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
        <IconButton
          className="absolute left-[-35px] z-10 p-3 bg-gray-800 hover:bg-gray-600 text-white rounded-full shadow-lg top-1/2 -translate-y-1/2 transition-all"
          onClick={() => scroll("left")}
          style={{ zIndex: 1 }}
        >
          <ArrowBackIcon fontSize="large" />
        </IconButton>

        {/* Video Thumbnails */}
        <div
          className="flex space-x-6 overflow-x-hidden scrollbar-hide "
          ref={scrollRef}
        >
          {videos.map((video) => (
            <VideoThumbnail key={video.id} video={video} />
          ))}
        </div>

        {/* Right Scroll Button */}
        <IconButton
          className="absolute right-[-35px] z-10 p-3 bg-gray-800 hover:bg-gray-600 text-white rounded-full shadow-lg top-1/2 -translate-y-1/2 transition-all"
          onClick={() => scroll("right")}
          style={{ zIndex: 1 }}
        >
          <ArrowForwardIcon fontSize="large" />
        </IconButton>
      </div>
    </section>
  );
};

export default CategorySection;
