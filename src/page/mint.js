import React, { useState } from 'react';
import nft from './img/nft.png';

import { Button, Card, Form, Container } from 'react-bootstrap';
import erc721abi from '../components/erc721Abi';
import { NFTStorage } from 'nft.storage'

const client = new NFTStorage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDA3NWQyNzEzNTg2RDJmMzJhMDcyYTMyN0I3ZTI4ODE4MUY2NUVEOUUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MDE5MjY1Njk4OCwibmFtZSI6Ik9rQnVuU2VhIn0.QiGkZi3fsIJVHUXP7o5ZirkR4u4EuZdJKgJY5Wv4RC4' })


function Mint({myAddress, showPopUp,web3, contractaddr, setLoading}){
    const [imgFile, setImgFile] = useState()
    // const [image, setImage] = useState("")
    const [description,setDescription] = useState("")
    const [name, setName] =useState("")
    // const [attributes, setAttributes] = useState("")


    const handleImage = (event) =>{
        setImgFile(event.target.files[0]);
    }

    const handleQuery = async () => {
        console.log("click")
        setLoading(true)
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
            // ipfs://bafyreib4pff766vhpbxbhjbqqnsh5emeznvujayjj4z2iu533cprgbz23m/metadata.json
            setLoading(false)
            mintOwnFile(`https://${metadata.ipnft}.ipfs.nftstorage.link/metadata.json`)

            }

    const mintOwnFile = async function (uri) {
        let tokenContract = await new web3.eth.Contract(erc721abi, contractaddr);
        console.log(`fileURI ${uri}`)
        const minting = await tokenContract.methods.mintNFT(myAddress, uri).send({
        from: myAddress
        });
        console.log(minting);
        // addNewErc721Token();
    };
    return <div>
        <Container className="panel">
            <div class="row gx-4 gx-lg-5 align-items-center my-5">
                <div class="col-lg-7">
                    <Form.Control
                    className="mt-4 mb-4 form-control form-control-lg"
                    value={name}
                    onChange = {(e) =>{
                        setName(e.target.value);
                        }
                    }
                    type="text"
                    placeholder="Name"
                    />
                    <Form.Control
                    className="mb-4 form-control form-control-lg"
                    value={description}
                    onChange = {(e) =>{
                        setDescription(e.target.value);
                        }
                    }
                    type="text"
                    placeholder="Attributes"
                    />
                    <input className="UploadImage form-control form-control-lg" type="file" onChange={handleImage} />
                    <br/>
                    <Button className="mb-4 p-3 btn-primary btn-lg" onClick={()=>handleQuery()}> Mint </Button>
                </div>
                <div class="col-lg-5">
                    <img class="img-fluid rounded mb-4 mb-lg-0" src={nft} alt="..." />
                </div>
            </div>
        
        
        </Container>
    </div>
}

export default Mint;