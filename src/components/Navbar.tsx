import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Bio", path: "/bio" },
    { name: "Events", path: "/events" },
    { name: "Media", path: "/media" },
    { name: "Contact Me", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 p-4 bg-white/90 backdrop-blur-md shadow-md flex justify-between items-center">
      <h1 className="text-3xl font-bold text-[#C5A880] cursor-pointer">
        <Link to="/">Titan Vision</Link>
      </h1>

      <nav className="space-x-6 text-[#C5A880] font-semibold">
        {navItems.map(({ name, path }) => (
          <Link
            key={path}
            to={path}
            className={`hover:text-yellow-400 transition ${
              location.pathname === path ? "text-yellow-400 underline" : ""
            }`}
          >
            {name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
