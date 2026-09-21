import React from "react";
// import Image from "next/image";
import BookCard from "../shared/BookCard";
import { IBook } from "@/types/bookTypes";

interface Book {
  author: string;
  bookId: number;
  bookName: string;
  category: string;
  image: string;
  publisher: string;
  rating: number;
  review: string;
  tags: string[];
  totalPages: number;
  yearOfPublishing: number;
}

const getBooks = async (): Promise<Book[]> => {
 const res = await fetch("/booksData.json");
  const data = await res.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">

      {/* Section Heading */}
      <div className="text-center mb-10">
        <span className="inline-block mb-3 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
          📚 Explore Our Collection
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Discover Your Next{" "}
          <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Favorite Book
          </span>
        </h2>

        <p className="mt-3 max-w-2xl mx-auto text-slate-500">
          Explore our collection of amazing books and find your next
          unforgettable story.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {booksData.map((book :IBook , ind:number) =>  {
           return <BookCard key={ind} book={book}></BookCard>
       
   } )}

      </div>
    </section>
  );
};

export default Books;
