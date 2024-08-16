import React from "react";
import './ServiceCard';
 
const ServiceCard = ({Title,Des}) =>{
  return(  <div >
   
        <div className="service-container">
           <h1 className="titleh1">{Title}</h1>

                <p>{Des}</p>
          
        </div>
    </div>)
}

export default ServiceCard;