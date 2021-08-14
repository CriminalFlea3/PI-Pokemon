import React from 'react'
import style from './pokedex.module.css'
import { Card } from '../../components/Cards/Card'
import { Search } from '../../components/Search/Search'

export const Pokedex = () => {
    return (
        <div className={ style.container }>
            <Search />
            <Card />
        </div>
    )
}
