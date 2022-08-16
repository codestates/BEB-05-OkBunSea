import erc721abi from '../components/erc721Abi'
import React, { useEffect, useState } from 'react';
import {Card,Button,Form, Container} from 'react-bootstrap'

function Transfer({web3, myAddress, NFT, contractaddr}){
    const [toAddr, setToAddr] = useState("");
    let image = NFT.info.image;
    if(image.substr(0,4)=="ipfs"){
                    let tempArr = image.split('ipfs://');
                    image = `https://ipfs.io/ipfs/${tempArr[1]}`
                }
        const sendToken = async (to, tokenId) => {
            console.log(toAddr, tokenId)
        const tokenContract = await new web3.eth.Contract(
            erc721abi,
            contractaddr,
            {
                from: myAddress,
            }
        );
        tokenContract.methods
            .transferFrom(myAddress, to, tokenId)
            .send({
                from: myAddress,
            })
            .on("receipt", (receipt) => {
                setToAddr("");
            });
        };

        return <div> 
            <Container className="panel">
                <div className="row justify-content-center">
                    <Card style={{width:'45rem'}}>
                    <Card.Header>{NFT.name}</Card.Header>
                    <Card.Img src={image}></Card.Img>
                    <Form.Control
                    className="mt-4 mb-4 p-3"
                    value={toAddr}
                    onChange = {(e) =>{
                        setToAddr(e.target.value);
                        }
                    }
                    type="text"
                    placeholder="address"
                    />
                    <Button className="mt-2 mb-4 p-3" onClick={()=>{sendToken(toAddr,NFT.id)}}>전송</Button>
                    </Card>
                </div>
            </Container>
                    </div>
}
export default Transfer;