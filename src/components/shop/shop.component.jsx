import React from 'react';
import styled from 'styled-components';
import Packages from '../../components/packages/packages.component.jsx';
import packageData from '../../components/packages/packageData.js';

const ShopWrapper = styled.div`
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

class ShopPage extends React.Component {
  render() {
    return (
      <ShopWrapper>
        <Packages packageData={packageData} />
      </ShopWrapper>
    );
  }
}

export default ShopPage;