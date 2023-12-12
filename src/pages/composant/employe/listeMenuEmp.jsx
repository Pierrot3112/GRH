import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AjoutEmploye from './AjoutEmploye';

const ListeMenuEmp = (props) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleMenuClick = (menu) => {
    // Utilisation de la fonction de gestion des clics de menu provenant des propriétés
    props.handleMenuClick(menu);
    setActiveMenu(menu);
  };

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className='empNav'>
      <h2>Employés</h2>
      <ul>
        <li onClick={() => handleMenuClick('enTravail')} style={{ color: activeMenu === 'enTravail' ? 'white' : 'initial' }}>En Travail</li>
        <li onClick={() => handleMenuClick('enConge')} style={{ color: activeMenu === 'enConge' ? 'white' : 'initial' }}>En Congé</li>
        <li onClick={() => handleMenuClick('enAttente')} style={{ color: activeMenu === 'enAttente' ? 'white' : 'initial' }}>En Attente</li>
        <li onClick={openForm} style={{ color: activeMenu === 'nouvelEmploye' ? 'white' : 'initial' }}>Ajouter un nouvel employé</li>
        {isFormOpen && (
          ReactDOM.createPortal(
            <AjoutEmploye onClose={closeForm} />,
            document.body
          )
        )}
      </ul>
    </div>
  );
};

export default ListeMenuEmp;
