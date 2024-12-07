import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const AddBook = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    bookName: "",
    bookPrice: null,
    isbnNumber: null,
    authorName: "",
    publishedAt: null,
    publication: "",
    decription: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data, //... operator ley agadi j xa xodey vanna khojeyko ho //vannaley agadi input garisakeyko data preserve garx new coming datalai matra change garxa do console.log(data) to view what actually is happening..
      [name]: value,
    });
  };
  const [image, setImage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    }); //pair ma vako each key value lai array ma  convert garxa.you can console.log this to watch what hppening..in sort it convert the data to array  so that we can use higher order function like foreach loop
    formData.append("image", image);
    const response = await axios.post("http://localhost:3000/book", formData);
    if (response.status === 201) {
      alert("Book added successfully");
      navigate("/");
    } else {
      alert("something went wrong");
    }
  };
  return (
    <>
     
      <div className="bg-white dark:bg-gray-800">
      <Navbar />
      <div className="bg-white dark:bg-black text-black dark:text-white rounded-lg shadow-md p-8 w-full mx-auto my-24 max-w-md">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">
          Add New Book
        </h2>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label htmlFor="bookName" className="block text-sm font-medium ">
              Book Name
            </label>
            <input
              type="text"
              id="bookName"
              name="bookName"
              className="mt-1 p-2 w-full border rounded-md dark:text-black "
              onChange={handelChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="bookPrice" className="block text-sm font-medium">
              Price
            </label>
            <input
              type="number"
              id="bookPrice"
              name="bookPrice"
              className="mt-1 p-2 w-full border rounded-md dark:text-black "
              onChange={handelChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="isbnNumber" className="block text-sm font-medium ">
              ISBN NO
            </label>
            <input
              type="number"
              id="isbnNumber"
              name="isbnNumber"
              className="mt-1 p-2 w-full border rounded-md dark:text-black"
              onChange={handelChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="authorName" className="block text-sm font-medium ">
              Author Name
            </label>
            <input
              type="text"
              id="authorName"
              name="authorName"
              className="mt-1 p-2 w-full border rounded-md dark:text-black "
              onChange={handelChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="publishedAt" className="block text-sm font-medium ">
              Publish Date
            </label>
            <input
              type="date"
              id="publishedAt"
              name="publishedAt"
              className="mt-1 p-2 w-full border rounded-md dark:text-black "
              onChange={handelChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="publication" className="block text-sm font-medium ">
              Publication Name
            </label>
            <input
              type="text"
              id="publication"
              name="publication"
              className="mt-1 p-2 w-full border rounded-md dark:text-black "
              onChange={handelChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium ">
              Book Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="mt-1 p-2 w-full border rounded-md dark:text-black"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="mb-4">
            <textarea
              name="description"
              id="description"
              placeholder="description about book"
              className="mt-1 p-2 w-full border rounded-md dark:text-black "
              onChange={handelChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add
          </button>
        </form>
      </div>
      <Footer/>
      </div>
     
    </>
  );
};

export default AddBook;
