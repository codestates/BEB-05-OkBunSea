import './App.css';
import Main from './page/main';
import PopUp from './components/modal';
import Header from './components/header'
import { useState, useEffect } from 'react';
import Web3 from 'web3';

function App() {
  const [showModal,setShowModal] = useState(false);
  const [modalData,setModalData] = useState({});
  const [myAddress, setMyAddress] = useState("");
  const [web3, setWeb3] = useState();
  const contractaddr = '0x34f46BBf48e2861C2EB9cd164aeC9b58CeFd31aa'
    useEffect(() => {
        if (typeof window.ethereum !== "undefined") { // window.ethereum이 있다면
            try {
                const web = new Web3(window.ethereum);  // 새로운 web3 객체를 만든다
                setWeb3(web);
            } catch (err) {
                console.log(err);
            }
        }
    }, []);
  const showPopUp = (title, content, callback) =>{
    setModalData({
      title: title,
      content: content,
      onConfirm: callback
    })
    setShowModal(true)
  }

  return (
    <div className="App">
      <Header myAddress={myAddress} setMyAddress={setMyAddress}/>
      <Main myAddress={myAddress} showPopUp={showPopUp} web3={web3} contractaddr={contractaddr}/>
      <PopUp showModal={showModal} setShowModal={setShowModal} modalData={modalData}/>
    </div>
  );
}
export default App;