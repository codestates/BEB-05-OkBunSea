import { useState } from 'react';
import {Tab, Tabs} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import main_img from './img/main_img.jpg';
import About from './about';
import Mint from './mint';
import Query from './query';
import Buy from './buy';
import Sell from './sell';

function Main({myAddress, showPopUp}){
    const [tab, setTab] = useState("Main")
    return<div>
      <Container className="panel" >
        <Tabs
          activeKey={tab}
          onSelect={(k) => setTab(k)}
          className="mb-3"
        >
          <Tab eventKey="About"  title="About" onClick={()=>setTab("<About>")}>
          </Tab>
          <Tab eventKey="Mint"  title="Mint" onClick={()=>setTab("<Mint>")}>
          </Tab>
          <Tab eventKey="Query" title="Query" onClick={()=>setTab("Query")}>
          </Tab>
          <Tab eventKey="Buy" title="Buy" onClick={()=>setTab("Buy")}>
          </Tab>
          <Tab eventKey="Sell" title="Sell" onClick={()=>setTab("Sell")}>
          </Tab>
        </Tabs>
        
        {/* <img src={main_img} width={"100%"} className="main_img"/> */}
        
        

        {tab=="Mint" ? <Mint myAddress={myAddress} showPopUp={showPopUp}/>:null}
        {tab=="Query" ? <Query myAddress={myAddress} showPopUp={showPopUp}/>:null}
        {tab=="Buy" ? <Buy myAddress={myAddress} showPopUp={showPopUp}/>:null}
        {tab=="Sell" ? <Sell myAddress={myAddress} showPopUp={showPopUp}/>:null}
      </Container>
    </div>
}

export default Main;