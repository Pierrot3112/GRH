import React, {useState} from 'react'

import MenuConge from './menuConge';
import ContenuConge from './contenuConge';




// Fonction qui contient une liste



const Conge = (props) => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu === selectedMenu ? null : menu);
  };


  return (
    <div className='conge'>
      <div className="navbar">
        <MenuConge handleMenuClick={handleMenuClick} />
      </div>
      <div className="cont">
        <ContenuConge selectedMenu={selectedMenu} />
      </div>
    </div>
  )
}

export default Conge