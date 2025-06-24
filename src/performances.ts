export interface PerformanceEntry {
  type: "concert" | "performance";
  title: string;
  location: string;
  date: string; // ISO format preferred: YYYY-MM-DD
}

export const performances: PerformanceData[] = [
  {
    type: "concert",
    title: "Dance on the Wings of Song | Foundation for Filipino Artists, Inc. | Dinner service",
    location: "LaGuardia Community College",
    date: "2023-09-30",
  },
  {
    type: "concert",
    title: "Tribute to Eddie Palmieri",
    location: "Purchase College",
    date: "2024-02-10",
  },
  {
    type: "concert",
    title: "Guest Appearance",
    location: "Drew University",
    date: "2025-04-26",
  },
  {
    type: "concert",
    title: "All City Jazz Concert",
    location: "Dizzy's Club | Jazz @ Lincoln Center",
    date: "2025-05-01",
  },
  {
    type: "performance",
    title: "KIDS ROCK FOR KIDS",
    location: "Old Stone House & Washington Park",
    date: "2025-06-01",
  },
  {
    type: "concert",
    title: "All City Concert",
    location: "City Technical College of New York",
    date: "2025-05-31",
  }
];
