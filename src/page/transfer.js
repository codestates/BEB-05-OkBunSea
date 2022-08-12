import erc721abi from '../components/erc721Abi'
import React, { useEffect, useState } from 'react';
import {Card,Button,Form} from 'react-bootstrap'

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
            <Card style={{width:'800px'}}>
            <Card.Header>{NFT.name}</Card.Header>
            <Card.Img src={image}></Card.Img>
            <Form.Control
            className="mb-3"
            value={toAddr}
            onChange = {(e) =>{
                setToAddr(e.target.value);
                }
            }
            type="text"
            placeholder="address"
        />
            <Button onClick={()=>{sendToken(toAddr,NFT.id)}}>전송</Button>
            </Card>
                    </div>
}
export default Transfer;