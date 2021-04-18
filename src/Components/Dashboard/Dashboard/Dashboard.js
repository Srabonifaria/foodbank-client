import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import OrderByDate from '../OrderByDate/OrderByDate';
import { UserContext } from '../../../App';

const containerStyle = {
    backgroundColor: "#eb8e8e",
    height:"100%"
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [orders, setOrders] = useState([null]);
    const handleDateChange = date => {
        setSelectedDate(new Date());
    }

    useEffect( () => {
        fetch('http://localhost:7000/ordersByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({date: selectedDate,email:loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data => setOrders(data))
    }, [selectedDate])

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 d-flex justify-content-center">
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
                </div>
                <div className="col-md-5">
                   <OrderByDate orders={orders}></OrderByDate> 
                </div>
            </div>
        </section>
    );
};

export default Dashboard;