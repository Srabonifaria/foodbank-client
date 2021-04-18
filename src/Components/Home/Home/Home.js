import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Admin from '../Admin/Admin';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Review from '../Review/Review';
import ShopLocation from '../ShopLocation/ShopLocation';

const Home = () => {
    return (
        <div>
           <Header></Header> 
           <ShopLocation></ShopLocation>
           <Admin></Admin>
           <Contact></Contact>
           <Review></Review>
           <Footer></Footer>
        </div>
    );
};

export default Home;