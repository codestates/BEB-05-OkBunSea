import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';

function Query({myAddress, showPopUp}){

    const [response, setResponse] = useState("")

    const handleQuery = async () => {
        if(myAddress==""){
            showPopUp('에러','지갑을 먼저 연동해주세요',()=>{})
            return;
        }
        const URL = 'http://localhost:4000/query';
        let body = {
            address:myAddress
        };

        const _body = JSON.stringify(body);
        console.log(`request: ${_body}`)
        axios.post(URL,_body,{
          headers: {
            'Content-Type':'application/json'
          }
        }).then((res)=>{
            setResponse(res.data)
        }
        ).catch((err)=>{
            showPopUp('에러','에러입니다',()=>{})
        })
    }

    return <div>
        <Button onClick={()=>handleQuery()}> query </Button>
        <Card>response : {response} </Card>
         
    </div>
}

export default Query;