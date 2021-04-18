import React from 'react';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';

const OrderDataTable = ({orders}) => {

  

    return (
      <div className="row">
          <div className="col-md-8">
          <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Food Quantity</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Food Item</th>
                <th className="text-secondary" scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {
                  orders.map((order, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{order.name}</td>
                        <td>{order.quantity}</td>
                        <td>{order.phone}</td>
                        <td>{order.service}</td>
                        <td>{order.price}</td>
                        <button  style={{color:'black'}} className="btn-primary">Buy Product</button>
                    </tr>
                    )
                }
                
            </tbody>
        </table>
          </div>
          <div className="col-md-4">
                <ProcessPayment></ProcessPayment>
          </div>
      </div>
    );
};

export default OrderDataTable;