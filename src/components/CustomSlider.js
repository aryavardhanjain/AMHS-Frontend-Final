import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Home.css";

const CustomSlider = ({ slides, title, type }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <div className={`slider-container ${type}`}>
      <h2 className="slider-title">{title}</h2>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img
              src={slide.image}
              alt={slide.name || slide.text}
              className="slide-image"
            />
            <div className="slide-content">
              {slide.name && <h3 className="slide-name">{slide.name}</h3>}
              {slide.rating && (
                <div className="slide-rating">
                  {Array(slide.rating)
                    .fill()
                    .map((_, i) => (
                      <span key={i} className="star">
                        &#9733;
                      </span>
                    ))}
                </div>
              )}
              {slide.text && <p className="slide-text">{slide.text}</p>}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
