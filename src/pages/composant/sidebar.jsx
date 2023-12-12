import React, { useState } from 'react';
import NavBar from './navBar';

import SideFoot from './sideFoot';
import Menu from './menu';
import ContenuMenu   from './contenuMenu';


const Sidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu === selectedMenu ? null : menu);
  };


  return (
    <div className='side'>
        <div className="nb">
          <NavBar />
        </div>
        <br />
        <div className="contenuside">
          <Menu handleMenuClick={handleMenuClick} />
          {/* Utilisez MenuContent avec selectedMenu provenant du state de ParentComponent */}
        </div>

        <div className="content">
          <ContenuMenu selectedMenu={selectedMenu} />
        </div>

        <div className="footSide">
          <SideFoot />
        </div>
    </div>
  );
}

export default Sidebar