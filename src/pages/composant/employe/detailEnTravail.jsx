import React, { useState } from 'react';
import Edit from '../../../assets/edit.png';
import ModificationEmploye from './modificationEmploye';
// import jsPDF from 'jspdf';

const DetailEnTravail = ({ employee, onClose }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const handleClick = () => {
    // Afficher une boîte de dialogue de confirmation
    const confirmation = window.confirm("Voulez-vous vraiment ajouter cet employé?");
    
    // Si l'utilisateur clique sur "OK", confirmation sera true
    if (confirmation) {
      // Exécuter l'action
      console.log("Action exécutée !");
      // Mettez ici le code de votre action
    } else {
      // L'utilisateur a annulé la confirmation
      console.log("Action annulée.");
    }
  };
  

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleCancelEdit = () => {
    setIsEditMode(false);
  };

  const handleSaveEdit = (modifiedEmployee) => {
    // Vous pouvez implémenter la logique de sauvegarde des modifications ici
    console.log('Modifications sauvegardées :', modifiedEmployee);

    // Puis désactivez le mode d'édition
    setIsEditMode(false);
  };



  return (
    <div id='detailEnTravail'>
      <div className='detailEnTravail'>
        <div className="head">
          <div className="pdp">
            <img src={employee.image} alt="" height="100%" width="100%" />
          </div>
          <div className="pseudo">
            <h2><span>{employee.nom}</span>{employee.prenom}</h2>
          </div>
        </div>
        <hr />
        <div className="bd">
          <div className="perso">
            <h3>Informations personnel :</h3>
            <p>{employee.email}</p>
            <p>{employee.tel}</p>
            <p>{employee.adresse}</p>
            <p>{employee.date_naissance}</p>
            <p>{employee.genre}</p>
          </div>
          <hr className='hr' />
          <div className="emploie">
            <h3>Information sur l'emploie :</h3>
            <p>{employee.departement}</p>
            <p>{employee.poste}</p>
            <p>{employee.date_embauche}</p>
            <p>{employee.nss}</p>
          </div>
        </div>
        <hr />
        <div className="foot">
          {isEditMode ? (
            <ModificationEmploye
              employee={employee}
              onSave={handleSaveEdit}
              onCancel={handleCancelEdit}
            />
          ) : (
            <div className="mod">
              <button onClick={handleEditClick}>
                <img src={Edit} height="40px" width="40px" />
                Modifier
              </button>
            </div>
          )}
          <div className="fermer" onClick={onClose} id='fermer'>
            <button>
              <i className='mdi mdi-window-close'></i>
              Fermer
            </button>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default DetailEnTravail;
