'use client'
import { BooksContext } from '@/context/booksContext';
import { IBook } from '@/types/bookTypes';
import React, { useContext } from 'react';

const WishListButton = ({book}: {book:IBook}) => {

    const context = useContext(BooksContext);
    
      if (!context) {
        throw new Error("ReadButton must be used inside BooksProvider");
      }
    
      const { wishList, setWishList } = context;


    const handleAddToWishList = () => {

        setWishList([...wishList, book]);
        // alert(`you have read`)

    }

    return (
        <div>
             <button onClick={ () => handleAddToWishList()}  className="btn border-0 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 px-7 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            WishList
                        </button>
        </div>
    );
};

export default WishListButton;