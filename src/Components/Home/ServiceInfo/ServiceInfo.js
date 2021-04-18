import React from 'react';






const ServiceInfo = ({service}) => {
    return (
        
        <main className=" d-flex flex-column-reverse bd-highlight">
            
           <div >
          
              
              <h1>{service.title}</h1>  
              <p>{service.description}</p> 
           </div>
    </main>
    );
};

export default ServiceInfo;
