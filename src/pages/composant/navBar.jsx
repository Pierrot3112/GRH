import React from 'react'
import Logo from '../../assets/logo.png'
import Search from './search'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className="image">
            <img src={Logo} alt="" width="90px" height="40px"/>
        </div>
        <div className="titre">
            <h1>
                GRH
            </h1>
        </div>
        <div className="rechercheBar">
          <Search />
        </div>
    </div>
  )
}

export default NavBar