import {performances} from '../performances';
import Performance from './Performance';
import { PerformanceEntry } from '../performances';

const isPast = (dateStr: string) => new Date(dateStr) < new Date();

export default function PerformancesList() {
  const past: PerformanceEntry[] = performances.filter(p => isPast(p.date));
  const upcoming: PerformanceEntry[] = performances.filter(p => !isPast(p.date));

  return (
    <div className="space-y-16">
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-[#C5A880]">Upcoming Shows</h2>
        <ul className="space-y-2">
          {upcoming.length > 0 ? upcoming.map((p, i) => (
            <Performance key={i} {...p} />
          )) : <h1>There are currently no upcoming performances...</h1>}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 text-[#C5A880]">Past Performances</h2>
        <ul className="space-y-2">
          {past.map((p, i) => (
            <Performance key={i} {...p} />
          ))}
        </ul>
      </section>
    </div>
  );
}
