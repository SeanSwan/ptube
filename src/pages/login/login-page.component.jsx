import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/swan-logo.svg';
import { SignUpWrapper, Logo } from '../signup/signup-page.component.jsx';

const LoginWrapper = styled(SignUpWrapper)``;
const LoginLogo = styled(Logo)``;
const LoginForm = styled.form`
  grid-area: form;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  input {
    margin: 10px 0;
    padding: 12px 20px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 16px;
  }
  button {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #45a049;
    }
  }
`;
const LoginInfo = styled.div`
  grid-area: info;
  text-align: center;
  p {
    margin: 10px 0;
    font-size: 14px;
  }
  a {
    color: #4CAF50;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const LoginLinks = styled.div`
  grid-area: links;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: #4CAF50;
    text-decoration: none;
    margin: 0 10px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Login = () => (
  <LoginWrapper>
    <LoginLogo>
      <img src={logo} alt="Swan Studios Logo" />
    </LoginLogo>

    <LoginForm>
      <input type="email" placeholder="Email Address" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Log In</button>
    </LoginForm>
    <LoginInfo>
      <p>Don't have an account? <a href="/signup">Sign up</a></p>
    </LoginInfo>
    <LoginLinks>
      <a href="#">Forgot Password</a>
    </LoginLinks>
  </LoginWrapper>
);

export default Login;