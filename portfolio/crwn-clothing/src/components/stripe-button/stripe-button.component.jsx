import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey  = 'pk_test_51JN2JxIczTFKzT4oB6u8TxNmLDkjsHh6S9llDfQDuz2g48uAXQnw2yYq7qiym0E2FWOQy5BkSuxJBtbGzzVwKGQh00BKOS7Zz2'
    
    // *this is a function that takes the token and logs it out
    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
      };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton;