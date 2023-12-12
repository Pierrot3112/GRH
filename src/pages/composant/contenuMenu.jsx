import React from 'react'

import Emp from './employe/emp';
import Conge from './conge/conge';
import Recrutement from './recrutement/recrutement';
import Archive from './archive/archive';
import Administration from './administration/administration';

const ContenuMenu = ({ selectedMenu }) => {
  return (
    <div className='contenuMenu'>
      {selectedMenu === 'employe' && <Emp />}
          {selectedMenu === 'administration' && <Administration /> }
          {selectedMenu === 'conge' && <Conge /> }
          {selectedMenu === 'recrutement' && <Recrutement /> }
          {selectedMenu === 'archive' && <Archive /> }
    </div>
  )
}

export default ContenuMenu