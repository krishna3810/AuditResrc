import React from 'react';
import './App.css';

import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';

import {Routes, Route } from "react-router-dom";

import Home from "./pages/Home";


// import CreateResource from './pages/ResourceMgmt/CreateResource';
// import ViewInActRsrc from './pages/ResourceMgmt/ViewInActRsrc';
// import SetUpRsrcAvil from './pages/ResourceMgmt/SetUpRsrcAvil';
// import ViewUpdateRsrc from './pages/ResourceMgmt/ViewUpdateRsrc';

// import CCReq from './pages/ClientMgmt/CCReq'
// import UpCReq from './pages/ClientMgmt/UpCReq'

// import AuditMgmt from './pages/ReqAlloMgmt/AuditMgmt'
// import DeAlloRsrc from './pages/ReqAlloMgmt/DeAlloRsrc'

// import CreateAuRi from './pages/AuditMgrRiMgmt/CreateAuRi'
// import ReplaceAtMgr from './pages/AuditMgrRiMgmt/ReplaceAtMgr'
// import ReplaceAtRi from './pages/AuditMgrRiMgmt/ReplaceAtRi'
// import UpdateAtMgrRi from './pages/AuditMgrRiMgmt/UpdateAtMgrRi'



function App() {
  return (
    <>
    <Header/>
    <Sidebar/>
        
      
        
        <Routes>
          
          <Route path="/" index element={<Home />} />
          

          {/* <Route path='/ResourceMgmt/CreateResource' exact component={CreateResource}></Route>
          <Route path='/ResourceMgmt/ViewInActRsrc' exact component={ViewInActRsrc}></Route>
          <Route path='/ResourceMgmt/SetUpRsrcAvil' exact component={SetUpRsrcAvil}></Route>
          <Route path='/ResourceMgmt/ViewUpdateRsrc' exact component={ViewUpdateRsrc}></Route>

          <Route path='/ClientMgmt/CCReq' exact component={CCReq}></Route>
          <Route path='/ClientMgmt/UpCReq' exact component={UpCReq}></Route>

          <Route path='/ReqAlloMgmt/AuditMgmt' exact component={AuditMgmt}></Route>
          <Route path='/ReqAlloMgmt/DeAlloRsrc' exact component={DeAlloRsrc}></Route>

          <Route path='/AuditMgrRiMgmt/CreateAuRi' exact component={CreateAuRi}></Route>
          <Route path='/AuditMgrRiMgmt/ReplaceAtMgr' exact component={ReplaceAtMgr}></Route>
          <Route path='/AuditMgrRiMgmt/ReplaceAtRi' exact component={ReplaceAtRi}></Route>
          <Route path='/AuditMgrRiMgmt/UpdateAtMgrRi' exact component={UpdateAtMgrRi}></Route> */}
          
        </Routes>
        <Footer/>
      

    </>
  );
}

export default App;
