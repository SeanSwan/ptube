import React from 'react';
import styled from 'styled-components';

const SignUpWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas: 
    "logo form"
    "info form"
    "links form";
  width: 100%;
  padding: 30px;
  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas: 
      "logo"
      "form"
      "info"
      "links";
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas: 
      "logo logo form form"
      "info info form form"
      "links links form form";
  }
`;

const Logo = styled.div`
  grid-area: logo;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 150px;
  }
`;

const Form = styled.form`
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

const Info = styled.div`
  grid-area: info;
  text-align: center;
  p {
    font-size: 18px;
    font-weight: 600;
    color: #333;
  }
`;

const Links = styled.div`
    grid-area: links;
    display: flex;
    justify-content: space-around;
  a {
    color: #333;
    text-decoration: none;
    &:hover {
    color: #4CAF50;
    }
  }
`;
  
const SignUp = () => (
  <SignUpWrapper>
    <Logo>
      <img src={require('../../assets/swan-logo.svg')} alt="Swan Studios Logo" />
    </Logo>
    <Form>
       <input type="text" placeholder="Full Name" required />
       <input type="email" placeholder="Email Address" required />
       <input type="password" placeholder="Password" required />
       <button type="submit">Sign Up</button>
    </Form>
    <Info>
       <p>By signing up, you agree to our terms and conditions.</p>
    </Info>
    <Links>
       <a href="#">Privacy Policy</a>
       <a href="#">Terms of Service</a>
    </Links>
  </SignUpWrapper>
);

export { SignUpWrapper, Logo, Form, Info, Links };
export default SignUp;