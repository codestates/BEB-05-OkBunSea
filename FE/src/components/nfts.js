import { Card,Button } from "react-bootstrap";

function Nfts({ nftList,clickNFT }) {
    return (
        <div className="nftList">
            {nftList.map((el)=>{
                let image = el.info.image
                if(image.substr(0,4)=="ipfs"){
                    let tempArr = image.split('ipfs://');
                    image = `https://ipfs.io/ipfs/${tempArr[1]}`
                }
                return <Card key={el.id} style={{width:'300px'}}>
                    <Card.Header>{el.info.name}</Card.Header>
                    <Card.Img src={image}></Card.Img>
                    id : {el.id}
                    <Button onClick={()=>{clickNFT(el)}}>전송</Button>
                    </Card>
            })}
        </div>
    );
}

export default Nfts;