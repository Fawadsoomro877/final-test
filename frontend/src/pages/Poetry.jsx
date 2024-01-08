import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import { fetchPeotries } from "../features/poetries/PoetrySlice";

const Poetry = () => {
  const value = useSelector((state) => state.poetry.poetries.poetries);

  const dispatch = useDispatch();

  console.log(value);
  return (
    <section>
      <Header />
      <div className="mx-36 mt-16 flex">
        <button
          onClick={() => dispatch(fetchPeotries())}
          className="text-lg
         font-bold bg-blue-500 text-white  rounded-md px-4 py-2 "
        >
          Get Poetries
        </button>
      </div>
      <div className="mx-36 mt-6 flex  justify-center">
        {value?.map((el) => (
          <div key={el.author}>
            <h1 className="text-3xl">
              <span className="font-bold">{el.title}</span>
            </h1>
            {el.lines.map((line, index) => (
              <div className="mt-4" key={el.title}>
                <p key={index} className="text-center text-sm font-semibold">
                  {line.trim()}
                </p>
              </div>
            ))}
            <caption className="flex mt-2 font-bold">{el.poet}</caption>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Poetry;
