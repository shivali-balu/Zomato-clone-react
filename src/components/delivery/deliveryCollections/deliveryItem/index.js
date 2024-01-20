import React from "react";   
import "./deliveryItem.css" ; 

const DeliveryItem = ({item}) =>{
    return(
        <div className="delivery-item-wrapper">
            <div className="delivery-item-cover">
                <img src= {item.cover} alt={item.name} className="delivery-item-image"/> 
            </div> 
            <div className="delivery-item-name">{item.name}</div>
        </div>
    )
} 
export default DeliveryItem ; 