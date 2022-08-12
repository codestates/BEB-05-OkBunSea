import React from 'react';
import temp from './img/temp.jpg';
import team1 from './img/temp.jpg';
import team2 from './img/temp.jpg';
import team3 from './img/temp.jpg';
import team4 from './img/temp.jpg';

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
                    <img class="p-2 mx-auto rounded-circle" src= {temp} alt="..." />
                    <h4>강 인 국</h4>
                    <p class="text-muted">Back End (SmartContract)</p>                    
                </div>
            </div>
            <div class="col-lg-3">
                <div class="team-member">
                <img class="p-2 mx-auto rounded-circle" src= {temp} alt="..." />
                    <h4>오 동 재</h4>
                    <p class="text-muted">Server, DB</p>                    
                </div>
            </div>
            <div class="col-lg-3">
                <div class="team-member">
                <img class="p-2 mx-auto rounded-circle" src= {temp} alt="..." />
                    <h4>이 기 호</h4>
                    <p class="text-muted">Back End</p>                    
                </div>
            </div>
            <div class="col-lg-3">
                <div class="team-member">
                    <img class="p-2 mx-auto rounded-circle" src= {temp} alt="..." />
                    <h4>이 동 현</h4>
                    <p class="text-muted">Frond End</p>                    
                </div>
            </div>
        </div>
        
    </div>    
    );
  }

