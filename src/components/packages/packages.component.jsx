import React from 'react';
import styled from 'styled-components';
import packageData from './packageData.js';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  padding: 30px;
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Package = styled.div`
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

const PackageButton = styled.div`
  .button {
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

class Packages extends React.Component {
  render() {
    const { packageData } = this.props;
    return (
      <Wrapper>
        {packageData.map((packageInfo) => (
          <Package key={packageInfo.name}>
            <div className="card">
              <p>{packageInfo.name}</p>
              <p>{packageInfo.price}</p>
              <p>{packageInfo.sessions}</p>
              <PackageButton>
                <button className="button">Add to Cart</button>
                <button className="button">Delete</button>
              </PackageButton>
            </div>
          </Package>
        ))}
      </Wrapper>
    );
  }
}

export default Packages;