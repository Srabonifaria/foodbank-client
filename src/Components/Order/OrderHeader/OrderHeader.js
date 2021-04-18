import React from 'react';
import HeaderImg from '../../../image/OrderHeader.jpg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const OrderHeader = ({handleDateChange}) => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
            <h1 style={{ color: 'purple' }}>Order your food</h1>
            <Calendar
                onChange={handleDateChange}
                value={new Date()}
            />
        </div>
        <div className="col-md-6">
            <img src={HeaderImg} alt="" className="img-fluid" />
        </div>
    </main>
    );
};

export default OrderHeader;