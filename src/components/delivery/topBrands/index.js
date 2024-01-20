import React from "react";  
import Slider from "react-slick"; 
import NextArrow from "../../common/Caurosel/nextArrow"; 
import "./topBrands.css" ; 


const topBrandList = [
    {
        id:1 , 
        name : "KFC" , 
        img : "https://b.zmtcdn.com/data/brand_creatives/logos/9da52e2b69f19bb603227a750e788d33_1613214750.png?output-format=webp" , 
        time : "23 min" 
    } ,  

    {
        id:2 , 
        name : "Pizza Hut" , 
        img : "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp" , 
        time : "28 min" 
    } ,  

    {
        id:3 , 
        name : "Domino's Pizza " , 
        img : "https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1545223343.png?output-format=webp" , 
        time : "48 min" 
    } ,  

    {
        id:4 , 
        name : "Burger King" , 
        img : "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187820.png?output-format=webp" , 
        time : "34 min" 
    } ,  
    {
        id:5 , 
        name : "McDonald's" , 
        img : "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983649.png?output-format=webp" , 
        time : "40 min" 
    } ,  
    {
        id:6 , 
        name : "Subway" , 
        img : "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676521299.png?output-format=webp" , 
        time : "27 min" 
    } ,  
    {
        id:7, 
        name : "EatFit - All Things Healthy" , 
        img : "https://b.zmtcdn.com/data/brand_creatives/logos/acc68e452e5e8ea16d56292838cd0056_1659429889.png?output-format=webp" , 
        time : "23 min" 
    } ,  
    {
        id:8, 
        name : "Meat And Eat" , 
        img : "https://b.zmtcdn.com/data/brand_creatives/logos/b051f1685674a04b1dae2ef38e9425d0_1507345943.png?output-format=webp" , 
        time : "29 min" 
    } ,  
    {
        id:9 , 
        name : "Faasos - Wraps & Rolls" , 
        img : "https://b.zmtcdn.com/data/brand_creatives/logos/45137b90df2f1154a8766b00c03c8fc3_1655800804.png?output-format=webp" , 
        time : "43 min" 
    } ,  
    {
        id:10 , 
        name : "CakeZone" , 
        img : "https://b.zmtcdn.com/data/brand_creatives/logos/50760f50e2c9d1220c3c98e5a32eba28_1661166543.png?output-format=webp" , 
        time : "53 min" 
    } , 
] ; 

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <prevArrow/>
  }; 
 
const TopBrands = () =>{
    return( 

        <div className="max-width">
            <div className="top-brands-wrapper">
                <div className="collection-title main-title">Top Brands for you </div> 
                <Slider {...settings}>
                   {topBrandList.map((brand)=>{
                     return(
                       <div>
                          <div className="top-brands-cover">
                            <img src= {brand.img} className="top-brand-image" alt={brand.name} />
                          </div> 
                          <div className="brand-info">
                          <div className="top-brand-name">{brand.name}</div>
                          <div className="time">{brand.time}</div>
                          </div>
                       </div>
                     )
                   })}
                </Slider>
            </div>
        </div>
    )
} 
export default TopBrands ; 