import { useState, useEffect } from 'react'
import './App.css'
import mountainBg from './assets/downthemall/longbg.png'
import darkBg from './assets/downthemall/darkbg.png'
import starSky from './assets/downthemall/star-sky.png'
import coupleImg from './assets/downthemall/traditional-couple.png'
import lordGanesh from './assets/downthemall/lordganesh.png'
import decorLeft from './assets/downthemall/cutout.png'
import decorRight from './assets/downthemall/cutoutflip.png'
import roseLeft from './assets/downthemall/rose.png'
import roseRight from './assets/downthemall/rose-flip.png'
import pendantImg from './assets/downthemall/pendant.png'
import locationIcon from './assets/downthemall/location.png'
import instaIcon from './assets/downthemall/insta.png'
import almostKissingCouple from './assets/downthemall/almost-kissing-couple.jpeg'
import ballroomCouple from './assets/downthemall/ballroom-couple.png'
import baloon from './assets/downthemall/baloon.png'
import bg1 from './assets/downthemall/bg1.png'
import blueBg from './assets/downthemall/blue-bg.png'
import brideGroom from './assets/downthemall/bride-groom.png'
import car from './assets/downthemall/car.png'
import cardskQ from './assets/downthemall/cardskQ.png'
import castleCloud from './assets/downthemall/castle-cloud.png'
import darkScroll from './assets/downthemall/dark-scroll.png'
import decor from './assets/downthemall/decor.png'
import ganeshLeft from './assets/downthemall/ganeshleft.png'
import ganeshRight from './assets/downthemall/ganeshright.png'
import instaLikeCutout from './assets/downthemall/insta-like-cutout.png'
import instaLikeDarkCutout from './assets/downthemall/insta-like-dark-cutout.png'
import longShotCouple from './assets/downthemall/long-shot-couple.jpeg'
import longSomething from './assets/downthemall/long-something.png'
import longPiece from './assets/downthemall/longpiece.png'
import lordShiva from './assets/downthemall/lordshiva.png'
import marryCouple from './assets/downthemall/marrycouple.png'
import modernCouple from './assets/downthemall/moderncouple.png'
import moon from './assets/downthemall/moon.png'
import om from './assets/downthemall/om.png'
import pinhole from './assets/downthemall/pinhole.png'
import pinholeBlue from './assets/downthemall/pinholeblue.png'
import punjabiCouple from './assets/downthemall/punjabi-couple.jpeg'
import purposeScenery from './assets/downthemall/purpose-scenery.png'
import question from './assets/downthemall/question.png'
import ringPinhole from './assets/downthemall/ring pinghole.png'
import sunCloud from './assets/downthemall/suncloud.png'
import swordmanGroom from './assets/downthemall/swordman-groom.jpeg'
import topBar from './assets/downthemall/top-bar.png'
import tree1 from './assets/downthemall/tree1.png'
import tree2 from './assets/downthemall/tree2.png'
import widepiece from './assets/downthemall/wide.png'
import vines from './assets/downthemall/vines.png'
import vinesflip from './assets/downthemall/vinesflip.png'
import asset64NTA from './assets/downthemall/64NTAFiZlzU2kGaVG82xflIhbqk.png'
import assetJ8rC7 from './assets/downthemall/j8rC7lVmTCtjwjX0xagtMTxz38.png'

function App() {
  return (
    <div>
      <div className='w-[98dvw] mx-auto max-w-[1200px] pb-[200px]'>
        <section className='first-section w-full h-[330dvh] relative overflow-hidden'>
          <img src={topBar} alt="" className="w-full h-[600px] z-20 absolute top-0 left-0" />
          <img src={roseRight} alt="" className="z-10 absolute top-[250px] left-[-20%] w-[50%] animate-float-gentle" />
          <img src={roseLeft} alt="" className="z-10 absolute top-[250px] right-[-20%] w-[50%] animate-float-gentle-delayed" />
          <img src={vinesflip} alt="" className="z-9 absolute top-[250px] left-[-5%] w-[50%] animate-float-gentle-delayed" />
          <img src={vines} alt="" className="z-9 absolute top-[250px] right-[-5%] w-[50%] animate-float-gentle" />
          <img src={lordShiva} alt="" className="z-8 absolute w-[70%] top-[250px] left-1/2 -translate-x-1/2" />
          <img src={longPiece} alt="" className="z-7 h-full absolute right-[-2px]" />
          <img src={longSomething} alt="" className="z-6 h-full absolute left-0" />
          <img src={castleCloud} alt="" className="z-20  w-[60%] top-[910px] absolute left-[18%] animate-sway" />
          <img src={baloon} alt="" className="z-7  w-[55%] top-[600px] absolute left-[5%] animate-balloon" />
          <img src={tree2} alt="" className="z-4 h-[80%] absolute bottom-0 -left-[54%] animate-tree-sway" />
          <img src={tree1} alt="" className="z-4 h-[70%] absolute bottom-0 -right-[52%] animate-tree-sway-delayed" />
          <div className="z-3 w-[120%] absolute bottom-[-10%] animate-scenery-float left-1/2">
            <img src={purposeScenery} alt="" className="w-full h-full object-cover" />
          </div>
          <img src={ganeshLeft} alt="" className="z-20 w-[25%] absolute  bottom-[-1%] right-[-2%]" />
          <img src={ganeshRight} alt="" className="z-20 w-[25%] absolute  bottom-[-1%] left-[-2%]" />
          <img src={om} alt="" className="z-25 w-[25%] absolute bottom-[-1%]  left-1/2 -translate-x-1/2" />
          <img src={widepiece} alt="" className="z-20 w-full h-[15dvh] absolute  bottom-0 " />
        </section>
      </div>
    </div>
  )
}

export default App
