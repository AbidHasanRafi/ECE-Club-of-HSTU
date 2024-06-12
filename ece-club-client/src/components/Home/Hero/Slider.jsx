import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import img_1 from "../../../assets/slider_assets/ece_1.jpg";
import img_2 from "../../../assets/slider_assets/ece_2.jpg";
import img_3 from "../../../assets/slider_assets/ece_3.jpg";
import img_4 from "../../../assets/slider_assets/ece_4.jpg";

const images = [{ src: img_1 }, { src: img_2 }, { src: img_3 }, { src: img_4 }];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="relative w-full max-w-4xl mx-auto overflow-hidden"
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-[30vh] lg:h-[50vh]"
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <button
          onClick={handlePrev}
          className="p-2 text-2xl hover:bg-slate-400 hover:bg-opacity-40 bg-opacity-50 text-black hover:text-white"
        >
          <MdArrowBackIos />
        </button>
        <button
          onClick={handleNext}
          className="p-2 text-2xl hover:bg-slate-400 hover:bg-opacity-40 bg-opacity-50 text-black hover:text-white"
        >
          <MdArrowForwardIos />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`mx-1 w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
