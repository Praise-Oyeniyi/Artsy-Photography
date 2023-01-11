import React from 'react'
import Header from './Header';
import Slider from './Slider';
import Featured from './Featured';
import Auctions from './Auctions';
import Creators from './Creators';
import Footer from './Footer';
import { FtData } from './FeaturedData';

const Index = ({Nav, next, useNavigate}) => {
  return (
    <div className='mx-auto w-full space-y-10 overflow-x-hidden bg-body-bg text-header-p text-base'>
        <Header Nav={Nav}/>
        <Slider/>
        <Featured next={next} useNavigate={useNavigate} FtData={FtData}/>
        <Auctions next={next} useNavigate={useNavigate}/>
        <Creators/>
        <Footer useNavigate={useNavigate}/>
    </div>
  )
}

export default Index