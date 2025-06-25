import titan_piano_shot from "../assets/titan_piano_shot.JPG";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#E6E6E6] font-sans">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={titan_piano_shot}
          alt="Titan Vision at the piano"
          className="absolute inset-0 w-full h-full object-cover object-top brightness-[.6]"
        />

        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-[#C5A880] drop-shadow-lg tracking-wide">
            Titan Vision
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200 tracking-wide">
            Composer · Performer · Visionary
          </p>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 w-full flex justify-center z-10">
          <div className="animate-bounce text-[#C5A880] text-sm opacity-80">
            ↓ Explore
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-5xl mx-auto py-20 px-6 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-semibold text-[#C5A880] tracking-wide">
            About Titan
          </h2>
          <p className="text-lg leading-relaxed text-gray-200 max-w-2xl mx-auto">
            From Lincoln Center to underground jazz clubs, Titan Vision crafts soundscapes that breathe life into story. A bold composer and multi-instrumentalist blending heart, heritage, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-[#1C1C1C] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-[#C5A880] mb-2">Live</h3>
            <p>Captivating solo and group performances across NYC’s most iconic venues.</p>
          </div>

          <div className="bg-[#1C1C1C] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-[#C5A880] mb-2">Compose</h3>
            <p>Genre-bending original works that blend classical structure with urban rhythm.</p>
          </div>

          <div className="bg-[#1C1C1C] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-[#C5A880] mb-2">Create</h3>
            <p>Multimedia storytelling — visual, sonic, and immersive in every frame.</p>
          </div>
        </div>
      </section>

      <style jsx>{`
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
