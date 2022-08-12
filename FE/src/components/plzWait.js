import {Button,Modal} from 'react-bootstrap';

import loading from './loading.gif'

function PlzWait({showModal}){
    return <Modal className='popup' centered size="sm" show={showModal}>
            <Modal.Body className='body'>
                <img src={loading} style={{width:'100%'}}></img>
                시간이 다소 오래 소요될 수 있습니다.<br/>페이지를 벗어나지 말고 기다려주세요
            </Modal.Body>
        </Modal>
}

export default PlzWait;