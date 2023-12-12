import React from 'react'

const Footer = () => {
  return (
    <div className='foo'>
        <div className="titre"></div>
        <div className="menuFootEmp">
            <div className="affichageListe">
                <button>Afficher la liste en tail réel</button>
            </div>
            <div className="impression">
                <button>Imprimer</button>
            </div>
        </div>
    </div>
  )
}

export default Footer