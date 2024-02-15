import { useState } from "react";

export default function Register() {
  const [genres, setGenres] = useState([
    { name: "Soft Rock", isActive: false },
    { name: "Rock", isActive: false },
    { name: "Country", isActive: false },
    { name: "Folk", isActive: false },
    { name: "Classical", isActive: false },
    { name: "Hard Rock", isActive: false },
    { name: "Pop", isActive: false },
    { name: "Blues", isActive: false },
    { name: "Soul", isActive: false },
  ]);

  const handleToggleGenre = (index) => {
    setGenres((prevGenres) => {
      const updatedGenres = [...prevGenres];
      updatedGenres[index] = {
        ...updatedGenres[index],
        isActive: !updatedGenres[index].isActive,
      };
      return updatedGenres;
    });
  };
  return (
    <div className="w-full flex justify-center ">
      <img
        src="/images/bg.png"
        className="h-full w-full object-cover opacity-30 h-screen fixed -z-10"
      />
      <div className="h-full bg-white shadow-lg border border-black/10 w-full md:w-[800px] rounded-lg z-50 md:my-10 px-6 py-6 ">
        <div>
          <h1 className="text-2xl ff-oswald tracking-wide	 font-semibold">
            ROCK HOUSE MUSIC INSTITUTE
          </h1>
          <div className="text-gray-400 ">Biratnagar-2, Morang</div>
          <div className="text-gray-400 ">Tinpaini</div>
        </div>
        <hr className="my-3" />
        <div className="text-lg font-semibold text-blue-500">
          Please fill the form below :
        </div>
        <div className="grid grid-cols-2 gap-2 gap-x-3">
          <div className="flex flex-col gap-2 mt-2">
            <label className="inline-flex gap-1">
              First Name<span className="text-red-500">*</span>
            </label>
            <input className="w-full border border-black/20 rounded outline-none px-2 py-2" />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <label className="inline-flex gap-1">
              Last Name<span className="text-red-500">*</span>
            </label>
            <input className="w-full border border-black/20 rounded outline-none px-2 py-2" />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <label className="inline-flex gap-1">
              D.O.B<span className="text-red-500">*</span>
            </label>
            <input className="w-full border border-black/20 rounded outline-none px-2 py-2" />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <label className="inline-flex gap-1">
              Occupation<span className="text-red-500"></span>
            </label>
            <input className="w-full border border-black/20 rounded outline-none px-2 py-2" />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <label className="inline-flex gap-1">
              Address 1<span className="text-red-500">*</span>
            </label>
            <input className="w-full border border-black/20 rounded outline-none px-2 py-2" />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <label className="inline-flex gap-1">
              Address 2<span className="text-red-500">*</span>
            </label>
            <input className="w-full border border-black/20 rounded outline-none px-2 py-2" />
          </div>
        </div>
        <div className="mt-3 font-semibold text-blue-500">Guardian Details</div>
        <hr className="my-2" />
        <div className="grid grid-cols-2 gap-2 gap-x-3">
          <div className="flex flex-col gap-2 mt-2">
            <label className="inline-flex gap-1">
              Father Name<span className="text-red-500">*</span>
            </label>
            <input className="w-full border border-black/20 rounded outline-none px-2 py-2" />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <label className="inline-flex gap-1">
              Mother Name<span className="text-red-500">*</span>
            </label>
            <input className="w-full border border-black/20 rounded outline-none px-2 py-2" />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <label className="inline-flex gap-1">
              Contact<span className="text-red-500">*</span>
            </label>
            <input className="w-full border border-black/20 rounded outline-none px-2 py-2" />
          </div>
        </div>
        <div className="mt-3  font-semibold text-blue-500">
          Please answer the given quetions
        </div>
        <hr className="my-2" />
        <div>
          <div className="flex flex-col gap-2 mt-2">
            <label className="inline-flex gap-1">
              Have you ever take Voice/Vocal lesson? How long?
              <span className="text-red-500">*</span>
            </label>
            <textarea className="w-full border h-20 border-black/20 rounded outline-none px-2 py-2 resize-none" />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <label className="inline-flex gap-1">
              Whom you were inspired by{" "}
              <span className="text-gray-400">(Idol)</span>?
              <span className="text-red-500">*</span>
            </label>
            <textarea className="w-full border h-20 border-black/20 rounded outline-none px-2 py-2 resize-none" />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <label className="inline-flex gap-1">
              Vocal Genre's
              <span className="text-red-500">*</span>
            </label>
            <div className="grid md:grid-cols-4 gap-4">
              {genres.map((genre, index) => (
                <div
                  key={index}
                  className={`border border-black/20 py-2 px-2 flex justify-center items-center cursor-pointer ${
                    genre.isActive ? "bg-blue-200" : ""
                  }`}
                  onClick={() => handleToggleGenre(index)}
                >
                  {genre.name}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <label className="inline-flex gap-1">
              Why do you want to learn vocal?
              <span className="text-red-500">*</span>
            </label>
            <textarea className="w-full border h-20 border-black/20 rounded outline-none px-2 py-2 resize-none" />
          </div>
        </div>
        <button className="mt-3 bg-blue-500 px-4 text-white py-2 rounded hover:bg-blue-400">
          Submit
        </button>
      </div>
    </div>
  );
}
