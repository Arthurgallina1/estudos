import React, {useEffect} from 'react';
import { Link, useHistory, useParams, useLocation } from 'react-router-dom';

export default function Comp2() {
    let history = useHistory();
    let params = useParams();
    const loc = useLocation();
    useEffect(() => 
    console.log((loc.search)),
    console.log(params)    
    
    ,[])
    return (
        <div>
            <h1>comp2</h1>
            <Link to="/"><button>back</button></Link>
        </div>
    )
}
