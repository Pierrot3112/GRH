import React, { useState } from 'react';
import Search from './search';
import ContenuMenu from './contenuMenu';
import Menu from './menu';
import Employe from './employe/employe';

const Contenu = (props) => {  
  const [selectedMenu, setSelectedMenu] = useState(null);

  // Définissez la fonction handleMenuClick ici
  const handleMenuClick = (menu) => {
    setSelectedMenu(menu === selectedMenu ? null : menu);
  };

  return (
    <div className='pages'>
      <Search />
      <div className="pag">
        <Employe />
        <Menu handleMenuClick={handleMenuClick} />
        {/* Utilisez MenuContent avec selectedMenu provenant du state de ParentComponent */}
        <ContenuMenu selectedMenu={selectedMenu} />
      </div>
      <div className="date">
        {/* Ajoutez ici d'autres contenus si nécessaire */}
      </div>
    </div>
  );
}

export default Contenu;
