import React from 'react';
import styled from 'styled-components';
import FooterComponent from '../components/Footer/FooterComponent';

import StartedButton from '../components/Header/Button/StartedButton';
import HeaderComponent from '../components/Header/HeaderComponent';
import StoryCardComponent from '../components/StoryCard/StoryCardComponent';
const HomePage = () => {

  const text = {
    fontSize: "19px",
    color: "#fff",
    textAlign: "center" as "center",
    padding: "0 20px",
  }

  const title = {
    color: "white",
    maxWidth: "640px",
    textAlign: "center" as "center",
    fontSize: "50px",
    fontWeight: "700",
    margin: "auto",
  };

  return (
    <>
      <HeaderComponent>

        <div>
          <div style={title}>Unlimited movies, TV shows and more.
          </div>
        </div>
        <div style={text}>
          Ready to watch Netflix? Enter your email address to subscribe or reactivate your subscription.
        </div>
        <Wrapper >
          <EmailInput placeholder='E-mail address' />
          <StartedButton>Start</StartedButton>
        </Wrapper >


      </HeaderComponent>
      <Seperator />
      <StoryCardComponent /> 
      <FooterComponent />
    </>
  )
}
 
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 70px;
  padding: 0 20px;
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Seperator = styled.div`
  border-bottom: 8px solid #222; 
`

export const EmailInput = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px; 
  font-size: 20px;
`

export default HomePage
