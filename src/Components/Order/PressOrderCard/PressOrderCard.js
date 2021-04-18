import React, { useState } from 'react';
import OrderForm from '../OrderForm/OrderForm';

const PressOrderCard = ({food,date}) => {

const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{food.foodItem}</h5>
                    <h6>{food.visitingHour}</h6>
                    <p>{food.price}</p>
                    <p>{food.totalQuantity} AVAILABLE Quantity</p>
                     <button onClick={openModal} className="btn btn-primary text-uppercase">Buy Now</button>
                     <OrderForm modalIsOpen={modalIsOpen} orderOn={food.foodItem} price={food.price} date={date} closeModal={closeModal}></OrderForm>
                     <OrderForm></OrderForm>
                </div>
            </div>
        </div>
    );
};

export default PressOrderCard;