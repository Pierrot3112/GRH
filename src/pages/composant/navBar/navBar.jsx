import React from 'react'

import Logo from '../../../assets/logo.png'

const NavBar = (props) => {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={Logo} alt="" height="50px" width="100px"/>
        </div>
        <div className="titre">
            <h1>GRH</h1>
        </div>
        <div className="recherche">
            <i className='mdi mdi-search'></i>
            <input type="text" name="search" id="" placeholder='Rechercher.......' />
        </div>
        <div className="autre">
            <i className='mdi mdi-settings'></i>
            <i className=' mdi mdi-bell'></i>
        </div>
    </div>
  )
}

export default NavBar