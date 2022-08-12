import {Alert, Card, Button} from 'react-bootstrap';
import logo from './logo.png';
import Container from 'react-bootstrap/Container';

function Header({myAddress,setMyAddress}){

    const connectWallet = async () => {
          const accounts = await window.ethereum.request({
              method: "eth_requestAccounts",
          });

          setMyAddress(accounts[0]);
    };

    return <Container className="panel"><Alert className='header' variant={"balance"} >
            <a href="/"><img src={logo} width={"120px"} className="logo img-fluid"/></a>
            <Card className="address" >{myAddress}</Card>   
            <Button
                    className="metaConnect"
                    onClick={() => {
                        connectWallet();
                    }}
                >
                   지갑 연결
                </Button>
                 
        </Alert></Container>
}

export default Header;