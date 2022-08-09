import {Alert, Form} from 'react-bootstrap';
import logo from './logo.png';

function Header({myAddress,setMyAddress}){

    return <Alert className='header' variant={"balance"} >
            <img src={logo} width={"100px"} className="logo"/>
            <Form.Control
                value={myAddress}
                onChange = {(e) =>{
                    setMyAddress(e.target.value);
                    }
                }
                type="text"
                placeholder="지갑주소"
            />
        </Alert>
}

export default Header;