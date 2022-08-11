import { Card } from "react-bootstrap";

function Nfts({ nftList }) {
    return (
        <div className="nftList">
            {nftList.map((el)=>{
                let image = el.image
                if(image.substr(0,4)=="ipfs"){
                    let tempArr = image.split('ipfs://');
                    image = `https://ipfs.io/ipfs/${tempArr[1]}`
                }
                return <Card  style={{width:'300px'}}>
                    <Card.Header>{el.name}</Card.Header>
                    <Card.Img src={image}></Card.Img>
                    </Card>
            })}
        </div>
    );
}

export default Nfts;