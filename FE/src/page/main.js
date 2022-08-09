import { useState } from 'react';
import {Tab, Tabs} from 'react-bootstrap'
import Mint from './mint';
import Query from './query';
import Buy from './buy';
import Sell from './sell';

function Main({myAddress, showPopUp}){
    const [tab, setTab] = useState("Main")
    return<div>
        <Tabs
          activeKey={tab}
          onSelect={(k) => setTab(k)}
          className="mb-3"
        >
          <Tab eventKey="Mint"  title="Mint" onClick={()=>setTab("Mint")}>
          </Tab>
          <Tab eventKey="Query" title="Query" onClick={()=>setTab("Query")}>
          </Tab>
          <Tab eventKey="Buy" title="Buy" onClick={()=>setTab("Buy")}>
          </Tab>
          <Tab eventKey="Sell" title="Sell" onClick={()=>setTab("Sell")}>
          </Tab>
        </Tabs>

        {tab=="Mint" ? <Mint myAddress={myAddress} showPopUp={showPopUp}/>:null}
        {tab=="Query" ? <Query myAddress={myAddress} showPopUp={showPopUp}/>:null}
        {tab=="Buy" ? <Buy myAddress={myAddress} showPopUp={showPopUp}/>:null}
        {tab=="Sell" ? <Sell myAddress={myAddress} showPopUp={showPopUp}/>:null}

    </div>
}

export default Main;