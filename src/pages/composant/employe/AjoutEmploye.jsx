import React, {useState} from 'react'

import Add from '../../../assets/2.png'

import axios from 'axios';


const Head = ({ onClose }) => {
    return (
      <div className="head">
        <h2>Ajouter un employé :</h2>
        <div className="fermer">
          <i onClick={onClose} className='mdi mdi-window-close' id='close'></i>
        </div>
      </div>
    );
  };
  
const AjoutEmploye = ({ onClose }) => {
    const [employe, setEmploye] = useState({
      nom: '',
      prenoms: '',
      adresse: '',
      email: '',
      telephone: '',
      poste: '',
      departement: '',
      genre: '',
      date_embauche: '',
      date_naissance: '',
      imageProfile: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEmploye((prevEmploye) => ({
        ...prevEmploye,
        [name]: value,
      }));
    };
  
    
    const handleClick = () => {
        // Afficher une boîte de dialogue de confirmation
        const confirmation = window.confirm("Voulez-vous vraiment ajouter cet employé?");
        
        // Si l'utilisateur clique sur "OK", confirmation sera true
        if (confirmation) {
          // Exécuter l'action
            const donneesJson = JSON.stringify(employe);
            console.log(donneesJson);
  
          console.log("Action exécutée !");
          // Mettez ici le code de votre action
        } else {
          // L'utilisateur a annulé la confirmation
          console.log("Action annulée.");
        }
      };

    return (
        <div className='ajoutEmloye' id='formulaireAjout'>
            <Head onClose={onClose} />
          {/* Votre formulaire ici */}
            <div className="formulaire">
                <form>
                    <div className="infosPersonnels">
                        <h3>Infos personnels</h3>
                        <br />
                        <div className="nom">
                            <label htmlFor="name">Nom de l'employé</label>
                            <input type="text" name="nom" value={employe.nom} onChange={handleInputChange} required />
                        </div>
                        <br />
                        <div className="prenom">
                            <label htmlFor="prenom">Prénoms de l'employé</label>
                            <input type="text" name="prenoms" value={employe.prenoms} onChange={handleInputChange} required />
                        </div>
                        <br />
                        <div className="adresse">
                            <label htmlFor="adresse">Adresse de l'employé</label>
                            <input type="text" name="adresse" value={employe.adresse} onChange={handleInputChange} required />
                        </div>
                        <br />
                        <div className="contact">
                            <label htmlFor="tel">Téléphone</label>
                            <input type="tel" name="telephone" value={employe.telephone} onChange={handleInputChange} required />
                        </div>
                        <br />
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={employe.email} onChange={handleInputChange} required />
                        </div>
                        <br />
                        <div className="nss">
                            <label>Date de naissance :</label>
                            <input type="date" name="date_naissance" value={employe.date_naissance} onChange={handleInputChange} required />
                        </div>
                        <br />
                        <div>
                            <label>Genre :</label>
                            <select name="genre" value={employe.genre} onChange={handleInputChange} required>
                                <option value="homme">Homme</option>
                                <option value="femme">Femme</option>
                            </select>
                        </div>
                        <br />
                        <div className="imageProfile">
                            <input type="file" name="imageProfile" id="imageProfile" style={{display:"none"}} value={employe.imageProfile} onChange={handleInputChange} />
                            <label htmlFor="imageProfile" className='img'>
                                <img src={Add} alt="" />
                                <span>Image profile</span>
                            </label>
                        </div>
                        <br />
                    </div>
                    <hr />
                    <div className="infoTravail">
                        <h3>Infos sur l'emploie</h3>
                        <br />
                        <div className="poste">
                            <label htmlFor="poste">Poste</label>
                            <select name="poste" value={employe.poste} onChange={handleInputChange} required>
                                <option value="poste_1">Poste_1</option>
                                <option value="poste_2">Poste_2</option>
                                <option value="poste_3">Poste_3</option>
                                <option value="poste_4">Poste_4</option>
                                <option value="poste_5">Poste_5</option>
                                <option value="poste_6">Poste_6</option>
                            </select>
                        </div>
                        <br />
                        <div className="departement">
                            <label htmlFor="departement">Departement</label>
                            <select name="departement" value={employe.departement} onChange={handleInputChange} required>
                                <option value="Departement_1">Departement_1</option>
                                <option value="Departement_2">Departement_2</option>
                                <option value="Departement_3">Departement_3</option>
                                <option value="Departement_4">Departement_4</option>
                                <option value="Departement_5">Departement_5</option>
                                <option value="Departement_6">Departement_6</option>
                            </select>
                        </div>
                        <br />
                        <div className="dateEmbauche">
                            <label htmlFor="dateEmbauche">Date d'embauche</label>
                            <input type="date" name="date_embauche" value={employe.date_embauche} onChange={handleInputChange} required />
                        </div>
                        <br />
                        <hr />
                        <br />
                        <h3>Contrat :</h3>
                        <br />
                        <div className="typeContrat">
                            <label htmlFor="typeContrat">Type du contrat</label>
                            <select name="typeContrat" id="typeContrat">
                                <option value="cdd">C D D</option>
                                <option value="cdi">C D I</option>
                            </select>
                        </div>
                        <br />
                        <div className="duree">
                            <p>Si le contrat est de duré determiner :</p>
                            <br />
                            <label htmlFor="dateFinDuContrat">Date fin du Contrat</label>
                            <input type="date" name="finDuContrat" id="finDuContrat" />
                            <br />
                            <br />
                            <label htmlFor="dureDuContrat">Durée du Contrat</label>
                            <input type="text" name="dureContrat" id="dureContrat" />
                        </div>
                    </div>
                </form>
            </div>
        <div className="footer">
            <button className='annuler'>Annuler</button>
            <button onClick={handleClick} className='ajouter'>Ajouter</button>
        </div>
        </div>
      );
}

export default AjoutEmploye