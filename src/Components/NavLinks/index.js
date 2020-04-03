import React from 'react'
import './styles.css'
import { NavLink } from 'react-router-dom'

export default function NavLinks() {
    const style = {
        borderBottom: '2px solid white',
        color: 'red'
    }
    return (
        <nav>
            <ul>
                <NavLink to="/" activeStyle={style} exact><li>Comp1</li></NavLink>
                <NavLink to="/c2/c2" activeStyle={style}><li>Comp2</li></NavLink>
                <NavLink to="/protected" activeStyle={style}><li>Comp3</li></NavLink>
            </ul>
        </nav>
    )
}
