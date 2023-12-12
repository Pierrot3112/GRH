import React, {useState} from 'react'

import ListeMenuEmp from'./listeMenuEmp'
import Contenumploye from './contenumploye';
import Footer from './footer';

const Emp = () => {
    const [selectedMenu, setSelectedMenu] = useState(null);

    const handleMenuClick = (menu) => {
      setSelectedMenu(menu === selectedMenu ? null : menu);
    };
  
  
    return (
      <div className='employe'>
        <div className="navbar">
          <ListeMenuEmp handleMenuClick={handleMenuClick} />
        </div>
        <div className="contenuEmploye">
          <Contenumploye selectedMenu={selectedMenu} />
        </div>
        <div className="footerEmploye">
          <Footer />
        </div>
      </div>
    )
  }
export default Emp