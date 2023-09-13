import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { signIn, signUp } from '../actions/authActions';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const LoginPage = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  return (
    <div>
      <Container className="login-container mt-5">
        
        {isSignInForm ? (
          <SignIn /> 
        ) : (
          <SignUp /> 
        )}
        <p>
          {isSignInForm ? 'You do not have an account? ' : 'Do you already have an account? '}
          <Button variant="link" onClick={() => setIsSignInForm(!isSignInForm)}>
            {isSignInForm ? 'Sign up here' : 'Log in here'}
          </Button>
        </p>
        <Link to="/">Return to homepage</Link>
      </Container>
    </div>
  );
};

export default LoginPage;
