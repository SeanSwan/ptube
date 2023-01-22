import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas: 
    "header header"
    "main aside"
    "footer footer";
  width: 100%;
  padding: 30px;
  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas: 
      "header"
      "main"
      "aside"
      "footer";
  }
`;

const Header = styled.header`
  grid-area: header;
  h1 {
    text-align: center;
  }
`;

const Main = styled.main`
  grid-area: main;
  p {
    font-size: 1.2rem;
    line-height: 1.5;
    text-align: justify;
  }
`;

const Aside = styled.aside`
  grid-area: aside;
  img {
    width: 100%;
  }
`;

const Footer = styled.footer`
  grid-area: footer;
  p {
    text-align: center;
  }
`;

const AboutPage = () => (
  <AboutWrapper>
    <Header>
      <h1>About Us</h1>
    </Header>
    <Main>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod
        risus velit, eget aliquam risus tincidunt vel. Sed euismod velit velit,
        eget aliquam risus tincidunt vel. Sed euismod velit velit, eget aliquam
        risus tincidunt vel.
      </p>
    </Main>
    <Aside>
      <img src={require('../../assets/cyberpunk.jpg')} alt="About Us" />
    </Aside>
    <Footer>
      <p>Copyright © 2023</p>
    </Footer>
  </AboutWrapper>
);

export default AboutPage;