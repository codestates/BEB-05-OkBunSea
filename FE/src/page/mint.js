import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card,Form,Container } from 'react-bootstrap';
import UploadImage from '../components/fileManager';
import erc721abi from '../components/erc721Abi';

function Mint({myAddress, showPopUp,web3, contractaddr}){

    const [image, setImage] = useState("")
    const [external_url,setExternal_url] = useState("")
    const [name, setName] =useState("")
    const [attributes, setAttributes] = useState("")
    const [fileURI, setFileURI] = useState("")

    const handleQuery = async () => {
        if(myAddress==""){
            showPopUp('에러','지갑을 먼저 연동해주세요',()=>{})
            return;
        }
        const URL = 'http://localhost:4002/add';
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
            setFileURI(res.data)
        }
        ).catch((err)=>{
            showPopUp('에러','에러입니다',()=>{})
        })
    }

    const mintOwnFile = async function () {
        let tokenContract = await new web3.eth.Contract(erc721abi, contractaddr);
        console.log(`fileURI ${fileURI}`)
        const minting = await tokenContract.methods.mintNFT(myAddress, fileURI).send({
        from: myAddress
        });
        console.log(minting);
        // addNewErc721Token();
        setFileURI("");
    };
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
            value={attributes}
            onChange = {(e) =>{
                setAttributes(e.target.value);
                }
            }
            type="text"
            placeholder="attributes"
        />
        <UploadImage setImage={setImage}/>
        <Button className="mb-3 btn btn-primary btn-lg" onClick={()=>handleQuery()}> Make </Button>
        <Button className="mb-3 btn btn-primary btn-lg"  onClick={()=>mintOwnFile()}> Mint </Button>
        </Container>
    </div>
}

export default Mint;