"use client";

import { BooksContext } from "@/context/booksContext";
import { IBook } from "@/types/bookTypes";
import React, { useContext } from "react";

const ReadButton = ({ book }: { book: IBook }) => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("ReadButton must be used inside BooksProvider");
  }

  const { readBooks, setReadBooks } = context;

  const handleReadBook = () => {
    const alreadyRead = readBooks.some(
      (item) => item.bookId === book.bookId
    );

    if (alreadyRead) {
      return;
    }

    setReadBooks((previousBooks) => [
      ...previousBooks,
      book,
    ]);
  };

  const alreadyRead = readBooks.some(
    (item) => item.bookId === book.bookId
  );

  return (
    <button
      onClick={handleReadBook}
      disabled={alreadyRead}
      className="btn border-0 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 px-7 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
    >
      {alreadyRead ? "✓ Read" : "Read"}
    </button>
  );
};

export default ReadButton;