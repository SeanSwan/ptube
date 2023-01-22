import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  width: 80%;
  padding: 20px;
  text-align: center;

  h2 {
    font-size: 3em;
    font-weight: bold;
    color: #333;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1.5em;
    font-weight: lighter;
    color: #333;
    margin: 20px 0;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <h2>Welcome to Elite Training with Sean Swan!</h2>
      <p>
        As a personal trainer with over 22 years of hands-on experience, I have
        had the privilege of training a diverse range of clients including
        children, adults, seniors, athletes, police officers, celebrities, and
        corporate employees. My focus is on functional training, which includes
        techniques to improve swimming, balance and stability, core training,
        building lean muscle, increasing stamina, improving cardiovascular
        fitness, and increasing flexibility. I also place a strong emphasis on
        nutrition and avoiding GMO and processed foods to help fuel optimal
        results.
      </p>
      <p>
        In addition to my personal training expertise, I am also a full-stack
        web developer and photographer. My goal is to use my skills in these
        areas, along with the latest advancements in AI technology, to provide
        my clients with the most personalized and effective training experience
        possible.
      </p>
      <p>
        As a top-tier personal trainer, I understand the importance of investing
        in your health and wellness. I am dedicated to helping my clients achieve
        their goals and make lasting lifestyle changes. I invite you to take the
        first step towards reaching your full potential and join me at Elite
        Training.
      </p>
    </AboutContainer>
  );
};

export default About;