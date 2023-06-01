import React, { useState } from "react";
const Slider = ({ slides }) => {
  const [curentSlide, setCurentSlide] = useState(0);

  const sliderStyle = {
    height: "100%",
    position: "relative",
  };

  const slidesStyle = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[curentSlide].url})`,
    transition: "linear 0.8s",
  };

  const leftIconStyle = {
    position: "absolute",
    top: "50%",
    left: "5%",
    transform: "translate(-0%, -50%)",
    fontSize: "30px",
    left: "40px",
    color: "black",
    fontWeight: "500",
    backgroundColor: "white",
    padding: "10px 15px",
    borderRadius: "999px",
  };
  const rightIconStyle = {
    position: "absolute",
    right: "40px",
    top: "50%",
    transform: "translate(0%, -50%)",
    fontSize: "30px",
    color: "black",
    fontWeight: "500",
    backgroundColor: "white",
    padding: "10px 15px",
    borderRadius: "999px",
  };

  const sliderIndicator = {
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    overflow: "hidden",
  };

  const indicatorStyle = {
    margin: "0px 4px",
    width: "8px",
    height: "8px",
    outline: "none",
    border: "none",
    borderRadius: "999px",
    cursor: "pointer",
  };

  const previousImg = () => {
    const isfirstSlide = curentSlide === 0;

    const newSlide = isfirstSlide ? slides.length - 1 : curentSlide - 1;

    setCurentSlide(newSlide);
  };

  const nextImg = () => {
    const isLastSlide = curentSlide === slides.length - 1;

    const newSlide = isLastSlide ? 0 : curentSlide + 1;

    setCurentSlide(newSlide);
  };

  return (
    <div className="slider" style={sliderStyle}>
      <div className="left-icon" style={leftIconStyle} onClick={previousImg}>
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div className="right-icon" style={rightIconStyle} onClick={nextImg}>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
      <div className="slider-main" style={slidesStyle}></div>
      <div style={sliderIndicator}>
        {slides.map((item, ind) => {
          return (
            <button
              key={ind}
              style={indicatorStyle}
              onClick={() => setCurentSlide(ind)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
