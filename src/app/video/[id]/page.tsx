"use client";

import { useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import "plyr/dist/plyr.css"; // Import Plyr's CSS

// Mock data of videos
const videoData = [
  { id: 1, title: "Dune", description: "A science fiction epic.", videoUrl: "https://player.vimeo.com/video/76979871" },
  { id: 2, title: "Kanye West", description: "A documentary about Kanye West.", videoUrl: "https://player.vimeo.com/video/76979871" },
  { id: 3, title: "Lion King", description: "A documentary on lions.", videoUrl: "https://player.vimeo.com/video/76979871" },
  { id: 0, title: "Castle In the Sky", description: "An animated movie.", videoUrl: "https://player.vimeo.com/video/76979871" },
];

// Dynamically import Plyr without SSR
const Plyr = dynamic(() => import("plyr") as any, { ssr: false });

const VideoPage = () => {
  const playerRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams(); // Replace useRouter with useSearchParams
  const id = parseInt(searchParams.get("id") ?? "") % videoData.length; // Get the video id from the query parameter

  // Find the video data based on the id
  const video = videoData.find((video) => video.id === id);

  useEffect(() => {
    if (playerRef.current) {
      const loadPlyr = async () => {
        const { default: Plyr } = await import("plyr");

        const playerInstance = new Plyr(playerRef.current!, {
          controls: [
            "play-large", // Play button in the center
            "play", // Play/Pause button
            "progress", // Progress bar
            "current-time", // Current time display
            "duration", // Full video duration display
            "rewind", // Rewind button
            "fast-forward", // Forward button
            "mute", // Mute button
            "volume", // Volume control
            "fullscreen", // Full-screen button
          ],
        });
      };

      loadPlyr();
    }
  }, [playerRef]);

  if (!video) return <p>Loading...</p>; // If the video data is not found, display loading or error

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 pb-24 bg-black text-white">
      {/* Header */}
      <header className="w-full flex items-center justify-center py-12">
        {/* Icon Area */}
        <div className="mr-4">
          <Image src="/favicon.ico" alt="Logo Icon" width={70} height={70} className="rounded-full" />
        </div>

        {/* Header Title */}
        <h1 className="text-5xl font-extrabold text-center flex-1">{video.title}</h1>

        {/* Home Button as <a> tag */}
        <a
          href="/"
          className="ml-4 flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full shadow-md transition-all"
        >
          <HomeIcon className="mr-2" />
          Home
        </a>
      </header>

      {/* Video Section */}
      <section className="w-full max-w-7xl flex flex-col items-center mt-12">
        <p className="text-lg mb-4">{video.description}</p> {/* Show the video description */}

        {/* Plyr container with bigger size and padding */}
        <div className="video-container flex flex-col items-center p-8 w-full" style={{ maxWidth: "900px" }}>
          <div className="plyr__video-embed" ref={playerRef} style={{ width: "100%", position: "relative" }}>
            <iframe
              src={video.videoUrl}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={video.title}
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VideoPage;
