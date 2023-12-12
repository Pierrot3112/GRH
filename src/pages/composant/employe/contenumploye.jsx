import React from 'react'

import EnTravail from './employeEnTravail'
import Conge from '../conge/conge'
import CongeEnCours from '../conge/congeEnCours'

const Contenumploye = ({ selectedMenu }) => {
  return ( 
    <div className='cont'>
        {selectedMenu === 'enTravail' && <EnTravail /> }
        {selectedMenu === 'enConge' && <CongeEnCours /> }
        {selectedMenu === 'enAttente' && <Conge /> }
    </div>
  )
}

export default Contenumploye