import React from 'react';
import './League.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



const League = (props) => {
    const {strLeague,strSport,idLeague} = props.leagues
    
    return (
        <div className="league-container">
          <h6>{strLeague}</h6> 
          <p><small>Sports type: {strSport} </small></p>
         <button className="main-button"><Link to={`/leagueDetails/${idLeague}`}>Explore</Link> <FontAwesomeIcon icon={faArrowRight} /></button>
        
        </div>
    );
};

export default League;