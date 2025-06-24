export default function Videos() {
  return (
    <div className="pt-24 px-6 max-w-4xl mx-auto text-[#532E1C] bg-[#E6E6E6] min-h-screen">
      <h1 className="text-4xl font-bold text-[#C5A880] mb-6">Watch</h1>
      <p className="mb-6 text-lg">
        Watch highlights from live performances, rehearsals, and creative
        sessions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <iframe
          className="w-full aspect-video rounded shadow"
          src="https://www.youtube.com/embed/your-video-id"
          title="Performance 1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* Duplicate and update src for more videos */}
      </div>
    </div>
  );
}
