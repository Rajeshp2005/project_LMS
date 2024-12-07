import Navbar from "../components/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
const SingleBook = () => {
  const navigate = useNavigate();
  console.log("hello");
  const { id } = useParams();
  const [book, setBook] = useState({});
  console.log(id);
  const fetchBook = async () => {
    const response = await axios.get(`http://localhost:3000/book/${id}`);
    console.log(response);
    if (response.status == 200) {
      setBook(response.data.data);
    }
  };
  useEffect(() => {
    fetchBook();
  }, []);
  const deleteBook = async () => {
    window.confirm("are you sure?");
    const response = await axios.delete(`http://localhost:3000/book/${id}`);
    if (response.status === 200) {
      alert("book deleted successfully");
      navigate("/");
    } else {
      alert("something went wrong !!");
    }
  };

  return (
    <>
      <Navbar />

      <section className="py-24 dark:bg-black">
        <Link to={"/"}>
          <button className="bg-slate-500 dark:bg-black dark:text-white items-center justify-center m-7  h-8 w-8 rounded-md hover:bg-stone-500 transition ease-in-out delay-95 ">
            &#x2190;
          </button>
        </Link>
        <div
          className=" max-w-7xl  px-4 sm:px-8 lg:px-5
        justify-center align=center
        lg:"
        >
          <h2 className="font-manrope text-4xl font-bold text-gray-900 dark:text-slate-100 text-center mb-16 lg:translate-x-16">
            {book.bookName}
          </h2>

          <div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div className="group w-full max-lg:max-w-2.5xl  border border-gray-300 rounded-2xl lg:translate-x-11">
              <div className="flex items-center">
                <img
                  src={book.imageUrl}
                  alt={book.bookName}
                  className="rounded-t-xl w-full h-[400px] object-cover"
                />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50 dark:group-hover:bg-gray-800">
                <span className="text-indigo-600 font-medium mb-3 block">
                  {book.publishedAt}
                </span>
                <h4 className="text-xl text-gray-900 dark:text-white font-medium leading-8 mb-5">
                  <strong><em><u>{book.authorName}</u></em></strong>
                </h4>
                <h4 className="text-xl text-gray-900 dark:text-white font-medium leading-8 mb-5 text-justify">
                  <em>
                    "
                    {book.description
                      ? book.description
                      : " The Bhagavad Gita is a dialogue between the Pandava prince Arjuna and Krishna, an incarnation of the Hindu god Vishnu. The story takes place on the battlefield of Kurukshetra, where the Pandavas and Kauravas are preparing for war."}
                    "
                  </em>
                </h4>
                <h4 className="text-xl text-gray-900 dark:text-white font-medium leading-8 mb-5">
                 Publication: {book.publication ? book.publication : "Aswbin"}
                </h4>
                <p className="text-slate-800 dark:text-white leading-6 mb-10">
                  Rs.{book.bookPrice}/-
                </p>
                <Link to={`/editBook/${book._id}`}>
                  <button className="bg-lime-500 p-2 w-16 rounded-md hover:bg-stone-500 transition ease-in-out delay-95">
                    Edit
                  </button>
                </Link>

                <button
                  className="bg-red-500 ml-4 p-2 rounded-md hover:bg-stone-500 transition ease-in-out delay-95"
                  onClick={deleteBook}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBook;
