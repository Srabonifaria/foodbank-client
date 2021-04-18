import React from 'react';
import Brahmanbaria from '../../../image/brahmanbaria.jpg';
import Lalbagh from '../../../image/lalbagh.jpg';
import LocationCard from '../LocationCard/LocationCard';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const locationData =[
    {
        name: 'Dhaka',
        image:Lalbagh,
        icon:faArrowRight
    },
    {
        name: 'Brahmanbaria',
        image:Brahmanbaria,
        icon:faArrowRight
    },
    {
        name: 'Khulna',
        image:Brahmanbaria,
        icon:faArrowRight
    },
    {
        name: 'Lalbagh',
        image:Lalbagh,
        icon:faArrowRight
    },
    {
        name: 'Cumilla',
        image:Brahmanbaria,
        icon:faArrowRight
    },
    {
        name: 'Cumilla',
        image:Lalbagh,
        icon:faArrowRight
    }
]

const ShopLocation = () => {
    return (
        <section className="row">
            {
                locationData.map(location => <LocationCard location={location}></LocationCard>)
            }
        </section>
    );
};

export default ShopLocation;