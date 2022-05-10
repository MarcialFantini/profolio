import React from 'react'

import css from '../../images/skilss/css.png'
import html from '../../images/skilss/html-5.png'
import js from '../../images/skilss/jg.png'

import react from '../../images/skilss/react.png'

import './style.css'

const SkillsRotativo = () => {
  return (
    <div className='container-skills-rative'>
        <div className="circle-rotative rotate-skills " >
            <img src={css} alt='skill' />
            <img src={html} alt='skill' />
            <img src={js} alt='skill' />
            
            <img src={react} alt='skill' />
        </div>
    </div>
  )
}

export default SkillsRotativo