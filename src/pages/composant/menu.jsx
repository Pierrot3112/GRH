import React, {useState} from 'react';z

const Menu = (props) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const handleMenuClick = (menu) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    props.handleMenuClick(menu);
    setActiveMenu(menu)
  };

  return (
    <div className='menumenu'>
      <div className="menu" onClick={() => handleMenuClick('administration')} style={{color:activeMenu === 'administration'?'#000':'initial'} && {backgroundColor:activeMenu==='administration'?'#30014698':'initial'}}> Administration</div>
      <div className="menu" onClick={() => handleMenuClick('employe')} style={{color:activeMenu === 'employe'?'#000':'initial'} && {backgroundColor:activeMenu==='employe'?'#30014698':'initial'}}>Employe</div>
      <div className="menu" onClick={() => handleMenuClick('conge')} style={{color:activeMenu === 'conge'?'#000':'initial'} && {backgroundColor:activeMenu==='conge'?'#30014698':'initial'}}>Conge</div>
      <div className="menu" onClick={() => handleMenuClick('recrutement')} style={{color:activeMenu === 'recrutement'?'#000':'initial'} && {backgroundColor:activeMenu==='recrutement'?'#30014698':'initial'}}>Recrutement</div>
      <div className="menu" onClick={() => handleMenuClick('archive')} style={{color:activeMenu === 'archive'?'#000':'initial'} && {backgroundColor:activeMenu==='archive'?'#30014698':'initial'}}>Archive</div>
    </div>
  );
};

export default Menu;
