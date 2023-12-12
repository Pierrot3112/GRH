import React, {useState} from 'react'
import Menu from '../menu'
import ContenuMenu from '../contenuMenu'
import SideFoot from '../sideFoot';

const PageContent = () => { 
    
    const [selectedMenu, setSelectedMenu] = useState(null);
  

    const handleMenuClick = (menu) => {
      setSelectedMenu(menu === selectedMenu ? null : menu);
    };
  
  return (
    <div className='pageContent'>
        <div className="sideBar">
          <Menu handleMenuClick={handleMenuClick} />
          <SideFoot />
        </div>
        <div className="contenu">
            <ContenuMenu selectedMenu={selectedMenu} />
        </div>
    </div>
  )
}

export default PageContent