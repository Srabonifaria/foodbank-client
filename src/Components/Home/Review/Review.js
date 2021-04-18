import React from 'react';
import wilson from '../../../image/wilson.png';
import ema from '../../../image/ema.png';
import aliza from '../../../image/aliza.png';
import ReviewInfo from '../ReviewInfo/ReviewInfo';
    

const ReviewData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]


const Review = () => {
    
    return (

        <section className="review my-5 py-5">
        <div className="container">
            <div className="section-header">
                <h5 className="text-primary text-uppercase">Service Review</h5>
                <h1>What Our Customers Says </h1>
            </div>
            <div className="card-deck mt-5">
                 {
                     ReviewData.map(review => <ReviewInfo review={review} key={review.name}></ReviewInfo>)
                 }
             </div>
        </div>
    </section>

       
    );
};

export default Review;