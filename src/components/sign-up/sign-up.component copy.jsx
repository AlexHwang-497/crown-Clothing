import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
// *we need this because we are creating and authenticating new users
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss'


class SignUp extends React.Component{
    constructor(){
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    // * will be asyn function that get the event and what we will do is prevent the default from submitting
    handleSubmit=async event =>{
        // *in this case we want to prevent the default action of that a form submit action
        // todo: The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
        event.preventDefault()
        // *what we want to do here i we want to do like what we did w/ google autnntication happen, instead we manually create it
        const { displayName, email, password, confirmPassword } = this.state;
        // * if passowrd doesn't match we dont want to move foward
        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
          }
      
          try {
            //   *we will deconstruct user off the return of the await .create userw/ email and passwor and pass in email and password
            const { user } = await auth.createUserWithEmailAndPassword(
              email,
              password
            );
            //* once, the above has been confirmed, we want to run our createUserProfileDocument() w/user and display name
            await createUserProfileDocument(user, { displayName });
            // * w/ the above confirmed, we then run this.setState  
            this.setState({
              displayName: '',
              email: '',
              password: '',
              confirmPassword: ''
            });
          } catch (error) {
            console.error(error);
          }
    }

    handleChange = event => {
        // *we will destructure the name and value off of the target
        const { name, value } = event.target;
        // * we set state and dynamically set the name to value
        this.setState({ [name]: value });
      };

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required            
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'> SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp