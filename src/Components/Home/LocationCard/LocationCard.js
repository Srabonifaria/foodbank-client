import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
const LocationCard = ({location}) => {
    return (
<div className="col-md-4 shadow d-flex justify-content-center p-3">
  
<div className="card text-white" style={{height:'200px',width: '18rem'}}>
  <img src={location.image} class="card-img-top img-fluid" alt="..."/>
  <div class="card-img-overlay">
    <p class="card-text">{location.name} </p>
    <Link to="/home" className="btn-primary"> <FontAwesomeIcon icon={location.icon} /></Link>
  </div>
</div>
</div>


        // <div className="col-md-4">
        //     <div>
        //         <h3>{location.name}</h3>
        //         <img style={{height:'400px'}} className="img-fluid" src={location.image} alt=""/>
        //         <FontAwesomeIcon icon={location.icon} />
        //     </div>
        // </div>
    );
};

export default LocationCard;