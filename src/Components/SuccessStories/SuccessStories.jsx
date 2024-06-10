import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Element } from "react-scroll";
import successStories from "./successStories.json";
import SuccessItem from "./SuccessItem.jsx";

const SuccessStories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Element name="Historias">
      <section className="bg-gray-50 dark:bg-gray-900 ">
        <div className="max-w-screen-xl mx-auto px-8">
          <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white mb-8 text-center">
            Casos de Éxito
          </h2>
          <Slider {...settings}>
            {successStories.map((story, index) => (
              <SuccessItem
                key={index}
                title={story.title}
                description={story.description}
                beforeImage={story.beforeImage}
                afterImage={story.afterImage}
                testimonial={story.testimonial}
              />
            ))}
          </Slider>
        </div>
      </section>
    </Element>
  );
};

export default SuccessStories;
