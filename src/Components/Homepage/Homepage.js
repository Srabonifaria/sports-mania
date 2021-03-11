import React, { useEffect, useState } from 'react';
import League from '../League/League';
import './Homepage.css'

const Homepage = () => {
    const [leagues,setLeagues]=useState([])
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res =>res.json())
        .then(data =>setLeagues(data.leagues.slice(0,15)))

    },[])

    return (
        <div>
            <h1 className="header">Sports Mania</h1>
            <div className="box-container">
            {
                leagues.map(leagues => <League leagues={leagues}></League>)
            }
            </div>
        </div>
    );
};

export default Homepage;