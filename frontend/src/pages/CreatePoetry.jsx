import { useState } from "react";
import Header from "../components/header";
import { useDispatch } from "react-redux";
import { createPoetry } from "../features/postPeotry/createPoetrySlice";

const CreatePoetry = () => {
  const [title, setTitle] = useState("");
  const [poet, setPoet] = useState("");
  const [lines, setLines] = useState("");

  const dispatch = useDispatch();
  const handleCreatePoetry = () => {
    dispatch(createPoetry({ title, poet, lines }));

    setTitle("");
    setPoet("");
    setLines("");
  };

  return (
    <>
      <Header />
      <section className="mx-36 ">
        <div className=" mt-16 flex flex-col justify-center">
          <div className="mb-4">
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Poetry Title"
              value={poet}
              onChange={(e) => setPoet(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Author"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <textarea
              rows="5"
              className="w-full px-3 py-2 border rounded-md resize-none focus:outline-none focus:border-blue-500"
              placeholder="Lines"
              value={lines}
              onChange={(e) => setLines(e.target.value)}
            />
          </div>
        </div>
        <div className="">
          <button
            onClick={handleCreatePoetry}
            className="text-lg
        font-bold bg-blue-500 text-white  rounded-md px-4 py-2 "
          >
            Create Poetry
          </button>
        </div>
      </section>
    </>
  );
};

export default CreatePoetry;
