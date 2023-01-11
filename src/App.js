import './App.css';
import next from './Components/Icons/Vector4.svg'
import MarketPlace from './Components/Marketplace/Index';
import AuctionsPage from './Components/AuctionsPage/Index'
import Drop from './Components/Drop/Index';
import {Routes, Route, NavLink, useNavigate} from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Homepage/Index'
import { FtData } from './Components/Homepage/FeaturedData';
import FtDescription from './Components/Homepage/FtDescription';
import AuctionLive from './Components/AuctionsPage/AuctionLive';
import { AuctionsData } from './Components/AuctionsPage/AuctionsData';
import { FilterData } from './Components/Marketplace/FilterData';






function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path='/' element={<Home next={next} Nav={Nav} useNavigate={useNavigate}/>}/>
      <Route path='/Marketplace' element={<MarketPlace Nav={Nav}/>}/>
      <Route path='/AuctionsPage' element={<AuctionsPage Nav={Nav} NavLink={NavLink} useNavigate={useNavigate} AuctionsData={AuctionsData}/>}/>
      <Route path='/Drop' element={<Drop Nav={Nav} NavLink={NavLink} useNavigate={useNavigate}/>}/>
      <Route path='/market/:id' element={<FtDescription FtData={FtData} FilterData={FilterData}/>}/>
      <Route path='/auctions/live-bid/:name' element={<AuctionLive AuctionsData={AuctionsData} useNavigate={useNavigate}/>}/>
    </Routes>  
    </div>
  );
}

export default App;
