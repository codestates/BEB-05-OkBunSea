import React from 'react';
import { Card } from 'react-bootstrap';
import implemented_later from './img/implemented_later.png';

function Sell(){
    return <div>
        <Card className="mt-3 p-3 bg-primary text-white rounded">To be implemented later</Card>
        <img src={implemented_later}/>
    </div>
}

export default Sell;