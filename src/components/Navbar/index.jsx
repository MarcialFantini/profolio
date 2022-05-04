import React, { useEffect, useState } from 'react'

import './style.css'

const Navbar = () => {

  const [clasesNav, setClasesNav] = useState('nav')
  const [icon, setIcon] = useState('|||')
  const [iconClass, setIconClass] = useState("icon")

  const activeNav = () => {



    setClasesNav('nav nav_active')

    setIconClass('icon icon-active')



  }

  const desactive = () => {

    setClasesNav('nav')

    setIconClass('icon ')
  }


  return (
    <div className="navbar">
      <h1

      >Portafolio</h1>
      <div className={iconClass}>
        <h1
          onClick={activeNav}
        >{icon}</h1>
      </div>

      <nav className={clasesNav}>
        <div className="relativo">
          <button
            onClick={desactive}
            className="exitNav">X</button>
        </div>
        <ul>
          <li><h1>Proyectos</h1></li>
          <li><a href="/">Ilustrado</a></li>
          <li><a href="/">Graficos</a></li>
          <li><a href="/">Clima</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar