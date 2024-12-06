import Link from "next/link";
import { volumes } from "@/lib/data";
import Image from "next/image";

export default function VolumeOne() {
  const book = volumes.find(({ slug }) => slug === "the-return-of-the-king");
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
