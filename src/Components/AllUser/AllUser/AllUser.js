import React, { useEffect, useState } from 'react';
import OrderDataTable from '../../Dashboard/OrderDataTable/OrderDataTable';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AllUser = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://blooming-inlet-54142.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className="container-fluid row " >
        <Sidebar></Sidebar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">All Users</h5>
            <OrderDataTable orders={orders}></OrderDataTable>
        </div>
    </div>
    );
};

export default AllUser;