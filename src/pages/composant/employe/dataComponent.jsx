import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DetailEnTravail from './detailEnTravail';
import Edit from '../../../assets/edit.png';

const DisplayDataComponent = (props) => {
  const [data, setData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Utilisez useState pour déclarer deleteButtonHovered comme un tableau
  const [deleteButtonHovered, setDeleteButtonHovered] = useState(Array(data.length).fill(false));

  useEffect(() => {
    axios.get('./employe.json')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const openForm = (employee) => {
    setScrollPosition(window.scrollY);
    setSelectedEmployee(employee);
    
    const detailEnTravailElement = document.getElementById('detailEnTravail');
    if (detailEnTravailElement) {
      detailEnTravailElement.style.display = 'block';
    }
  };
  
  const closeForm = () => {
    window.scrollTo(0, scrollPosition);
    setSelectedEmployee(null);
    
    const detailEnTravailElement = document.getElementById('detailEnTravail');
    if (detailEnTravailElement) {
      detailEnTravailElement.style.display = 'none';
    }
  };
  

  // Gérer le survol du bouton de suppression pour un élément spécifique
  const handleDeleteButtonMouseEnter = (index) => {
    setDeleteButtonHovered((prevHovered) => {
      const newHoveredState = [...prevHovered];
      newHoveredState[index] = true;
      return newHoveredState;
    });
  };

  const handleDeleteButtonMouseLeave = (index) => {
    setDeleteButtonHovered((prevHovered) => {
      const newHoveredState = [...prevHovered];
      newHoveredState[index] = false;
      return newHoveredState;
    });
  };

  return (
    <div className='employer-en-travail'>
      {data.map((item, index) => (
        <div className='profile' key={index}>
          <div className="supp">
            <i className='mdi mdi-window-close'
              onMouseEnter={() => handleDeleteButtonMouseEnter(index)}
              onMouseLeave={() => handleDeleteButtonMouseLeave(index)}
            ></i>
            <div className="suppNot">
              {deleteButtonHovered[index] && <span>Supprimer</span>}
            </div>
            <img src={item.image} alt="" height="100px" width="100px" />
          </div>
          <div className="infos">
            <div className="personnel">
              <h3>{item.nom} {item.prenom}</h3>
              <strong>{item.poste}</strong>
              <div className="buttonMore">
                <button onClick={() => openForm(item)}>Voir plus...</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {selectedEmployee && (
        <DetailEnTravail employee={selectedEmployee} onClose={closeForm} />
      )}
    </div>                
  );
};

export default DisplayDataComponent;
