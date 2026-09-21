"use client";
// import BookCard from "@/components/shared/BookCard";
import ListedBooksCard from "@/components/shared/ListedBooksCard";
import { BooksContext } from "@/context/booksContext";
import { IBook } from "@/types/bookTypes";
// import Image from "next/image";
// import Link from "next/link";
import React, { useContext, useState } from "react";

const ListedBooks = () => {
   const context = useContext(BooksContext);

  if (!context) {
    throw new Error("ListedBooks must be used inside BooksProvider");
  }

   const {readBooks,wishList } = context;

    const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating")

    const sortBooks = (books: IBook[]) => {
        const sortedBooks = [...books];

        if(sortBy === "rating") {
            sortedBooks.sort ((a,b) => b.rating - a.rating);
        }
        else if(sortBy === "pages") {
             sortedBooks.sort ((a,b) => b.totalPages - a.totalPages);

        }
        else if(sortBy === "year") {
             sortedBooks.sort ((a,b) => b.yearOfPublishing - a.yearOfPublishing);
        }

        return sortedBooks ;
    }

    const sortedReadBooks = sortBooks(readBooks);
    const sortedWishlist  = sortBooks(wishList);

    return (
        <div className="container mx-auto py-10">
            <h2 className="my-4 bg-amber-100 rounded-2xl py-10 font-bold text-4xl text-center">
                Listed Books
            </h2>

            <div className="text-center">

                <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year")}
                className="select select-success">
                <option disabled={true}>Sort By</option>
                <option value={"rating"}>Rating</option>
                <option value={"pages"}>Number of Pages</option>
                <option value={"year"}>Publish Year</option>
            </select>
            </div>

            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label={`Read Books (${readBooks.length})`}
                />
                <div className="tab-content bg-base-100 border-base-300 p-6 space-y-4">

                    {
                        sortedReadBooks.length > 0 ? (
                            sortedReadBooks.map((book: IBook) => {
                                return (
                                    <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>)
                            })) : (
                            <p className="text-center text-lg font-semibold">No Read Books Found</p>

                        )
                    }

                </div>

                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label={`WishList Books (${wishList.length})`}
                    defaultChecked
                />
                <div className="tab-content bg-base-100 border-base-300 p-6 space-y-4">
                    {
                        sortedWishlist.length > 0 ? (
                            sortedWishlist.map((book: IBook) => {
                                return (
                                    <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>
                                )
                            })) : (
                            <p className="text-center text-lg font-semibold">No WishList Books Found</p>
                        )
                    }

                </div>

            </div>
        </div>
    );
};

export default ListedBooks;
