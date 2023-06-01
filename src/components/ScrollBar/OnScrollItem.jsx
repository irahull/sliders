import React, { useState } from "react";

const OnScrollItsm = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
  };
  const nextSlide = () => {
    setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1);
  };

  const slidesStyle = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.4), rgba(0,0,0,0.56)),url(${data[currentIndex].bg})`,
    background:(`${data[currentIndex].bg}`),
    transition: "linear 0.5s",
  };

  return (
    <>
      <div className="slider-section">
        <div className="arrow-btn-left" onClick={prevSlide}>
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        {data.map((item, ind) => {
          return (
            <div
              className={
                currentIndex === ind
                  ? "slider-item"
                  : "slider-item slider-item-hidden"
              }
              key={ind}
              style={slidesStyle}
            >
              <div className="slider-image">
                <img src={item.media.default} alt="Slider Image" />
              </div>
              <div className="text">
                <div className="slider-title">{item.title}</div>
                <div className="slider-text">{item.desc}</div>
              </div>
            </div>
          );
        })}
        <div className="arrow-btn-right" onClick={nextSlide}>
          <i class="fa-solid fa-arrow-right"></i>
        </div>

        <div className="bottom-indicator">
          {data.map((_, ind) => {
            return (
              <button
                key={ind}
                onClick={() => setCurrentIndex(ind)}
                className={
                  currentIndex === ind
                    ? "indicator"
                    : "indicator indicator-inactive"
                }
              ></button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OnScrollItsm;
