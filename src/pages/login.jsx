import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost/gestion_ressource/public/api/login', {
        email,
        password,
      });

      // Gérer la réponse du backend ici, par exemple, en enregistrant le jeton d'accès dans le stockage local.
      console.log('Réponse du backend:', response.data);

      // Rediriger vers une autre page ou effectuer une action après la connexion réussie.
    } catch (error) {
      // Gérer les erreurs, par exemple, afficher un message d'erreur à l'utilisateur.
      console.error('Erreur lors de la connexion:', error);
    }
  };

  return (
    <div className='loginPage'>
        <div className="slogant">
            <div className="titre">
                <h3>Bienvenue sur l'appliation de gestion des ressources humaine chez l'OPEN DATA</h3>
            </div>
            <div className="paragraphe">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Cum quam odit magni harum iusto eos soluta voluptas architecto sit quia, 
                     molestiae, officiis aut, consequatur et nobis assumenda cupiditate repellat veniam.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi dicta itaque, 
                     eius exercitationem dolorem assumenda explicabo amet voluptas porro officia perspiciatis 
                     impedit fugiat facere praesentium iste dolores? Blanditiis laborum veritatis beatae vel 
                     consectetur reiciendis fugiat, soluta repellendus magni cum modi iste quod suscipit incidunt omnis. 
                     Saepe ea sapiente provident.
                </p>
            </div>
        </div>
        <div className="loginForm">
            <div className="containner">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                    <div className="email">
                        <input type="email" name="email" id="email" placeholder="" />
                        <label for="">email</label>
                        <i class="mdi mdi-email-outline"></i>
                    </div>
                    <div className="password">
                        <input type="password" name="password" id="password" placeholder="" />
                        <label for="">password</label>
                        <i class=" mdi mdi-key"></i>
                    </div>
                    {/* <div className="showPassword">
                        <input type="checkbox" name="show" id="" />
                        <p id='show'>Afficher le mot de passe</p>
                    </div> */}
                    <Link to="/home"><button type='submit'>Se connecter</button></Link>
                    <div className="createAccount">
                        <p>Sign In</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login