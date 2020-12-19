import React, {useState}from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {
  const[logo,setLogo] = useState('logo')
  const[mobMenu,setMobMenu] = useState(false)

  const menuVisible = ()=> {
    if(!mobMenu){
      setLogo('menu open')
    }
    else if (mobMenu){
      setLogo('logo')
    }
    setMobMenu(!mobMenu)
  }



  return (
    <div className='menu'>
      <div className="container">
        <div className="row">
          <div className="col">
          <div className="menu_ikon" onClick={menuVisible}><i className="fas fa-ellipsis-v"></i></div>
            <Link to='/'>
            <div className="menu_logo">{logo}</div>
            </Link>
          

          <div className="menu_link"></div>
          
          </div>
        </div>
      </div>
      <div className={mobMenu ? 'menu_hidden visi':'menu_hidden'}>
      <p className='close' onClick={menuVisible}>X</p>
       <h2>Категории</h2>
        <ul>
          <li>рубашки</li>
          <li>штаны</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
