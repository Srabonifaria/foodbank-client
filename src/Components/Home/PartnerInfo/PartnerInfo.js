import React from 'react';
import './PartnerInfo.css'
const PartnerInfo = () => {
    return (
        <main className="row d-flex align-items-center">
            <div className="text-center">
                <h5>You prepare the food, we handle the rest</h5>
              <div className="partner">
              <div style={{backgroundColor:'gray'}} className="col-md-4 offset-md-1">
              <h4>List your restaurant on foodbank</h4>
            <p className="text-seconary">Would you like thousands of new customers to taste your amazing food? So would we!
It's simple: we list your menu online, help you process orders, pick them up, and deliver them to hungry pandas - in a heartbeat!
Interested? Let's start our partnership today!</p>
                    <button className="btn-primary areaBtn">GET STARTED</button>
            </div>
            </div>
            </div>
        </main>
    );
};

export default PartnerInfo;