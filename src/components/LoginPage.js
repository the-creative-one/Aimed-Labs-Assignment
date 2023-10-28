import React from "react";
import styled from "styled-components";
import LoginImage from "../components/image.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const Wrapper = styled.div`
    background: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: "Poppins", sans-serif;
    padding: 0px 20px;

    @media (max-width: 1024px) {
      grid-template-columns: 0.7fr 1fr;
      height: 90vh;
    }
    @media (max-width: 768px) {
      display: block;
      height: 90vh;
      margin: 100px 10px 0px 10px;
      padding: 0px;
    }
  `;
  const ImageDiv = styled.div`
    text-align: center;
  `;
  const Image = styled.img`
    max-width: 100%;
    height: 600px;
    @media (max-width: 1024px) {
      height: 550px;
    }
    @media (max-width: 768px) {
      display: none;
    }
  `;
  const FormDiv = styled.div`
    border-radius: 12px;
    background: #fff;
    box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
    padding: 100px 50px;
    @media (max-width: 768px) {
      padding: 20px 20px;
    }
  `;
  const Heading = styled.h1`
    font-weight: 800;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const FormInput = styled.input`
    margin-top: 10px;
    padding: 10px 0px 10px 10px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-width: 1px;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:focus {
      outline: none;
      box-shadow: 0.5px 0.5px 5px 0.5px rgba(0, 0, 240, 0.3);
      caret-color: blue;
    }
    &::placeholder {
      color: #30475e;
      opacity: 0.5;
    }
    @media (max-width: 768px) {
      width: 95%;
    }
  `;
  const FormText = styled.label`
    font-size: 17px;
  `;
  const ChangePassword = styled.p`
    float: right;
    margin: 0;
    text-decoration: none;
    font-size: 15px;
    a {
      text-decoration: none;
      color: #f4ce14;
      &:hover {
        text-decoration: underline;
        color: #ffb000;
      }
    }
  `;
  const Checkbox = styled.p`
    font-size: 14px;
    a {
      text-decoration: none;
      color: #f4ce14;
      &:hover {
        text-decoration: underline;
        color: #ffb000;
      }
    }
  `;

  const LoginButton = styled.button`
    margin-left: 70px;
    width: 80%;
    padding: 10px 0px 10px 10px;
    border-radius: 5px;
    border: none;
    border-width: 1px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #00adb5;
    color: #fff;
    font-size: 16px;
    &:hover {
      padding: 0.5rem;
    }
    @media (max-width: 768px) {
      margin-left: 30px;
    }
  `;

  const RegisterText = styled.p`
    text-align: center;
    font-size: 14px;
    a {
      text-decoration: none;
      color: #f4ce14;
      font-weight: 500;
      &:hover {
        color: #ffb000;
      }
    }
  `;

  return (
    <>
      <Wrapper>
        <ImageDiv>
          <Image src={LoginImage} alt="" />
        </ImageDiv>
        <FormDiv>
          <Heading>Login</Heading>
          <span>
            <FormText for="">Login ID</FormText>
            <br />
            <FormInput
              type="text"
              name="login-id"
              placeholder="Enter Login ID"
            />
          </span>
          <p>
            <FormText for="">Password</FormText>
            <br />
            <FormInput
              type="password"
              name="login-id"
              placeholder="Enter Password"
            />
          </p>
          <ChangePassword>
            <Link to="/">Change Password</Link>
          </ChangePassword>
          <Checkbox>
            <input type="checkbox" />
            Remember Me
          </Checkbox>
          <Checkbox>
            <input type="checkbox" />
            Agree to{" "}
            <Link to="/terms-conditions">
              <u>Terms & Conditions</u>
            </Link>
          </Checkbox>
          <LoginButton type="submit">Login</LoginButton>
          <RegisterText>
            Don't have an account?{" "}
            <Link to="/register">
              <u>Register Now</u>
            </Link>
          </RegisterText>
        </FormDiv>
      </Wrapper>
    </>
  );
};

export default LoginPage;
