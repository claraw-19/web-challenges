import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/lib/data";

export default function VolumeOne() {
  const book = volumes.find(({ slug }) => slug === "the-two-towers");
  console.log("book: ", book);

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <ul>
        {book.books.map((book) => (
          <li key={book.ordinal}>{`${book.ordinal} ${book.title}`}</li>
        ))}
      </ul>
      <Image alt="" src={book.cover} width={140} height={230}></Image>
    </>
  );
}
