import React from 'react';
import team1 from './img/team_1.png';
import team2 from './img/team_2.png';
import team3 from './img/team_3.png';
import team4 from './img/team_4.png';

export default function About () {
    return (
        <div class="container">
        <div class="text-center">
            <h2 class="p-4 mb-3 section-heading text-uppercase">Our Amazing Team</h2>
            <h3 class="mb-3 section-subheading text-primary">BEB 05 OKBUNSEA</h3>
        </div><br/> <br/>
        <div class="row"> 
            <div class="col-lg-3">
                <div class="team-member">
                    <img class="p-2 mx-auto rounded-circle" src= {team1} alt="..." />
                    <h4>강 인 국</h4>
                    <p class="text-muted">Back End (SmartContract)</p>                    
                </div>
            </div>
            <div class="col-lg-3">
                <div class="team-member">
                <img class="p-2 mx-auto rounded-circle" src= {team2} alt="..." />
                    <h4>오 동 재</h4>
                    <p class="text-muted">Server, DB</p>                    
                </div>
            </div>
            <div class="col-lg-3">
                <div class="team-member">
                <img class="p-2 mx-auto rounded-circle" src= {team3} alt="..." />
                    <h4>이 기 호</h4>
                    <p class="text-muted">Back End</p>                    
                </div>
            </div>
            <div class="col-lg-3">
                <div class="team-member">
                    <img class="p-2 mx-auto rounded-circle" src= {team4} alt="..." />
                    <h4>이 동 현</h4>
                    <p class="text-muted">Frond End</p>                    
                </div>
            </div>
        </div>
        
    </div>    
    );
  }

