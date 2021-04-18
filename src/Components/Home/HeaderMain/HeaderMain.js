import React from 'react';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <div className="row d-flex justify-content-center align-items-center  main">   
    <div  className="col-md-8 offset-md-1 ">
    <h1>It's the food you love, delivered</h1>
        <form className="d-flex shadow p-3 mb-5 bg-body rounded form" action="" method="GET">
        <input className="w-50" type="search" name="" placeholder="Enter your area"/>
   
                  <div>
                  <button className="btn btn-primary  areaBtn">Delivered</button> <span>or</span> <button className="btn btn-primary areaBtn">Pick up</button>
              
                  </div>
        </form>
    </div>
                 
        </div>
    );
};

export default HeaderMain;