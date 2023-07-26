import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ImgOne from "../../images/img-one.jpg";
import ImgTwo from "../../images/img-two.jpg";
import ImgThree from "../../images/img-three.jpg";
import ImgFour from "../../images/img-four.jpg";
import ImgFive from "../../images/img-five.jpg";
import ImgSix from "../../images/s-one.jpg";
import ImgSeven from "../../images/s-two.jpg";
import ImgEight from "../../images/s-three.jpg";
import ImgNine from "../../images/s-four.jpg";
import ImgTen from "../../images/s-five.jpg";
import ImgEleven from "../../images/s-six.jpg";

const CrouselItem = () => {

  const containerStyle = {
    width: "100%",
    height: "100vh",
    margin: "0px auto",
    objectFit: "cover",
  };

  return (
    <div className="Nav">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={11}
        // interval={500}
        isPlaying={true}
        // playDirection="right"
      >
        <Slider
          style={containerStyle}
          className="slider">

          <Slide index={0}>
            <img src={ImgOne}  alt="Nature"/>
          </Slide>

          <Slide index={1}>
            <img src={ImgTwo}  alt="Landscape"/>
          </Slide>

          <Slide index={2}>
            <img src={ImgThree}  alt="Food"/>
          </Slide>

          <Slide index={3}>
            <img src={ImgFour}  alt="Going to hell"/>
          </Slide>

          <Slide index={4}>
            <img src={ImgFive} alt="You Idiot" />
          </Slide>

          <Slide index={5}>
            <img src={ImgSix}  alt="Foody"/>
          </Slide>

          <Slide index={6}>
            <img src={ImgSeven}  alt="Moody"/>
          </Slide>

          <Slide index={7}>
            <img src={ImgEight}  alt="Yamuna"/>
          </Slide>

          <Slide index={8}>
            <img src={ImgNine}  alt="Nature View"/>
          </Slide>

          <Slide index={9}>
            <img src={ImgTen} alt="Yoo hoo" />
          </Slide>

          <Slide index={10}>
            <img src={ImgEleven}  alt="Nature food"/>
          </Slide>

        </Slider>
      </CarouselProvider>
    </div>
  );
};

export default CrouselItem;
