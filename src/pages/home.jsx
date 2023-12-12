import React from 'react'
import NavBar from './composant/navBar/navBar';
import PageContent from './composant/contenuPage/pageContent';
import AjoutEmploye from './composant/employe/AjoutEmploye';

const Home = (props) => {
  return (
    <div className='homepage'>
      <div className="container">
        <div className="nav">
          <NavBar />
        </div>
        <div className="cor">
          <PageContent />
        </div>
      </div>
    </div>
  );
}

export default Home