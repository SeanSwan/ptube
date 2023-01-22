import React from 'react';
import styled from 'styled-components';
import About from './about.component';
import ImageSlider from '../../components/header/imageslider.component';

const images = [
  'https://via.placeholder.com/400x300.png?text=Image+1',
  'https://via.placeholder.com/400x300.png?text=Image+2',
  'https://via.placeholder.com/400x300.png?text=Image+3',
  'https://via.placeholder.com/400x300.png?text=Image+4',
  'https://via.placeholder.com/400x300.png?text=Image+5',
  'https://via.placeholder.com/400x300.png?text=Image+6',
  'https://via.placeholder.com/400x300.png?text=Image+7',
];

const HomeWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const WelcomeSection = styled.div`
  width: 80%;
  padding: 20px;
  text-align: center;

  h1 {
    font-size: 3em;
    font-weight: bold;
    color: #333;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  }

  p {
    font-size: 1.5em;
    font-weight: lighter;
    color: #333;
    margin: 20px;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;
const HomePage = () => (
  <HomeWrapper>
    <ImageSlider images={images}/>
    <WelcomeSection>
      <h1>Welcome to Swan Studios Personal Training</h1>
      <p>
        We are so excited to have you join us at Swan Studios, where we offer top-tier personal training services to help you reach your health and wellness goals. Our team of experienced trainers is dedicated to helping you achieve lasting lifestyle changes through personalized workouts and nutrition plans. We also utilize the latest AI technology to ensure that you get the most effective and efficient training experience possible. We can't wait to work with you and help you reach your full potential!
      </p>
      <About />
    </WelcomeSection>
  </HomeWrapper>
);

export default HomePage;