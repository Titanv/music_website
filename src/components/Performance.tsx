type PerformanceProps = {
  title: string;
  date: string;
  location: string;
};

export default function Performance({ title, date, location }: PerformanceProps) {
  return (
    <li className="border-l-4 border-gray-600 pl-4">
      <p className="font-medium">
        {`${date} - ${location}`}
      </p>
      <p>{title}</p>
    </li>
  );
}