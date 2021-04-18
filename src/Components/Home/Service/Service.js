import React from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import Delivery from '../../../image/deliveryFood.jpg'


const serviceData =[
    {
        title:'More Revenue',
        description:'With foodpanda, you will gain an additional source of income. Our customers are continually searching the latest cool restaurants in their city.',
        icon:faCheckCircle
    },
    {
        title:'Dedicated Support',
        description:'From perfecting your delivery menu and sending out weekly reports, to improving your performance, we are here to help you every step of the way.',
        icon:faCheckCircle
    },
    
    {
        title:'Constant Flexibility',
        description:'Pause orders if you are feeling overwhelmed. You decide for yourself when you want to cook for your food lovers and are free to leave on a monthly basis',
        icon:faCheckCircle
    }
]

const Service = () => {
    return (
        <section className="row container ">
            <div className="col-md-6 justify-content-center">
            <img style={{ height:'300px'}} src={Delivery} className="img-fluid" alt=""/>
            </div>
            <div style={{backgroundColor: 'pink',color: '#3A4256'}} className="col-md-6 shadow">
            <h1>Advantage of Joining Us</h1>
            {
                serviceData.map(service => <ServiceInfo service={service}></ServiceInfo>)
            }
            </div>
        </section>
    );
};

export default Service;