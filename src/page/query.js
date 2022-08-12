import React, { useState } from 'react';
import Nfts from '../components/nfts';
import { Button } from 'react-bootstrap';
import erc721abi from '../components/erc721Abi';
import { addListener } from 'process';
import Transfer from './transfer';

function Query({myAddress, showPopUp, web3, contractaddr,setLoading}){
    const [nfts, setNfts] = useState([])
    const [nftInfo, setNftInfo] = useState()

    const clickNFT = (data) =>{
      console.log(data)
      setNftInfo(data);
    }

    const queryNfts = async () => {
		  const tokenContract = await new web3.eth.Contract(
	      erc721abi,
	      contractaddr
	  );
	  const NFTname = await tokenContract.methods.name().call();
	  const _balance = await tokenContract.methods.balanceOf(myAddress).call();
	    let arr = [];
		  for (let i = 0; i < _balance; i++) {
            const _ids = await tokenContract.methods.tokenOfOwnerByIndex(myAddress,i).call();
		    arr.push(_ids);
		  }
        let temp_nfts = [];
		  for (let tokenId of arr) {
            let tokenURI = await tokenContract.methods
                .tokenURI(tokenId)
                .call();
            temp_nfts.push({NFTname, tokenId, tokenURI });
		  }

          let res_nfts=[];
          for (let token of temp_nfts){
            let data = {}
            data = await fetch(token.tokenURI)
                .then(response => response.json())
                .then((res)=>{
                    return res
                }).catch((error) => {
                  return {
                    name : "undefined",
                    image : 'https://opensea.io/static/images/placeholder.png'
                  }
                });;

            let tempNFT = {id:token.tokenId, info:data}
            res_nfts.push(tempNFT)
          }
            console.log("temp_nfts")
            console.log(res_nfts)
          setNfts(res_nfts)
	}

    return <div>
        {nftInfo === undefined ? <div>
            <Nfts nftList={nfts} clickNFT={clickNFT}/>
            <Button className="mb-3 btn btn-primary btn-lg" onClick={()=>queryNfts()}>Query </Button>
          </div> :
          <div>
          <Transfer web3={web3} myAddress={myAddress} NFT={nftInfo} setNftInfo={setNftInfo} contractaddr={contractaddr}/>
          </div>
        }
        {/* <Card className="mt-3 p-3 bg-primary text-white rounded">Response : {response} </Card> */}
    </div>
}

export default Query;