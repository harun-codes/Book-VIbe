import React from "react";
import bannarImg from "@/assets/hero_img.jpg";
import Image from "next/image";

const Bannar = () => {
  return (
    <section className="px-4 py-10 sm:py-14 lg:py-20">
      <div className="relative max-w-6xl mx-auto overflow-hidden rounded-3xl bg-linear-to-br from-slate-50 via-white to-indigo-50 px-6 py-10 sm:px-10 lg:px-14 lg:py-14 shadow-xl border border-slate-100">
        
        {/* Background Decoration */}
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-purple-200/30 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-pink-200/30 blur-3xl"></div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
              📚 Discover Your Next Favorite Book
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
              Books to{" "}
              <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                freshen up
              </span>
              <br />
              your bookshelf
            </h1>

            <p className="max-w-lg mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed text-slate-600">
              Explore amazing books, discover new stories, and build a
              bookshelf filled with books you will love to read.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn border-0 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 px-7 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                View The Books →
              </button>

              <button className="btn btn-outline border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white">
                Explore More
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-linear-to-r from-indigo-400/20 to-pink-400/20 blur-3xl rounded-full"></div>

            <div className="relative overflow-hidden rounded-2xl shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
              <Image
                src={bannarImg}
                alt="Books on a bookshelf"
                width={600}
                height={450}
                priority
                className="w-full max-w-md object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Bannar;

