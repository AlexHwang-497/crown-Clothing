import React from 'react';

import './custom-buttom.styles.scss';
// *we will first pull the children off our pros that get passed into our custom button 
    // *we will destructure all the other props int this otherProps and spread into our custom button
    // *we put children inside our button tag

    const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
      <button
      // * we will say if inverted is true, then add the inverted class
        // *and then in our custom button we will add in this invertd class and hwat it will do is the opposite of what our regular styoning on our custom button is
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
    );
    
export default CustomButton;