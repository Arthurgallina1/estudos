import React from 'react';
import { Link } from 'react-router-dom';

export default function Comp1() {
    return (
        <div>
            <h1>comp1</h1>
            <Link to="/protected"><button>SEND</button></Link>
        </div>
    )
}
