import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Products() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load products</div>;

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          {" "}
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>
            Price: {product.price} {product.currency}
          </p>
          <p>Category: {product.category}</p>
        </li>
      ))}
    </ul>
  );
}
