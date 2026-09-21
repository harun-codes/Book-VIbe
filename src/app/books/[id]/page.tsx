import ReadButton from "@/components/booksDetails/ReadButton";
import WishListButton from "@/components/booksDetails/WishListButton";
import { IBook } from "@/types/bookTypes";
import Image from "next/image";
import React from "react";

interface IBookDetailsProps {
    params: Promise<{
        id: string;
    }>;
}

const getBooks = async () => {
     const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    const data = await res.json();
    return data;
};

const BookDetailsPage = async ({ params }: IBookDetailsProps) => {
    const { id } = await params;

    const booksData = await getBooks();
    const book = booksData.find(
        (book: IBook) => String(book.bookId) === String(id),
    ) as IBook;


    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="card lg:card-side overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

                {/* Book Image */}
                <figure className="relative bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 lg:w-2/5">
                    <div className="overflow-hidden rounded-2xl shadow-lg">
                        <Image
                            src={book.image}
                            alt={book.bookName}
                            width={500}
                            height={300}
                            className="h-full w-full object-cover transition duration-500 hover:scale-105"
                        />
                    </div>
                </figure>

                {/* Book Details */}
                <div className="card-body lg:w-3/5 p-6 sm:p-8">

                    {/* Category + Rating */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-600">
                            {book.category}
                        </span>

                        <div className="flex items-center gap-1 rounded-full bg-amber-50 px-4 py-1.5 text-sm font-bold text-amber-600">
                            ⭐ {book.rating}
                        </div>
                    </div>

                    {/* Book Name */}
                    <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                        {book.bookName}
                    </h2>

                    {/* Author */}
                    <p className="mt-2 text-lg text-slate-500">
                        by{" "}
                        <span className="font-semibold text-slate-800">
                            {book.author}
                        </span>
                    </p>

                    {/* Review */}
                    <p className="mt-5 text-sm leading-7 text-slate-600">
                        {book.review}
                    </p>

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                        {book.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Book Information */}
                    <div className="mt-6 grid grid-cols-2 gap-4 border-y border-slate-100 py-5 sm:grid-cols-4">

                        <div>
                            <p className="text-xs text-slate-400">Publisher</p>
                            <p className="mt-1 text-sm font-bold text-slate-700">
                                {book.publisher}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-slate-400">Published</p>
                            <p className="mt-1 text-sm font-bold text-slate-700">
                                {book.yearOfPublishing}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-slate-400">Pages</p>
                            <p className="mt-1 text-sm font-bold text-slate-700">
                                {book.totalPages}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-slate-400">Book ID</p>
                            <p className="mt-1 text-sm font-bold text-slate-700">
                                #{book.bookId}
                            </p>
                        </div>

                    </div>

                    {/* Action */}
                    <div className="card-actions mt-6 justify-end">
                        <ReadButton book={book}></ReadButton>
                       <WishListButton book={book}></WishListButton>
                    </div>

                </div>
            </div>
        </div>
    );


};

export default BookDetailsPage;
