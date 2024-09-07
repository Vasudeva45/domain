import React from 'react';
import getConfig from 'next/config';

const Navbar: React.FC = () => {
  const config = getConfig();
  return (
    <nav style={{ backgroundColor: config.navbarColor }}>
      {/* Navbar content */}

    </nav>
  );
};
export default Navbar;