import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import SplitCardForm from './SplitCardForm/SplitCardForm';
const stripePromise = loadStripe('pk_test_51IePEwJHvS8R63SqeW4FLRppKkkCf0HczaNg7GMAo1JVMgJ9XElSIZ3x72VnITSy2HqQP226M6gZYQbmEFr9nlhA00tmJdQ8Ow');
const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
           <SplitCardForm></SplitCardForm>
        </Elements>
    );
};

export default ProcessPayment;