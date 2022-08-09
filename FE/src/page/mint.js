import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card,Form } from 'react-bootstrap';

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
        const URL = 'http://localhost:4000/buy';
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
        <Form.Control
            value={name}
            onChange = {(e) =>{
                setName(e.target.value);
                }
            }
            type="text"
            placeholder="name"
        />
        <Form.Control
            value={external_url}
            onChange = {(e) =>{
                setExternal_url(e.target.value);
                }
            }
            type="text"
            placeholder="external_url"
        />
        <Form.Control
            value={image}
            onChange = {(e) =>{
                setImage(e.target.value);
                }
            }
            type="text"
            placeholder="image"
        />
        <Form.Control
            value={attributes}
            onChange = {(e) =>{
                setAttributes(e.target.value);
                }
            }
            type="text"
            placeholder="attributes"
        />
        <Button onClick={()=>handleQuery()}> mint </Button>
        <Card>response : {response} </Card>
         
    </div>
}

export default Mint;