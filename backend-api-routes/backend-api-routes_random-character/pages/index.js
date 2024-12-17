import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load character data</div>;

  return (
    <>
      <p>
        <strong>First Name:</strong> {data.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {data.lastName}
      </p>
      <p>
        <strong>Twitter:</strong> {data.twitter}
      </p>
      <p>
        <strong>GeoHash:</strong> {data.geohash}
      </p>
    </>
  );
}
