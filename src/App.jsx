import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="relative flex flex-col items-center gap-16 h-full pb-60 gif-bg">
        <p className="montecarlo-regular sm:text-9xl text-7xl  text-white pt-8">
          ​​SN
        </p>
        <p className="moul-regular sm:text-3xl text-2xl text-yellow-400">
          ​​សូមគោរពអញ្ចើញ
        </p>
        <p className="funnel text-yellow-300 sm:text-6xl text-3xl">
          To All My Friends And Hunnii
        </p>
        <Link to="/about">
          <div
            className="preahvihear-regular border-1 border-yellow-600 rounded-full mt-20 bg-violet-950 animate-scalePulse cursor-pointer"
            id="button"
          >
            <p className="font-thin text-yellow-300 sm:text-2xl py-2 px-6 ">
              បើកធៀប
            </p>
          </div>
        </Link>
        <p className="preahvihear-regular text-yellow-300 font-bold sm:text-base text-sm">
          ចុចអេក្រង់ដើម្បីបើកធៀបអេឡិចត្រូនិច
        </p>
      </div>
    </>
  );
}

export default App;
