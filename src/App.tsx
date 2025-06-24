import { useEffect, useState } from "react";
import titan_piano_shot from "./titan_piano_shot.JPG"
import PerformancesList from "./components/PerformancesList.tsx"
export default function MusicianWebsite() {
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const nav = document.getElementById("nav");
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        nav?.classList.add("visible");
      } else {
        nav?.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll helper
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#E6E6E6] text-[#532E1C] font-sans scroll-smooth">
      {/* Navigation */}
      <header
        id="nav"
        className="fixed top-0 w-full z-50 p-4 bg-[#0F0F0F]/80 backdrop-blur-md opacity-0 transition-opacity duration-500 flex justify-between items-center"
      >
        <div>
          <h1
            className="text-3xl font-bold text-[#C5A880] cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Titan Vision
          </h1>
          <p className="text-sm mt-0 text-[#532E1C]">
            Composer | Performer | Visionary
          </p>
        </div>

        <nav className="space-x-6 text-[#C5A880] font-semibold">
          {[
            "about",
            "music",
            "videos",
            "events",
            "past-performances",
            "contact",
          ].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="hover:text-yellow-400 transition"
            >
              {section
                .replace("-", " ")
                .replace(/\b\w/g, (c) => c.toUpperCase())}
            </button>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-[80vh] relative overflow-hidden">
        <img
          src={titan_piano_shot}
          alt="Titan Vision"
          className="w-full h-full object-cover object-top animate-hero"
          style={{
            animationName: "hero-scroll",
            animationDuration: "1s",
            animationTimingFunction: "linear",
            animationFillMode: "both",
          }}
        />
      </section>

      {/* Main content */}
      <main className="p-6 space-y-32 max-w-4xl mx-auto">
        {/* About */}
        <section
          id="about"
          className="opacity-0 translate-y-12 transition-all duration-700"
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#C5A880]">About</h2>
          <p className="text-lg leading-relaxed text-[#532E1C]">
            Titan Vision is a NYC-based composer and multi-instrumentalist known
            for creating emotionally evocative, genre-blending compositions.
            With performances ranging from Lincoln Center to underground jazz
            venues, Titan channels his lived experiences into soundscapes that
            inspire, challenge, and move audiences.
          </p>
        </section>

        {/* Listen */}
        <section
          id="music"
          className="opacity-0 translate-y-12 transition-all duration-700"
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#C5A880]">Listen</h2>
          <div className="space-y-4">
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
        </section>

        {/* Videos */}
        <section
          id="videos"
          className="opacity-0 translate-y-12 transition-all duration-700"
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#C5A880]">Watch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <iframe
              className="w-full aspect-video rounded shadow"
              src="https://www.youtube.com/embed/your-video-id"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube Video"
            ></iframe>
          </div>
        </section>

        {/* Performances */}
        <section id="performances" className="opacity-0 translate-y-12 transition-all duration-700">
          <PerformancesList />
        </section>

        {/* Contact / Booking */}
        <section
          id="contact"
          className="opacity-0 translate-y-12 transition-all duration-700"
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#C5A880]">
            Contact / Booking
          </h2>

          <form
            action="https://postmail.invotes.com/send"
            method="post"
            id="email_form"
            className="space-y-6"
            onSubmit={() => setSubmitting(true)}
          >
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 border border-[#0F0F0F] rounded text-[#532E1C] bg-[#E6E6E6]"
            />

            <textarea
              name="text"
              placeholder="Message"
              rows={5}
              required
              className="w-full p-3 border border-[#0F0F0F] rounded text-[#532E1C] bg-[#E6E6E6]"
            ></textarea>

            <input
              type="hidden"
              name="access_token"
              value="mc6ml1rv6f0ynfv1nl0iop8c"
            />
            <input
              type="hidden"
              name="success_url"
              value=".?message=Email+Successfully+Sent%21&isError=0"
            />
            <input
              type="hidden"
              name="error_url"
              value=".?message=Email+could+not+be+sent.&isError=1"
            />

            <input
              type="submit"
              value={submitting ? "Sending..." : "Send"}
              disabled={submitting}
              id="submit_form"
              className={`w-full cursor-pointer rounded bg-[#C5A880] px-6 py-3 font-semibold text-black shadow hover:bg-yellow-500 transition ${
                submitting ? "opacity-60 cursor-not-allowed" : ""
              }`}
            />
          </form>

          <p className="text-center text-xs text-gray-600 mt-2">
            Powered by{" "}
            <a
              href="https://postmail.invotes.com"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-[#C5A880]"
            >
              PostMail
            </a>
          </p>
        </section>

        {/* Social Media */}
        <section className="opacity-0 translate-y-12 transition-all duration-700">
          <h2 className="text-3xl font-semibold mb-4 text-[#C5A880]">Follow</h2>
          <div className="flex space-x-6 text-[#532E1C]">
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#C5A880]"
            >
              Instagram
            </a>
            <a
              href="https://youtube.com/yourchannel"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#C5A880]"
            >
              YouTube
            </a>
            <a
              href="https://tiktok.com/@yourhandle"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#C5A880]"
            >
              TikTok
            </a>
            <a
              href="mailto:youremail@example.com"
              className="hover:text-[#C5A880]"
            >
              Email
            </a>
          </div>
        </section>
      </main>

      <footer className="text-center py-6 border-t border-gray-400 text-sm text-[#532E1C]">
        © {new Date().getFullYear()} Titan Vision. All rights reserved.
      </footer>

      <style jsx>{`
        @keyframes hero-scroll {
          0% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
          100% {
            transform: scale(1.1) translateY(-30%);
            opacity: 0.8;
          }
        }

        .animate-hero {
          animation-name: hero-scroll;
          animation-duration: 1s;
          animation-timing-function: linear;
          animation-fill-mode: both;
          animation-timeline: scroll();
          animation-range: 0vh 100vh;
        }

        #nav.visible {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
