import Link from "next/link";
import { introduction } from "@/lib/data";

export default function Volumes() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <Link href="/volumes/the-fellowship-of-the-ring">
        The Fellowship of the Ring
      </Link>
      <br />
      <Link href="/volumes/the-two-towers">The Two Towers</Link>
      <br />
      <Link href="/volumes/the-return-of-the-king">The Return of the King</Link>
    </div>
  );
}
