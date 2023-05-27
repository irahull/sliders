import ImgOne from "../../images/img-one.jpg";
import ImgTwo from "../../images/img-two.jpg";
import ImgThree from "../../images/img-three.jpg";
import ImgFour from "../../images/img-four.jpg";
import ImgFive from "../../images/img-five.jpg";
import Slider from "./CrouselItem";

function Crousel() {
  const sliderImages = [
    {
      url: ImgOne,
    },
    {
      url: ImgTwo,
    },
    {
      url: ImgThree,
    },
    {
      url: ImgFour,
    },
    {
      url: ImgFive,
    },
  ];

  const containerStyle = {
    width: "100%",
    height: "100vh",
    margin: "0px auto",
  };

  return (
    <>
      <div className="slider-container" style={containerStyle}>
        <Slider slides={sliderImages} />
        <button></button>
      </div>
    </>
  );
}

export default Crousel;
