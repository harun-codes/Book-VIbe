import { IBook } from '@/types/bookTypes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IBookCardProps {
    book : IBook 
}

const BookCard = ({book}: IBookCardProps ) => {

    return (
       <div
                   key={book.bookId}
                   className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                 >
       
                   {/* Image */}
                   <div className="relative h-72 overflow-hidden bg-slate-100">
                     <Image
                       src={book.image}
                       alt={book.bookName}
                       // width={400}
                       // height={400}
                       fill
                       className="object-cover transition-transform duration-500 group-hover:scale-105"
                       sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                     />
       
                     {/* Category */}
                     <div className="absolute top-4 left-4">
                       <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-indigo-600 shadow backdrop-blur">
                         {book.category}
                       </span>
                     </div>
       
                     {/* Rating */}
                     <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-slate-900/80 px-3 py-1 text-sm font-semibold text-white backdrop-blur">
                       ⭐ {book.rating}
                     </div>
                   </div>
       
                   {/* Card Content */}
                   <div className="p-5">
       
                     {/* Book Name */}
                     <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600">
                       {book.bookName}
                     </h3>
       
                     {/* Author */}
                     <p className="mt-1 text-sm text-slate-500">
                       by{" "}
                       <span className="font-semibold text-slate-700">
                         {book.author}
                       </span>
                     </p>
       
                     {/* Tags */}
                     <div className="mt-4 flex flex-wrap gap-2">
                       {book.tags.map((tag) => (
                         <span
                           key={tag}
                           className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
                         >
                           #{tag}
                         </span>
                       ))}
                     </div>
       
                     {/* Book Info */}
                     <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 text-sm">
       
                       <div>
                         <p className="text-slate-400">Publisher</p>
                         <p className="font-semibold text-slate-700">
                           {book.publisher}
                         </p>
                       </div>
       
                       <div>
                         <p className="text-slate-400">Published</p>
                         <p className="font-semibold text-slate-700">
                           {book.yearOfPublishing}
                         </p>
                       </div>
       
                       <div>
                         <p className="text-slate-400">Pages</p>
                         <p className="font-semibold text-slate-700">
                           {book.totalPages} pages
                         </p>
                       </div>
       
                       <div>
                         <p className="text-slate-400">Rating</p>
                         <p className="font-semibold text-slate-700">
                           ⭐ {book.rating}/5
                         </p>
                       </div>
       
                     </div>
       
                     {/* Button */}

                     <Link href={`/books/${book.bookId}`}>
                     <button className="mt-5 w-full rounded-xl bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                       View Details →
                     </button>
                     </Link>
       
                   </div>
                 </div>
    );
};

export default BookCard;