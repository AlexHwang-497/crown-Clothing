// * our header component will be a functional componnet

import React from 'react'
//* connect is a higher order component that lets us modify our compnenet ot have access to things realted to redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// *imports our firebase stuff
import {auth} from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/card-dropdown.component';
import { selectCartHidden, selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


// todo: because this is not a jsx ifle, we don't actually set the import.  we are importing the SVG as the react component keyword but we're setting 
    // todo: it to the logo here
import{ReactComponent as Logo} from '../../assets/crown.svg'
import { HeaderContainer,LogoContainer, OptionsContainer, OptionLink } from './header.styles';


// *our logo will link to the home page when you click it
    //* we will import in link from React router dom
// * we destrcuture w/ current user.  this helps us with signing out/in users
//*if current user is true, provide a <div> othersiwe a <link> *
    // * inside the <div> - we will change to sign out
    // * inside the <link> - we will change to sign signin
const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink to='/shop'>
          CONTACT
        </OptionLink>
   
        {currentUser ? (
          <OptionLink as='div' onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>
            SIGN IN
          </OptionLink>
        )}
        <CartIcon/>
      </OptionsContainer>  
      {/* this allows us to click the cart dropdown aka toggling it */}
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
)
// *this naming can be anything but mapStateProps is standard w/ redux codebases
// * state = this is the root reducer
// *by doing this we are now getting that null value as current user being passed in as current user
// ? this is going to be  a very common pattern that we will write in future compnents
// ! discuss with carlos in regards to how the null is passed into current user

// *the synax we are writing here is for when we want to destructure nested values
  // ! discuss with carlos the destructured value
  const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });

export default connect(mapStateToProps)(Header);