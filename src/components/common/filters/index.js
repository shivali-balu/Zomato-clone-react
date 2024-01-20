import React from 'react';    
import "./filters.css" ; 
import FilterItem from './filterItem';

const Filters = ({filtersList}) =>{
    return(
       <div className='filters'>
         {filtersList && filtersList.map((filter)=>{
          return <FilterItem filter={filter} key={filter.id}/>
        })}
       </div>
    )
} 
export default Filters ; 