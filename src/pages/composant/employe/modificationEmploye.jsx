import React, { useState, useEffect } from 'react'

const ModificationEmploye =  ({ employe, onSave, onCancel }) => {
    const [modifiedEmploye, setModifiedEmploye] = useState({ ...employe });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setModifiedEmploye((prevEmploye) => ({
        ...prevEmploye,
        [name]: value,
      }));
    };
  
    const handleSave = () => {
      // Appeler la fonction onSave pour sauvegarder les modifications
      onSave(modifiedEmploye);
    };
  
    return (
      <div className="ajoutEmloye">
        <div className="head">
          <div className="fermer">
            <i id="close" onClick={onCancel} className="mdi mdi-window-close"></i>
          </div>
        </div>
        <div className="formulaire">
          <form>
            <div className="infosPersonnels">
              <h3>Infos personnels</h3>
              {/* ... autres champs */}
            </div>
            <hr />
            <div className="infoTravail">
              <h3>Infos sur l'emploi</h3>
              {/* ... autres champs */}
            </div>
          </form>
          <div className="form-buttons">
            <button onClick={handleSave}>Enregistrer</button>
            <button onClick={onCancel}>Annuler</button>
          </div>
        </div>
      </div>
    );
  };
  

export default ModificationEmploye