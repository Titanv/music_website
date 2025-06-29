import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-[#0F0F0F]/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-[#C5A880]">
          Titan Vision
        </Link>

        <ul className="space-x-6 text-[#C5A880] font-semibold hidden md:flex">
          {["home", "bio", "events", "media", "contact"].map((page) => (
            <li key={page}>
              <Link
                to={page === "home" ? "/" : `/${page}`}
                className="hover:text-yellow-400 transition"
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
