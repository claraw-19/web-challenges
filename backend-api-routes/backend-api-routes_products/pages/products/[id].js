import { useRouter } from "next/router";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Products() {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: product,
    error,
    isLoading,
  } = useSWR(`/api/products/${id}`, fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load products</div>;

  return (
    <ul>
      {
        <li key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>
            Price: {product.price} {product.currency}
          </p>
          <p>Category: {product.category}</p>
        </li>
      }
    </ul>
  );
}
