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
  
    const VideoCarousel = ({ title, videos }: { title: string; videos: { title: string; url: string }[] }) => (
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-[#C5A880]">{title}</h2>
        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
          {videos.map((video, idx) => (
            <div key={idx} className="min-w-[320px] max-w-[320px]">
              <div className="aspect-video rounded overflow-hidden shadow-md">
                <iframe
                  className="w-full h-full"
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="mt-2 text-[#532E1C] text-sm font-medium">{video.title}</p>
            </div>
          ))}
        </div>
      </section>
    );
  
    return (
      <div className="pt-24 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-[#C5A880]">Media</h1>
        <VideoCarousel title="Solo Performances" videos={soloVideos} />
        <VideoCarousel title="Band Performances" videos={bandVideos} />
      </div>
    );
  }
  