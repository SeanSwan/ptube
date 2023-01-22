import React from 'react';
import Packages from '../../components/packages/packages.component.jsx';
import packageData from '../../components/packages/packageData.js';

const PackagesPage = () => {
  return (
    <div>
      <h1>Packages</h1>
      <Packages packageData={packageData} />
    </div>
  );
};

export default PackagesPage;