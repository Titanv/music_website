import img1 from "../assets/images/titan_piano_shot.jpg";
import img2 from "../assets/images/titan_piano_shot2.jpg";
import img3 from "../assets/images/titan_and_pete.jpg";
import img4 from "../assets/images/titan_image.jpeg";

import { useEffect, useState } from "react";

const images = [img1, img2, img3, img4];

//import 
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#E6E6E6] font-sans">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
      {/* Background image slideshow with fade transition */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            className={`absolute w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out ${
              i === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            } brightness-[.6]`}
          />
        ))}
      </div>

      {/* Overlay content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-6 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-[#C5A880] drop-shadow-lg tracking-wide">
          Titan Vision
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-200 tracking-wide">
          Composer · Performer · Visionary
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 w-full flex justify-center z-20">
        {/*<div className="animate-bounce text-[#C5A880] text-sm opacity-80">
          ↓ Explore
        </div>*/}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl z-30 hover:text-[#C5A880] transition"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl z-30 hover:text-[#C5A880] transition"
      >
        ›
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-5 w-full flex justify-center space-x-2 z-30">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goToIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === currentIndex ? "bg-[#C5A880]" : "bg-white/40"
            } transition-all`}
          ></button>
        ))}
      </div>
    </section>

      {/* Overview Section */}
      <section className="max-w-5xl mx-auto py-20 px-6 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-semibold text-[#C5A880] tracking-wide">
            About Titan
          </h2>
          <p className="text-lg leading-relaxed text-gray-200 max-w-2xl mx-auto">
            From Lincoln Center to underground jazz clubs, Titan Vision crafts
            soundscapes that breathe life into story. A bold composer and
            multi-instrumentalist blending heart, heritage, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-[#1C1C1C] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-[#C5A880] mb-2">Live</h3>
            <p>
              Captivating solo and group performances across NYC’s most iconic
              venues.
            </p>
          </div>

          <div className="bg-[#1C1C1C] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-[#C5A880] mb-2">Compose</h3>
            <p>
              Genre-bending original works that blend classical structure with
              urban rhythm.
            </p>
          </div>

          <div className="bg-[#1C1C1C] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-[#C5A880] mb-2">Create</h3>
            <p>
              Multimedia storytelling — visual, sonic, and immersive in every
              frame.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
