import React, { useState, useEffect } from 'react';
import DisplayDataComponent from './dataComponent';
// import Profil from '../../../assets/2.png';

const EnTravail = () => {
  const [personnels, setPersonnels] = useState([]);

  useEffect(() => {
    // Charger les données depuis le fichier JSON (ou une API)
    fetch('./employe.json')
      .then(response => response.json())
      .then(data => setPersonnels(data))
      .catch(error => console.error('Erreur lors du chargement des données:', error));
  }, []);

  return (
    <div className='employer-en-travail'>
      <DisplayDataComponent />
    </div>
  );
};

export default EnTravail;
