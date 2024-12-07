import React from "react";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
  console.log(book.imageUrl);
  return (
    <div>
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg my-10 dark:bg-teal-800 bg-teal-400"
        key={book._id}
      >
        <img
          className="w-full object-fill"
          src={
            book.imageUrl
              ? book.imageUrl
              : "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg"
          }
          alt={book.bookName}
        />
        <div className="px-6 py-4 ">
          <div className="font-bold text-xl mb-2">{book.bookName}</div>
          <p className="text-black text-base dark:text-white">
            <div>{book.authorName ? book.authorName : "Rajesh"}</div>
            <div>Rs.{book.bookPrice}</div>
            <div>{book.publication ? book.publication : "janata mavi"}</div>
            <div>{book.publishedAt ? book.publishedAt : "2081/10/28"}</div>
          </p>
        </div>
        <button className="bg-black dark:bg-white dark:text-black text-white rounded-full p-2 m-2 transition duration-300 hover:bg-sky-300 hover:text-black dark:hover:bg-blue-400">
          <Link to={`/book/${book._id}`}>See more</Link>
        </button>
      </div>
    </div>
  );
};

export default Card;
