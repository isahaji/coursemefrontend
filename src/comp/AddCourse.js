import React, { useState } from "react";
import axios from "axios";

const AddCourse = () => {
  const [name, setName] = useState("");
  const [rating, setrating] = useState("");
  const [image, setImage] = useState("");
  const [desc, setdesc] = useState("");
  const [utube, setUtube] = useState("");

  function postData() {

    //yeet
    if (rating > 5 || rating < 1) {
      alert("Number has to be less than 5 and greater than 1")
    } else {
      axios
        .post("https://coursemebe.herokuapp.com/cards", {
          title: name,
          rating: rating,
          Desc: desc,
          url: image,
          Youtube: utube,
        })
        .then(function (response) {
          alert("Your Data has been added");
        })
        .catch(function (error) {
          alert(error);
        });
      setName("");
      setrating("");
      setImage("");
      setdesc("");
      setUtube("");

    }




  }

  return (
    <div className="h-full dark:bg-gray-700 p-2 ">
      <div className="grid grid-col-1 gap-3 rounded-2xl bg-green-500 justify-center m-12 p-6 ">
        <div className="text-center text-white p-2 font-bold text-3xl">
          Add A Course
        </div>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-100 p-2 rounded-lg border-2 border-indigo-500 shadow-md focus:outline-none focus:border-indigo-600"
        />
        <input
          type="number"
          placeholder="rating"
          value={rating}
          onChange={(e) => setrating(e.target.value)}
          className="bg-gray-100 p-2 rounded-lg border-2 border-indigo-500 shadow-md focus:outline-none focus:border-indigo-600"
        />
        <input
          type="text"
          placeholder="Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="bg-gray-100 p-2 rounded-lg border-2 border-indigo-500 shadow-md focus:outline-none focus:border-indigo-600"
        />
        <input
          type="text"
          placeholder="desc"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
          className="bg-gray-100 p-2 rounded-lg border-2 border-indigo-500 shadow-md focus:outline-none focus:border-indigo-600"
        />
        <input
          type="text"
          placeholder="Youtube ID"
          value={utube}
          onChange={(e) => setUtube(e.target.value)}
          className="bg-gray-100 p-2 rounded-lg border-2 border-indigo-500 shadow-md focus:outline-none focus:border-indigo-600"
        />
        <button className="bg-blue-500 hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-600 rounded" onClick={postData}>Add </button>
      </div>
    </div>
  );
};

export default AddCourse;
