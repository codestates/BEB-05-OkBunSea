import {Alert, Form} from 'react-bootstrap';
import logo from './logo.png';
import Container from 'react-bootstrap/Container';

function Header({myAddress,setMyAddress}){

    return <Container className="panel"><Alert className='header' variant={"balance"} >
            <a href="/"><img src={logo} width={"120px"} className="logo img-fluid"/></a>
            <Form.Control
                value={myAddress}
                onChange = {(e) =>{
                    setMyAddress(e.target.value);
                    }
                }
                type="text"
                placeholder="지갑주소"
            />            
        </Alert></Container>
}

export default Header;