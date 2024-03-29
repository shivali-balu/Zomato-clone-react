import React from "react";
import Slider from "react-slick";
import "./collection.css";
import NextArrow from "../../common/Caurosel/nextArrow"; 
import PrevArrow from "../../common/Caurosel/prevArrow" 

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Collections = ({ list }) => {
  return (
    <div className="collection-wrapper">
      <div className="max-width collection">
        <div className="collections-title">Collections </div>{" "}
        <div className="collection-subtitle-row">
          <div className="collection-subtitle-text">
            Explore curated lists of top restaurants, cafes, pubs and bars in
            Coimbatore, based on trends{" "}
          </div>{" "}
          <div className="collection-location">
            <div> All collections in Coimbatore <i className="fa-solid fa-caret-right"></i></div>{" "}
            <i className="fi fi-rr-caret-right absolute-center"> </i>{" "}
          </div>{" "}
        </div>{" "}
        <Slider {...settings}>
          {" "}
          {list.map((item) => (
            <div>
              <div className="collection-cover">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="collection-image"
                />
                <div className="gradient-bg"> </div>{" "}
                <div className="collection-card-title"> {item.title} </div>{" "}
                <div className="collection-card-subtitle">
                  <div> {item.places} <i className="fa-solid fa-caret-right"></i></div>{" "}
                  <i className="fi fi-rr-caret-right absolute-center"> </i>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </Slider>{" "}
      </div>{" "}
    </div>
  );
};

export default Collections;