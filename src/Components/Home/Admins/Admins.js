import React from 'react';
import Admin from '../Admin/Admin';

const Admins = () => {
    return (
        <section>
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Admins</h5>
                <div className="row">
                 <Admin></Admin>
               <Admin></Admin>
               <Admin></Admin>
                </div>
            </div>
        </section>
    );
};

export default Admins;