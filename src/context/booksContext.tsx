"use client";

import React, {
  ReactNode,
  useState,
  createContext,
} from "react";
import { IBook } from "@/types/bookTypes";

interface BooksContextType {
  readBooks: IBook[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;

  wishList: IBook[];
  setWishList: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<
  BooksContextType | undefined
>(undefined);

const BooksProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);

  const [wishList, setWishList] = useState<IBook[]>([]);

  const sharedData: BooksContextType = {
    readBooks,
    setReadBooks,
    wishList,
    setWishList,
  };

  return (
    <BooksContext.Provider value={sharedData}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;