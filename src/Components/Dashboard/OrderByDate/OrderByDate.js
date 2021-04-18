import React from 'react';
import OrderShortList from '../OrderShortList/OrderShortList';

const OrderByDate = ({orders}) => {
    return (
        <div>
            <h2>Orders</h2>
            {
                orders.length ?
                 <OrderShortList orders={orders} ></OrderShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Orders for this Time</h4>
                </div>
            }

        </div>
    );
};

export default OrderByDate;