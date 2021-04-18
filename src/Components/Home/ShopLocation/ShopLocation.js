import React, { useEffect, useState } from 'react';
import LocationCard from '../LocationCard/LocationCard';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const ShopLocation = () => {

    const [services,setServices]= useState([])

    useEffect(() => {
        fetch('https://blooming-inlet-54142.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))

    },[])
    return (
        <section className="row">
            {
                services.map(location => <LocationCard location={location}></LocationCard>)
            }
        </section>
    );
};

export default ShopLocation;