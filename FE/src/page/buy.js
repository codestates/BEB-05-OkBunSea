import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, Form } from 'react-bootstrap';

function Buy({myAddress, showPopUp}){

    const [response, setResponse] = useState("")
    const [nftId, setNftId] = useState("")

    const handleQuery = async () => {
        if(myAddress==""){
            showPopUp('에러','지갑을 먼저 연동해주세요',()=>{})
            return;
        }
        const URL = 'http://localhost:4000/buy';
        let body = {
            address:myAddress,
            nftId:nftId
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
        <Form.Control
            className="mb-3"
            value={nftId}
            onChange = {(e) =>{
                setNftId(e.target.value);
                }
            }
            type="text"
            placeholder="구매할 NFT ID"
        />
        <Button className="mb-3 btn btn-primary btn-lg" onClick={()=>handleQuery()}> Buy </Button>
        <Card className="mt-3 p-3 bg-primary text-white rounded">Response : {response} </Card>
         
    </div>
}

export default Buy;