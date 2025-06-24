import titan_piano_shot from "../assets/titan_piano_shot.JPG";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pt-20 text-[#532E1C] bg-[#E6E6E6] min-h-screen">
      <section className="h-[80vh] relative overflow-hidden">
        <img
          src={titan_piano_shot}
          alt="Titan Vision"
          className="w-full h-full object-cover object-top"
        />
      </section>

      <main className="p-6 space-y-16 max-w-4xl mx-auto">
        <section>
          <h2 className="text-3xl font-semibold text-[#C5A880] mb-4">About</h2>
          <p className="text-lg leading-relaxed">
            Titan Vision is a NYC-based composer and multi-instrumentalist...
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#C5A880]">Explore</h2>
          <ul className="space-y-2 text-[#532E1C]">
            <li>
              <Link to="/music" className="underline hover:text-[#C5A880]">
                Listen to my Music →
              </Link>
            </li>
            <li>
              <Link to="/videos" className="underline hover:text-[#C5A880]">
                Watch Performances →
              </Link>
            </li>
            <li>
              <Link
                to="/performances"
                className="underline hover:text-[#C5A880]"
              >
                Upcoming & Past Shows →
              </Link>
            </li>
            <li>
              <Link to="/contact" className="underline hover:text-[#C5A880]">
                Contact or Book →
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
