import Link from "next/link";
import { introduction } from "../../lib/data";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";

export default function Volumes() {
  const router = useRouter;
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.id}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}