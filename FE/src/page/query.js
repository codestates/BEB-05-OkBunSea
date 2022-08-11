import React, { useState } from 'react';
import Nfts from '../components/nfts';
import { Button } from 'react-bootstrap';
import erc721abi from '../components/erc721Abi';

function Query({myAddress, showPopUp, web3, contractaddr}){
    const [nfts, setNfts] = useState([])

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
            const data = await fetch(token.tokenURI)
                .then(response => response.json())
                .then((res)=>{
                    return res
                });
            res_nfts.push(data)
          }
            console.log("temp_nfts")
            console.log(res_nfts)
          setNfts(res_nfts)
	}

    return <div>
        <Nfts nftList={nfts}/>
        <Button className="mb-3 btn btn-primary btn-lg" onClick={()=>queryNfts()}>Query </Button>
        {/* <Card className="mt-3 p-3 bg-primary text-white rounded">Response : {response} </Card> */}
         
    </div>
}

export default Query;