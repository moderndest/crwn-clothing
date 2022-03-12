import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51KcdgXLkLcT4ffFysJqgCuLzrIJEjVZbC9Wcme6nnxgoFv4IY6kmXdV97BfVCVNo6Nb1tFEpKS0OpnPqaHnT9Bz0007bIhdC1a' ;

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name = 'CRWN CLothing Ltd.'
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/Cuz.svg"
            description= {`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;