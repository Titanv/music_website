import { useEffect, useRef } from "react";
import "./index.css";

function Section({ id, children }) {
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          ref.current.classList.add("opacity-100", "translate-y-0");
          obs.unobserve(e.target);
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(ref.current);
  }, []);
  return (
    <section
      ref={ref}
      id={id}
      className="opacity-0 translate-y-12 transition-all duration-700 py-16 max-w-4xl mx-auto"
    >
      {children}
    </section>
  );
}

export default function App() {
  const nav = useRef();
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5)
        nav.current.classList.add("bg-white/70", "backdrop-blur-md");
      else nav.current.classList.remove("bg-white/70", "backdrop-blur-md");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-bg text-text font-sans min-h-screen">
      <header
        ref={nav}
        className="fixed w-full z-50 p-4 transition-all duration-500"
      >
        <nav className="flex justify-center space-x-8">
          {[
            "hero",
            "bio",
            "music",
            "videos",
            "events",
            "contact",
            "follow",
          ].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="uppercase text-sm text-border hover:text-accent"
            >
              {id}
            </a>
          ))}
        </nav>
      </header>

      <main className="pt-16">
        {/* Hero */}
        <Section id="hero">
          <div className="h-screen relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/your-photo.jpg"
              alt="Hero"
              className="w-full h-full object-cover animate-[hero-scroll_1s_linear_both]"
              style={{
                animationTimeline: "scroll()",
                animationRange: "0vh 100vh",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
              <h1 className="text-5xl font-bold text-accent">Your Name</h1>
              <p className="mt-2 text-xl">Composer • Performer • Visionary</p>
            </div>
          </div>
        </Section>

        {/* Bio */}
        <Section id="bio">
          <h2 className="text-3xl font-semibold text-accent mb-4">About</h2>
          <p>
            Titan Vision is a NYC-based composer and multi-instrumentalist known
            for creating emotionally evocative, genre-blending compositions.
            With performances ranging from Lincoln Center to underground jazz
            venues, Titan channels his lived experiences into soundscapes that
            inspire, challenge, and move audiences.
          </p>
        </Section>

        {/* Music */}
        <Section id="music">
          <h2 className="text-3xl font-semibold text-accent mb-4">Listen</h2>
          <div className="space-y-6">
            <iframe
              title="Spotify"
              src="https://open.spotify.com/embed/artist/your-spotify-id"
              className="w-full h-24 rounded shadow"
              allow="encrypted-media"
            ></iframe>
            <iframe
              title="SoundCloud"
              src="https://soundcloud.com/your-soundcloud-id/embed"
              className="w-full h-24 rounded shadow"
              allow="autoplay"
            ></iframe>
          </div>
        </Section>

        {/* Videos */}
        <Section id="videos">
          <h2 className="text-3xl font-semibold text-accent mb-4">Watch</h2>
          <div>
            <iframe
              title="YouTube"
              src="https://www.youtube.com/embed/your-video-id"
              className="w-full aspect-video rounded shadow"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Section>

        {/* Events */}
        <Section id="events">
          <h2 className="text-3xl font-semibold text-accent mb-6">
            Upcoming Shows
          </h2>
          <ul className="space-y-2 pl-4 border-l-4 border-border text-neutral-600">
            <li>
              <strong>July 12, 2025 – Blue Note NYC</strong>: Jazz set with
              special guests • 8:00 PM
            </li>
            <li>
              <strong>August 3, 2025 – Prospect Park Bandshell</strong>:
              Open-air orchestral concert • 7:30 PM
            </li>
          </ul>

          <h2 className="text-3xl font-semibold text-accent my-6">
            Past Performances
          </h2>
          <ul className="space-y-2 pl-4 border-l-4 border-border text-neutral-600">
            <li>
              <strong>March 10, 2025 – Lincoln Center</strong>: Featured
              composer in NY Young Virtuosos Showcase
            </li>
            <li>
              <strong>January 15, 2025 – Harlem School of the Arts</strong>:
              Latin Jazz Ensemble Performance
            </li>
            <li>
              <strong>
                October 22, 2024 – LaGuardia Performing Arts Center
              </strong>
              : Solo Piano Recital: “Valsa Infernalis” debut
            </li>
          </ul>
        </Section>

        {/* Contact */}
        <Section id="contact">
          <h2 className="text-3xl font-semibold text-accent mb-4">
            Contact / Booking
          </h2>
          <form className="space-y-4 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-border rounded bg-white text-text"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-border rounded bg-white text-text"
            />
            <textarea
              rows={5}
              placeholder="Message"
              className="w-full p-3 border border-border rounded bg-white text-text"
            ></textarea>
            <button className="bg-accent hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded shadow">
              Send
            </button>
          </form>
        </Section>

        {/* Follow */}
        <Section id="follow">
          <h2 className="text-3xl font-semibold text-accent mb-4">Follow</h2>
          <div className="flex justify-center space-x-8 text-border">
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              Instagram
            </a>
            <a
              href="https://youtube.com/yourchannel"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              YouTube
            </a>
            <a
              href="https://tiktok.com/@yourhandle"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              TikTok
            </a>
            <a
              href="mailto:youremail@example.com"
              className="hover:text-accent"
            >
              Email
            </a>
          </div>
        </Section>

        <footer className="py-8 text-center text-sm text-border">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
