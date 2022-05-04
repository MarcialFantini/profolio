import React, { useState } from 'react'

import { formatProyects, proyects } from './proyects'

import './style.css'



const ListProyects = ({ }) => {

    const [state, setState] = useState(proyects)

    const handlerClickButton = (event) => {

        const newList = state.map(item => {
            if (item.id === Number(event.target.value)) {
                if (!item.active) {
                    const newItem = {
                        ...item,
                        textRelative: 'text-relative text-relative_active',
                        imgBanner: "proyect-banner_img proyect-banner_img_active ",
                        active: true
                    }
                    return newItem
                } else {
                    const newItem = {
                        ...item,
                        textRelative: 'text-relative',
                        imgBanner: "proyect-banner_img",
                        active: false
                    }
                    return newItem
                }

            } else {
                return item
            }
        })
        console.log(newList)
        setState(newList)
    }

    const proyectsList = formatProyects(state, handlerClickButton)


    return (
        <div className='proyects-grid'>
            {proyectsList}
        </div>
    )
}

export default ListProyects