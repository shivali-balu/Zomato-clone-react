import React from "react";  
import "./deliveryCollections.css" ; 
import NextArrow from "../../common/Caurosel/nextArrow";
import Slider from "react-slick";
import DeliveryItem from "./deliveryItem";

const deliveryItems = [
    {
        id : 1 , 
        name : "Briyani" , 
        cover : "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png" 
    } ,  

    {
        id : 2 , 
        name : "Chicken" , 
        cover : "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png" 
    } ,  


    {
        id : 3 , 
        name : "Pizza" , 
        cover : "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" 
    } ,  

    {
        id : 4 , 
        name : "Fried Rice" , 
        cover : "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png" 
    } ,  

    {
        id : 5 , 
        name : "Dosa" , 
        cover : "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png" 
    } ,  

    {
        id : 6 , 
        name : "Paratha" , 
        cover : "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png" 
    } ,  
    {
        id : 7 , 
        name : "Idli" , 
        cover : "https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png" 
    } ,  

    {
        id : 8 , 
        name : "Thali" , 
        cover : "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png" 
    } ,  

    {
        id :9 , 
        name : "Burger" , 
        cover : "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png" 
    } ,  

    {
        id : 10 , 
        name : "Rolls" , 
        cover : "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png" 
    } , 
    
    

] ;  

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <prevArrow />
  }; 

const DeliveryColletions = () =>{
    return(
        <div className="delivery-collections">
            <div className="max-width">
                <div className="collection-title">Eat what makes you happy</div> 
                <Slider {...settings}>
                    {deliveryItems.map((item)=>{
                        return(
                            <DeliveryItem item = {item}/> 
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
} 

export default DeliveryColletions; 