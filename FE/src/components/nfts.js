import { Card } from "react-bootstrap";

function Nfts({ nftList }) {
    return (
        <div className="nftList">
            {nftList.map((el)=>{
                return <Card  style={{width:'300px'}}>
                    <Card.Header>{el.name}</Card.Header>
                    <Card.Img src={el.image}></Card.Img>
                    </Card>
            })}
        </div>
    );
}

export default Nfts;