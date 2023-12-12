import React from 'react'
import CongeEnCours from './congeEnCours'
import NouveauConge from './nouveauConge'

const ContenuConge = ({ selectedMenu }) => {
  return (
    <div className='contenuConge'>
        {selectedMenu === 'enCours' && <CongeEnCours /> }
        {selectedMenu === 'nouveau' && <NouveauConge /> }
    </div>
  )
}

export default ContenuConge