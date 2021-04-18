import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')


const OrderForm = ({ modalIsOpen, closeModal, orderOn, date,price }) => {

    const { register, handleSubmit, errors } = useForm();
    
     const onSubmit = data => {
         data.service =orderOn;
         data.date = date;
         data.price =price
         data.created = new Date();
        fetch('https://blooming-inlet-54142.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                closeModal();
                 alert('Appointment created successfully.');
            }
        })


        
    }



    return (
        <div style={{backgroundColor:'gray'}}>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 className="text-center text-brand">{orderOn}</h2>
          <p className="text-secondary text-center"><small>ON {date}</small></p>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control"></input>
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row">
                        <div className="col-4">

                            <select className="form-control" name="quantity" ref={register({ required: true })} >
                                <option disabled={true} value="Not set">Select Quantity</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            {errors.quantity && <span className="text-danger">This field is required</span>}

                        </div>
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand">Send</button>
                    </div>
                </form>
        </Modal> 
        </div>
    );
};

export default OrderForm;