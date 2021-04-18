import React, { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import OrderHeader from '../OrderHeader/OrderHeader';
import PressOrder from '../PressOrder/PressOrder';

const Order = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <div>
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <OrderHeader handleDateChange={handleDateChange}></OrderHeader>
            <PressOrder date={setSelectedDate}></PressOrder>
            <Footer></Footer>
        </div>
    );
};

export default Order;