import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle, css } from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  padding: 30px;
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  .card {
    font-size: 18px;
    font-weight: 600;
  }
`;

class Contacts extends React.Component {
    render() {
        return (
            <Wrapper>
                <Contact>
                    <div className="card">
                        <p>Address:</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </Contact>
                <Contact>
                    <div className="card">
                        <p>Phone:</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </Contact>
                <Contact>
                    <div className="card">
                        <p>Email:</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </Contact>
            </Wrapper>
        );
    }
}

export default Contacts;