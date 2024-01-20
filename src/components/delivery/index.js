import React from "react"; 
import './delivery.css' ;   
import Filters from "../common/filters";
import DeliveryColletions from "./deliveryCollections";
import TopBrands from "./topBrands";
import ExploreSection from "../common/exploreSection";
import { restaurants } from "../../data/restaurant";

const deliveryFilters = [
    {
      id:1 ,  
      icon : <i class="fa fa-sliders absolute-center" aria-hidden="true"></i> , 
      title : "Filters" 
 
    } , 
    {
        id:2 , 
        title : "Rating 4.0+" 
    } , 
    {
        id:3 , 
        title : "Pure Veg"
    } ,  

    {
        id:4 ,  
        icon : <i class="fa fa-angle-down absolute-center" aria-hidden= "true"></i>  ,
        title : "Cuisines" ,
        
    } , 
    

    
] 

/* const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <prevArrow />
  };  */ 

const restaurantList = restaurants; 

const Delivery = () =>{
    return(
        <div>
           <div className="max-width">
           <Filters filtersList = {deliveryFilters}/> 
           </div> 
           <DeliveryColletions/> 
           <TopBrands/> 
           <ExploreSection list={restaurantList} collectionName = "Delivery Restaurants in Coimbatore"/> 
        </div>
    )
} 

export default Delivery ; 