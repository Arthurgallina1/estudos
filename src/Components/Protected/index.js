import React from 'react'
import { Link } from 'react-router-dom'

export default function Protected() {
    return (
        <div>
            <h3>rota protegida!</h3>
            <Link to={{pathname: '/c2/c2',search: "?sort=name" }}><button>Go</button></Link>
        </div>
    )
}
