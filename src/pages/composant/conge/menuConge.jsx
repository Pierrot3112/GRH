import React, {useState} from 'react'

const MenuConge = (props) => {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuClick = (menu) => {
      // Utilisation de la fonction de gestion des clics de menu provenant des propriétés
      props.handleMenuClick(menu);
      setActiveMenu(menu)
    };

  return (
    <div className='menuConge'>
        <h2>Congé</h2>
        <ul>
          <li onClick={() => handleMenuClick('enCours')} style={{color:activeMenu === 'enCours'?'white':'initial'}}>Tous les congés</li>
          <li onClick={() => handleMenuClick('nouveau')} style={{color:activeMenu === 'nouveau'?'white':'initial'}}>Nouveau congé</li>
        </ul>
    </div>
  )
}

export default MenuConge