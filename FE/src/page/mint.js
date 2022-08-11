import React, { useState } from 'react';

import { Button, Card,Form,Container } from 'react-bootstrap';
import erc721abi from '../components/erc721Abi';
import { NFTStorage } from 'nft.storage'
const client = new NFTStorage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDA3NWQyNzEzNTg2RDJmMzJhMDcyYTMyN0I3ZTI4ODE4MUY2NUVEOUUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MDE5MjY1Njk4OCwibmFtZSI6Ik9rQnVuU2VhIn0.QiGkZi3fsIJVHUXP7o5ZirkR4u4EuZdJKgJY5Wv4RC4' })


function Mint({myAddress, showPopUp,web3, contractaddr}){
    const [imgFile, setImgFile] = useState()
    // const [image, setImage] = useState("")
    const [description,setDescription] = useState("")
    const [name, setName] =useState("")
    // const [attributes, setAttributes] = useState("")
    const [fileURI, setFileURI] = useState("")

    const handleImage = (event) =>{
        setImgFile(event.target.files[0]);
    }

    const handleQuery = async () => {
        console.log("click")
        if(myAddress==""){
            showPopUp('에러','지갑을 먼저 연동해주세요',()=>{})
            return;
        }
        createURI()
    }

        async function createURI() {
            const metadata = await client.store({
                name: name,
                description: description,
                image: imgFile,
            })
            console.log(`https://${metadata.ipnft}.ipfs.nftstorage.link/metadata.json`)
            setFileURI(`https://${metadata.ipnft}.ipfs.nftstorage.link/metadata.json`)
            // ipfs://bafyreib4pff766vhpbxbhjbqqnsh5emeznvujayjj4z2iu533cprgbz23m/metadata.json
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
            value={description}
            onChange = {(e) =>{
                setDescription(e.target.value);
                }
            }
            type="text"
            placeholder="attributes"
        />
        <input className="UploadImage" type="file" onChange={handleImage} />
        <Button className="mb-3 btn btn-primary btn-lg" onClick={()=>handleQuery()}> Make </Button>
        <Button className="mb-3 btn btn-primary btn-lg"  onClick={()=>mintOwnFile()}> Mint </Button>
        </Container>
    </div>
}

export default Mint;