import PerformancesList from "../components/PerformancesList";

export default function Performances() {
  return (
    <div className="pt-24 px-6 max-w-4xl mx-auto text-[#532E1C] bg-[#E6E6E6] min-h-screen">
      <h1 className="text-4xl font-bold text-[#C5A880] mb-6">Performances</h1>
      <p className="mb-6 text-lg">
        Here’s a list of both upcoming and past shows I’ve been part of — solo
        and ensemble.
      </p>
      <PerformancesList />
    </div>
  );
}
