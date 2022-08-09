import './App.css';
import Main from './page/main';
import PopUp from './components/modal';
import Header from './components/header'
import { useState } from 'react';

function App() {
  const [showModal,setShowModal] = useState(false);
  const [modalData,setModalData] = useState({});
  const [myAddress, setMyAddress] = useState("");

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
      <Main myAddress={myAddress} showPopUp={showPopUp}/>
      <PopUp showModal={showModal} setShowModal={setShowModal} modalData={modalData}/>
    </div>
  );
}
export default App;