import React, { Component } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const NextArrow = ({ onClick }) => {
  return (
  <div className="nextArrow" onClick={onClick}>
      <BsChevronRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prevArrow" onClick={onClick}>
      <BsChevronLeft />
    </div>
  );
};

export default class Carousel extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {images} = this.props;
    const slides_to_show = this.props.slides;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: slides_to_show,
      slidesToScroll: 1,
      centerMode: true,
      focusOnSelect: true,
      adaptiveHeight: true,
      // arrows: true,
      nextArrow: <NextArrow onClick/>,
      prevArrow: <PrevArrow onClick/>
    };
    console.log("slides_to_show:" + slides_to_show);

    return (
        <Slider {...settings}>
          {images.map((image) => {
            return (
              <div className="wrapper" key="">
                <img
                  className="sliderImg"
                  src={image.url}
                  alt={image.alt}
                />
              </div>
            )
          })}
        </Slider>
    );
  }
}
