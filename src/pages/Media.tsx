export default function Media() {
    const soloVideos = [
      { title: "Winter Waltz", url: "https://www.youtube.com/embed/VIDEO_ID_1" },
      { title: "Nocturne Live", url: "https://www.youtube.com/embed/VIDEO_ID_2" },
      // Add more solo video objects
    ];
  
    const bandVideos = [
      { title: "All City Latin Band", url: "https://www.youtube.com/embed/VIDEO_ID_3" },
      { title: "Jazz Festival Finale", url: "https://www.youtube.com/embed/VIDEO_ID_4" },
      // Add more band video objects
    ];
  
    const VideoCarousel = ({
      title,
      videos,
    }: {
      title: string;
      videos: { title: string; url: string }[];
    }) => (
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-[#C5A880]">{title}</h2>
        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
          {videos.map((video, idx) => (
            <div key={idx} className="min-w-[320px] max-w-[320px] flex-shrink-0">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-[#C5A880]/40">
                <iframe
                  className="w-full h-full"
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="mt-3 text-[#532E1C] text-base font-medium">{video.title}</p>
            </div>
          ))}
        </div>
      </section>
    );
  
    return (
      <div className="pt-24 px-6 pb-16 bg-[#E6E6E6] text-[#532E1C] min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-[#C5A880]">Media</h1>
          <p className="mb-12 text-lg leading-relaxed">
            Explore select recordings from my solo piano works and collaborative band performances, all rooted in storytelling through sound.
          </p>
          <VideoCarousel title="Solo Performances" videos={soloVideos} />
          <hr className="my-12 border-[#C5A880]/30" />
          <VideoCarousel title="Band Performances" videos={bandVideos} />
        </div>
      </div>
    );
  }
  