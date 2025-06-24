import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#E6E6E6] text-[#532E1C] text-center px-4">
      <h1 className="text-5xl font-bold text-[#C5A880]">404</h1>
      <p className="mt-4 text-lg">Page not found</p>
      <Link
        to="/"
        className="mt-6 underline text-[#C5A880] hover:text-yellow-500"
      >
        Return to home
      </Link>
    </div>
  );
}
