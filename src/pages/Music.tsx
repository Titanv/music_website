export default function Music() {
  return (
    <div className="pt-24 px-6 max-w-4xl mx-auto text-[#532E1C] bg-[#E6E6E6] min-h-screen">
      <h1 className="text-4xl font-bold text-[#C5A880] mb-6">Listen</h1>
      <p className="mb-6 text-lg">
        Enjoy a selection of original compositions, improvisations, and
        recordings.
      </p>

      <div className="space-y-6">
        <iframe
          className="w-full h-20 rounded shadow"
          src="https://open.spotify.com/embed/artist/your-spotify-id"
          allow="encrypted-media"
          title="Spotify"
        ></iframe>

        <iframe
          className="w-full h-20 rounded shadow"
          src="https://soundcloud.com/your-soundcloud-id/embed"
          allow="autoplay"
          title="SoundCloud"
        ></iframe>
      </div>
    </div>
  );
}
