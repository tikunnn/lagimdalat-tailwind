import { useState } from "react";

export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative z-0 w-full h-full">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, index) => (
          <img
            key={index}
            src={s}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
        &#x3c;
        </button>
        <button onClick={nextSlide}>
        &#x3e;
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-4 h-4 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}