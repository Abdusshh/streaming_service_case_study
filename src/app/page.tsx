"use client"; // Ensure the code runs on the client side only

import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"; // Material UI search icon
import Image from "next/image";
import CategorySection from "./CategorySection"; // Import the CategorySection component
// Sample video data for each category (reusing same images)
const trendingVideos = [
  { id: 1, src: "/dune.jpg", alt: "Dune Movie", title: "Dune" },
  {
    id: 2,
    src: "/kanye.jpg",
    alt: "Kanye West Concert",
    title: "Kanye West Live",
  },
  {
    id: 3,
    src: "/documentary.jpg",
    alt: "Documentary on Lions",
    title: "Lion King",
  },
  {
    id: 4,
    src: "/ghibli.png",
    alt: "Studio Ghibli Animation",
    title: "Castle In the Sky",
  },
  {
    id: 5,
    src: "/dune.jpg",
    alt: "Dune Sci-Fi Movie",
    title: "Dune - Sci-Fi Adventure",
  },
  {
    id: 6,
    src: "/kanye.jpg",
    alt: "Kanye West Performance",
    title: "Kanye West - Live Concert",
  },
  {
    id: 7,
    src: "/documentary.jpg",
    alt: "Lion King Documentary",
    title: "The Lion King - Documentary",
  },
  {
    id: 8,
    src: "/ghibli.png",
    alt: "Ghibli Fantasy Film",
    title: "Castle In the Sky - Ghibli",
  },
  {
    id: 9,
    src: "/dune.jpg",
    alt: "Dune Movie Poster",
    title: "Dune - Movie Poster",
  },
  {
    id: 10,
    src: "/kanye.jpg",
    alt: "Kanye West Live",
    title: "Kanye West - Greatest Hits",
  },
  {
    id: 11,
    src: "/documentary.jpg",
    alt: "Lion King Wildlife",
    title: "Lion King - Wildlife Film",
  },
  {
    id: 12,
    src: "/ghibli.png",
    alt: "Castle In the Sky Poster",
    title: "Castle In the Sky - Animation",
  },
  {
    id: 13,
    src: "/dune.jpg",
    alt: "Dune - Sci-Fi Thriller",
    title: "Dune - Sci-Fi Epic",
  },
  {
    id: 14,
    src: "/kanye.jpg",
    alt: "Kanye West Music",
    title: "Kanye West - Music Video",
  },
  {
    id: 15,
    src: "/documentary.jpg",
    alt: "Lion King Wildlife Documentary",
    title: "Lion King - Safari Adventures",
  },
  {
    id: 16,
    src: "/ghibli.png",
    alt: "Ghibli Studio Animation",
    title: "Castle In the Sky - Studio Ghibli",
  },
  {
    id: 17,
    src: "/dune.jpg",
    alt: "Dune Film",
    title: "Dune - Ultimate Edition",
  },
  {
    id: 18,
    src: "/kanye.jpg",
    alt: "Kanye West Show",
    title: "Kanye West - Best Performances",
  },
  {
    id: 19,
    src: "/documentary.jpg",
    alt: "Lion King Nature",
    title: "The Lion King - Nature Documentary",
  },
  {
    id: 20,
    src: "/ghibli.png",
    alt: "Castle In the Sky Fantasy",
    title: "Castle In the Sky - Fantasy World",
  },
];

const awardWinning = [
  {
    id: 1,
    src: "/dune.jpg",
    alt: "Award-Winning Dune",
    title: "Award Winner - Dune",
  },
  {
    id: 2,
    src: "/kanye.jpg",
    alt: "Kanye West Music Award",
    title: "Award Winner - Kanye West",
  },
  {
    id: 3,
    src: "/documentary.jpg",
    alt: "Award-Winning Lion Documentary",
    title: "Award Winner - Lion King",
  },
  {
    id: 4,
    src: "/ghibli.png",
    alt: "Award-Winning Ghibli Film",
    title: "Award Winner - Castle In the Sky",
  },
  {
    id: 5,
    src: "/dune.jpg",
    alt: "Best Sci-Fi Movie Dune",
    title: "Best Sci-Fi - Dune",
  },
  {
    id: 6,
    src: "/kanye.jpg",
    alt: "Best Music Video Kanye",
    title: "Best Music Video - Kanye West",
  },
  {
    id: 7,
    src: "/documentary.jpg",
    alt: "Best Documentary Lion King",
    title: "Best Documentary - Lion King",
  },
  {
    id: 8,
    src: "/ghibli.png",
    alt: "Best Animation Ghibli",
    title: "Best Animation - Castle In the Sky",
  },
  {
    id: 9,
    src: "/dune.jpg",
    alt: "Best Cinematography Dune",
    title: "Best Cinematography - Dune",
  },
  {
    id: 10,
    src: "/kanye.jpg",
    alt: "Best Live Performance Kanye",
    title: "Best Performance - Kanye West",
  },
  {
    id: 11,
    src: "/documentary.jpg",
    alt: "Best Wildlife Documentary",
    title: "Best Wildlife Documentary - Lion King",
  },
  {
    id: 12,
    src: "/ghibli.png",
    alt: "Best Animation Film",
    title: "Best Animation Film - Ghibli",
  },
  {
    id: 13,
    src: "/dune.jpg",
    alt: "Top Sci-Fi Dune",
    title: "Top Sci-Fi - Dune",
  },
  {
    id: 14,
    src: "/kanye.jpg",
    alt: "Top Music Artist Kanye",
    title: "Top Artist - Kanye West",
  },
  {
    id: 15,
    src: "/documentary.jpg",
    alt: "Top Nature Documentary",
    title: "Top Documentary - Lion King",
  },
  {
    id: 16,
    src: "/ghibli.png",
    alt: "Top Fantasy Animation",
    title: "Top Fantasy Animation - Ghibli",
  },
  {
    id: 17,
    src: "/dune.jpg",
    alt: "Epic Sci-Fi Dune",
    title: "Epic Sci-Fi - Dune",
  },
  {
    id: 18,
    src: "/kanye.jpg",
    alt: "Top Music Performer Kanye",
    title: "Top Performer - Kanye West",
  },
  {
    id: 19,
    src: "/documentary.jpg",
    alt: "Top Wildlife Documentary",
    title: "Top Wildlife Documentary - Lion King",
  },
  {
    id: 20,
    src: "/ghibli.png",
    alt: "Top Fantasy Film",
    title: "Top Fantasy Film - Castle In the Sky",
  },
];

const newReleases = [
  {
    id: 1,
    src: "/dune.jpg",
    alt: "New Release Dune",
    title: "New Release - Dune",
  },
  {
    id: 2,
    src: "/kanye.jpg",
    alt: "New Kanye West Release",
    title: "New Release - Kanye West",
  },
  {
    id: 3,
    src: "/documentary.jpg",
    alt: "New Lion King Documentary",
    title: "New Release - Lion King",
  },
  {
    id: 4,
    src: "/ghibli.png",
    alt: "New Ghibli Release",
    title: "New Release - Castle In the Sky",
  },
  {
    id: 5,
    src: "/dune.jpg",
    alt: "Latest Dune Release",
    title: "Latest Release - Dune",
  },
  {
    id: 6,
    src: "/kanye.jpg",
    alt: "Latest Kanye West Song",
    title: "Latest Release - Kanye West",
  },
  {
    id: 7,
    src: "/documentary.jpg",
    alt: "Latest Lion Documentary",
    title: "Latest Release - Lion King",
  },
  {
    id: 8,
    src: "/ghibli.png",
    alt: "Latest Ghibli Film",
    title: "Latest Release - Castle In the Sky",
  },
  {
    id: 9,
    src: "/dune.jpg",
    alt: "Dune - New Film",
    title: "Dune - Latest Edition",
  },
  {
    id: 10,
    src: "/kanye.jpg",
    alt: "Kanye West New Show",
    title: "Kanye West - Latest Show",
  },
  {
    id: 11,
    src: "/documentary.jpg",
    alt: "New Wildlife Documentary",
    title: "Lion King - Wildlife New Release",
  },
  {
    id: 12,
    src: "/ghibli.png",
    alt: "New Studio Ghibli Film",
    title: "Castle In the Sky - Latest Animation",
  },
  {
    id: 13,
    src: "/dune.jpg",
    alt: "New Dune Feature",
    title: "New Dune Feature",
  },
  {
    id: 14,
    src: "/kanye.jpg",
    alt: "Kanye West Latest Performance",
    title: "Kanye West - New Release",
  },
  {
    id: 15,
    src: "/documentary.jpg",
    alt: "New Lion King Wildlife",
    title: "New Wildlife - Lion King",
  },
  {
    id: 16,
    src: "/ghibli.png",
    alt: "Ghibli Fantasy New Release",
    title: "Ghibli - Fantasy New Release",
  },
  {
    id: 17,
    src: "/dune.jpg",
    alt: "New Edition Dune",
    title: "Dune - New Edition Release",
  },
  {
    id: 18,
    src: "/kanye.jpg",
    alt: "New Kanye West Track",
    title: "Kanye West - New Track Release",
  },
  {
    id: 19,
    src: "/documentary.jpg",
    alt: "Lion King New Nature Documentary",
    title: "Lion King - Nature Documentary",
  },
  {
    id: 20,
    src: "/ghibli.png",
    alt: "New Animation Release",
    title: "Castle In the Sky - New Release",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 pb-24 bg-black text-white">
      <header className="w-full flex flex-col items-center justify-center py-16">
        <div className="flex justify-between items-center w-full max-w-7xl">
          {/* Icon Area */}
          <div className="mr-4">
            <Image src="/favicon.ico" alt="Logo Icon" width={70} height={70} className="rounded-full" />
          </div>

          {/* Header Title */}
          <h1 className="text-5xl font-extrabold text-center flex-1">Streamingtor</h1>

          {/* Material UI Search Bar */}
          <div className="ml-4 w-1/2">
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                className: "bg-white rounded-full",
              }}
            />
          </div>
        </div>

        <p className="text-xl text-gray-300 text-center mt-4">Watch your favorite movies and TV shows anytime, anywhere</p>
      </header>

      {/* Category Sections */}
      <CategorySection title="Trending Videos" videos={trendingVideos} />
      <CategorySection title="Award Winning" videos={awardWinning} />
      <CategorySection title="New Releases" videos={newReleases} />
    </main>
  );
}