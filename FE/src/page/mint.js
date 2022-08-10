import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card,Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function Mint({myAddress, showPopUp}){

    const [response, setResponse] = useState("")
    const [image, setImage] = useState("")
    const [external_url,setExternal_url] = useState("")
    const [name, setName] =useState("")
    const [attributes, setAttributes] = useState("")

    const handleQuery = async () => {
        if(myAddress==""){
            showPopUp('에러','지갑을 먼저 연동해주세요',()=>{})
            return;
        }
        const URL = 'http://localhost:3000/mint';
        let body = {
            name:name,
            image:image,
            external_url:external_url,
            attributes:attributes
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
        <Container className="panel">

        
        <Form.Control
            className="mb-3"
            value={name}
            onChange = {(e) =>{
                setName(e.target.value);
                }
            }
            type="text"
            placeholder="name"
        />
        <Form.Control
            className="mb-3"
            value={external_url}
            onChange = {(e) =>{
                setExternal_url(e.target.value);
                }
            }
            type="text"
            placeholder="external_url"
        />
        <Form.Control 
            className="mb-3"
            value={image}
            onChange = {(e) =>{
                setImage(e.target.value);
                }
            }
            type="text"
            placeholder="image"
        />
        <Form.Control
            className="mb-3"
            value={attributes}
            onChange = {(e) =>{
                setAttributes(e.target.value);
                }
            }
            type="text"
            placeholder="attributes"
        />
        <Button className="mb-3 btn btn-primary btn-lg" onClick={()=>handleQuery()}> Mint </Button>
        <Card className="mt-3 p-3 bg-primary text-white rounded">Response : {response} </Card>
        </Container>
    </div>
}

export default Mint;