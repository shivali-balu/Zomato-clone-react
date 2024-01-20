import React from "react"; 
import "./diningout.css" ;  
import Collection from "../common/collection";
import Filters from "../common/filters";
import dining from "../../data/diningOut"; 
import ExploreSection from "../common/exploreSection";

const collectionList = [
    {
        id:1 , 
        title : "14 Great Cafes" , 
        cover : "https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1692344090.jpg?output-format=webp" , 
        places : "12 places" 
    } ,  
    {
        id:2 , 
        title : "11 Blissful Breakfast Places" , 
        cover : "https://b.zmtcdn.com/data/collections/91657c6e0f9452b3d54b4658e7bc90b9_1692375924.jpg?output-format=webp" , 
        places : "8 places" 
    } ,  
    {
        id:3 , 
        title : "6 Premium Coffee Shops" , 
        cover : "https://b.zmtcdn.com/data/collections/0817dce042a9e83ee7323323f5ee502d_1692376226.jpeg?output-format=webp" , 
        places : "5 places" 
    } ,  
    {
        id:4 , 
        title : "7 Best Luxury Dining Places" , 
        cover : "https://b.zmtcdn.com/data/collections/1861a2246de9e8cc96569b5dc4c3405c_1692343610.jpg?output-format=webp" , 
        places : "7 places" 
    } ,  
    {
        id:5 , 
        title : "Local Favorite Places"  , 
        cover : "https://b.zmtcdn.com/data/collections/92aaa9b449d0e05e0d118b5a0fa8fadd_1682856493.png?output-format=webp" , 
        places : "12 places" 
    } ,  
    {
        id:6 , 
        title : "10 Bingeworthy Desserts" , 
        cover : "https://b.zmtcdn.com/data/collections/5855a69f15923993f1f20925a07e581f_1692344266.png?output-format=webp" , 
        places : "10 places" 
    } ,  
    {
        id:7 , 
        title : "10 North India Food" , 
        cover : "https://b.zmtcdn.com/data/collections/cb441382af822ed30451d127d4a9eb76_1682690432.jpg?output-format=webp" , 
        places : "7 places" 
    } 
] ; 

const diningFilters = [
    {
        id: 1,
        icon: <i className="fa fa-sliders absolute-center"> </i>,
        title: "Filters",
      },
      {
        id: 2,
        title: "Pro Offers",
        icon: <i className="fa fa-angle-down absolute-center"> </i>,
      },
      {
        id: 3,
        title: "Distance",
        icon: <i className="fa fa-apps-sort absolute-center"> </i>,
      },
      {
        id: 5,
        title: "Online Bookings",
      },
      {
        id: 4,
        title: "Outdoor Seating",
      },
      {
        id: "6",
        title: "Rating: 4.0+",
      },
      {
        id: 7,
        title: "Cuisines",
        icon: <i className="fa fa-angle-down absolute-center"> </i>,
      },
      {
        id: 8,
        title: "Cafes", 
        icon: <i class="fa fa-coffee absolute-center"></i>
      },
      {
        id: 9,
        title: "Open Now",
      },
    

    
] 

const diningList = dining ; 
const DiningOut = () =>{
    return( 
        <div>
           <Collection list = {collectionList}/>  
           <div className="max-width">
            <Filters filtersList = {diningFilters}/> 
           </div> 
           <ExploreSection list={diningList} collectionName= "Trending dining restaurants in Coimbatore"/>
        </div>
      
    )
} 

export default DiningOut ; 