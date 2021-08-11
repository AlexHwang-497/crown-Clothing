// * our header component will be a functional componnet

import React from 'react'
import {Link} from 'react-router-dom'
// *imports our firebase stuff
import {auth} from '../../firebase/firebase.utils'
// todo: because this is not a jsx ifle, we don't actually set the import.  we are importing the SVG as the react component keyword but we're setting 
    // todo: it to the logo here
import{ReactComponent as Logo} from '../../assets/crown.svg'
import './header.styles.scss'


// *our logo will link to the home page when you click it
    //* we will import in link from React router dom
// * we destrcuture w/ current user.  this helps us with signing out/in users
//*if current user is true, provide a <div> othersiwe a <link> *
    // * inside the <div> - we will change to sign out
    // * inside the <link> - we will change to sign signin
const Header = ({ currentUser }) => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
   
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
)
export default Header