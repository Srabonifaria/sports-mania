import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetails.css'
import Male from '../../Photo/male.png'
import Facebook from '../../Icon/Facebook.png'
import  Twitter from '../../Icon/Twitter.png'
import Youtube from '../../Icon/YouTube.png'

const LeagueDetails = () => {
    const {idLeague} =useParams();
    const [league,setLeague] =useState({});
    const {strLeague,strLogo,strBanner,intFormedYear,strCountry,strSport,strGender,strDescriptionEN,strDescriptionFR,strTwitter,strYoutube,strFacebook} =league
    console.log(league)
    
    useEffect(()=>{
        const url =`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setLeague(data.leagues[0]))
    },[idLeague])
    return (
        <div>
            <div className="leagueLogo" style={{backgroundImage:`url(${strBanner})`,height:'300px'}}>
                <img src={strLogo} alt=""/>
             </div>
             <div className="allLeagueDetail my-3 row">
                <div className="leagueDetail col-md-6">
                    <h4>{strLeague}</h4>
                    <p>Founded: {intFormedYear}</p>
                    <p>Country:{strCountry}</p>
                    <p>Sports type: {strSport}</p>
                    <p>Gender: {strGender}</p>
                </div>
                
                <div className="leagueImg col-md-6">
                <img src={Male} alt=""/>
                </div>
            </div>
              <p>{strDescriptionEN}</p>
              <br/>
              <p>{strDescriptionFR}</p>
              <div className="social-media-link d-flex justify-content-center">
                        <div>
                            <a href={"https://" + strFacebook} target="_blank"rel="noreferrer"> <img src={Facebook} alt="" /> </a>
                            <a href={"https://" + strYoutube} target="_blank" rel="noreferrer" > <img src={Youtube} alt="" /> </a>
                            <a href={"https://" + strTwitter} target="_blank"rel="noreferrer"> <img src={Twitter} alt="" /> </a>
                            </div>
                </div>            
            
        </div>
    );
};

export default LeagueDetails;