import { useState, useEffect } from 'react'
import Lenis from 'lenis'
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
import weddingcouple from './assets/downthemall/wedding-couple.png'
import vines from './assets/downthemall/vines.png'
import vinesflip from './assets/downthemall/vinesflip.png'
import asset64NTA from './assets/downthemall/64NTAFiZlzU2kGaVG82xflIhbqk.png'
import pinholeinside from './assets/downthemall/pinholeinside.png'
import whiteScroll from './assets/downthemall/white-scroll.png'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <div>
      <div className='w-[98dvw] mx-auto max-w-[1200px] pb-[200px]'>
        <section className='first-section w-full relative overflow-hidden'>
          <img src={topBar} alt="" className="w-full h-[600px] z-20 absolute top-0 left-0" />
          <span className='hero-names z-20 absolute top-[30px] left-1/2 -translate-x-1/2 text-center'>
            Abhishek
            <br />
            &
            <br />
            Kanika
          </span>
          <img src={roseRight} alt="" className="z-10 absolute top-5-hovers left-[-20%] w-[50%] animate-float-gentle" />
          <img src={roseLeft} alt="" className="z-10 absolute top-5-hovers right-[-20%] w-[50%] animate-float-gentle-delayed" />
          <img src={vinesflip} alt="" className="z-9 absolute top-5-hovers left-[-5%] w-[50%] animate-float-gentle-delayed" />
          <img src={vines} alt="" className="z-9 absolute top-5-hovers right-[-5%] w-[50%] animate-float-gentle" />
          <img src={lordShiva} alt="" className="z-8 absolute w-[70%] top-5-hovers left-1/2 -translate-x-1/2" />
          <img src={longPiece} alt="" className="z-7 h-full absolute right-[-2px]" />
          <img src={longSomething} alt="" className="z-6 h-full absolute left-0" />
          <img src={castleCloud} alt="" className="z-20  absolute left-[18%] animate-sway first-castle" />
          <img src={baloon} alt="" className="z-7  absolute left-[5%] animate-balloon first-baloon" />
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



        <section className='second-section w-full relative overflow-hidden'>
          <img src={lordGanesh} alt="" className="w-[10%]  z-20 absolute top-24  left-1/2 -translate-x-1/2" />
          <img src={baloon} alt="" className="z-7  w-[25%] top-[20px] absolute second-balloon" />
          <img src={moon} alt="" className="z-7  w-[25%] top-[210px] absolute second-moon" />
          <img src={castleCloud} alt="" className="z-7  w-[25%] top-[800px] absolute second-castle" />
          <div className='invite-text pt-20 '>
            <span>
            </span>
            <span>
              With the heavenly blessings of

              Smt. Lata Devi & Sm. Kamal Kapoor
            </span>

            <span>
              Mrs. Reena & Mr. Rajiv Kapoor

              <span>INVITE

              </span>
              You to join us in the wedding celebrations of


            </span>
            <span>
              Abhishek
              <br />
              &
              <br />
              Kanika
            </span>

            <span>
              Daughter of

              Mrs. Shalini & Mr. Aakash Mittal,

              On the following events
            </span>
          </div>


          <div className="event-parts absolute top-[1400px] left-1/2 -translate-x-1/2 w-[90%] max-w-[1100px]">
            <div className="events-grid">
              <div className="event-item">
                <div className="single-event border-[4.07px] border-[#AC9545] relative p-3 rounded-full">
                  <img src={ballroomCouple} alt="" />
                </div>
                <img src={baloon} alt="" className="decor-balloon" />
                <img src={moon} alt="" className="decor-moon" />
                <img src={castleCloud} alt="" className="decor-castle" />
                <h2 className="event-title">Cocktail</h2>
                <p className="event-info">Friday, March 7th 2026<br />The Savoy, Mussoorie<br />6pm Onwards</p>
              </div>

              <div className="event-item">
                <div className="single-event border-[4.07px] border-[#AC9545] relative p-3 rounded-full">
                  <img src={marryCouple} alt="" />
                </div>
                <img src={baloon} alt="" className="decor-balloon" />
                <img src={moon} alt="" className="decor-moon" />
                <img src={castleCloud} alt="" className="decor-castle" />
                <h2 className="event-title">Mehendi</h2>
                <p className="event-info">Saturday, March 8th 2026<br />Garden Terrace<br />4pm Onwards</p>
              </div>

              <div className="event-item">
                <div className="single-event border-[4.07px] border-[#AC9545] relative p-3 rounded-full">
                  <img src={modernCouple} alt="" />
                </div>
                <img src={baloon} alt="" className="decor-balloon" />
                <img src={moon} alt="" className="decor-moon" />
                <img src={castleCloud} alt="" className="decor-castle" />
                <h2 className="event-title">Haldi</h2>
                <p className="event-info">Saturday, March 8th 2026<br />Pool Lawn<br />10am Onwards</p>
              </div>

              <div className="event-item">
                <div className="single-event border-[4.07px] border-[#AC9545] relative p-3 rounded-full">
                  <img src={coupleImg} alt="" />
                </div>
                <img src={baloon} alt="" className="decor-balloon" />
                <img src={moon} alt="" className="decor-moon" />
                <img src={castleCloud} alt="" className="decor-castle" />
                <h2 className="event-title">Sangeet</h2>
                <p className="event-info">Saturday, March 8th 2026<br />Grand Ballroom<br />7pm Onwards</p>
              </div>

              <div className="event-item">
                <div className="single-event border-[4.07px] border-[#AC9545] relative p-3 rounded-full">
                  <img src={brideGroom} alt="" />
                </div>
                <img src={baloon} alt="" className="decor-balloon" />
                <img src={moon} alt="" className="decor-moon" />
                <img src={castleCloud} alt="" className="decor-castle" />
                <h2 className="event-title">Wedding</h2>
                <p className="event-info">Sunday, March 9th 2026<br />Temple Gardens<br />10am Onwards</p>
              </div>

              <div className="event-item">
                <div className="single-event border-[4.07px] border-[#AC9545] relative p-3 rounded-full">
                  <img src={weddingcouple} alt="" />
                </div>
                <img src={baloon} alt="" className="decor-balloon" />
                <img src={moon} alt="" className="decor-moon" />
                <img src={castleCloud} alt="" className="decor-castle" />
                <h2 className="event-title">Reception</h2>
                <p className="event-info">Sunday, March 9th 2026<br />Royal Palace Hall<br />7pm Onwards</p>
              </div>
            </div>
          </div>

        </section>
        <section className="third-section w-full relative overflow-hidden">
          <div className='pinhole-container absolute top-40 left-1/2 -translate-x-1/2'>
            <img src={pinholeinside} alt="" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full animate-spin-variable ' />
            <img src={ringPinhole} alt="" className='absolute top-1/2 left-1/2 w-[80%] -translate-x-1/2 -translate-y-1/2' />
          </div>

          <div className='bride-groom-section absolute w-full left-1/2 -translate-x-1/2'>
            <img src={decor} className='w-20 mx-auto mb-4' />
            <div className='flex flex-col items-center text-center'>
              <span className='bride-groom-subtitle'>Meet the</span>
              <h1 className='bride-groom-title'>Bride &<br />Groom</h1>
              <p className='bride-groom-text'>We are both so delighted that you are able to join us in celebrating what we hope will be one of the happiest days of our lives. The affection shown to us by so many people since our roka has been incredibly moving, and has touched us both deeply. We would like to take this opportunity to thank everyone most sincerely for their kindness. We are looking forward to see you at the wedding functions.</p>
            </div>
          </div>


          <div className='carousel-parent absolute w-full h-auto left-1/2 -translate-x-1/2'>
            <div className='carousel-container absolute top-[-10px] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden'>
              <div className='carousel-track flex h-full'>
                <img src={longShotCouple} alt="" className='h-full carousel-img object-cover shrink-0' />
                <img src={punjabiCouple} alt="" className='h-full carousel-img object-cover shrink-0' />
                <img src={almostKissingCouple} alt="" className='h-full carousel-img object-cover shrink-0' />
                <img src={longShotCouple} alt="" className='h-full carousel-img object-cover shrink-0' />
              </div>
            </div>
            <img src={pendantImg} className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%]' />
          </div>

        </section>

        <section className="fourth-section w-full relative overflow-hidden">
          <div className='pinhole-container absolute top-40 left-1/2 -translate-x-1/2'>
            <img src={darkScroll} alt="" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full animate-spin-variable ' />
            <img src={pinhole} alt="" className='absolute top-1/2 left-1/2 w-[80%] -translate-x-1/2 -translate-y-1/2' />
          </div>

          <div className='things-section absolute w-full left-1/2 -translate-x-1/2'>
            <img src={question} className='w-20 mx-auto mb-4' />
            <div className='flex flex-col items-center text-center'>
              <h1 className='things-title'>Things to<br />know</h1>
              <p className='things-text'>To help you feel at ease and enjoy every moment of the celebrations, we've gathered a few thoughtful details we'd love for you to know before the big day.</p>
            </div>
          </div>

          <div className='info-grid absolute left-1/2 -translate-x-1/2 w-[90%] max-w-[800px]'>
            <div className='grid grid-cols-2 gap-8'>
              <div className='info-card'>
                <img src={instaIcon} alt="Hashtag" className='w-16 mx-auto mb-3' />
                <h3 className='info-card-title'>Hashtag</h3>
                <p className='info-card-text'>#AbhishekWedsKanika - Tag your photos!</p>
              </div>

              <div className='info-card'>
                <img src={cardskQ} alt="Staff" className='w-16 mx-auto mb-3' />
                <h3 className='info-card-title'>Staff</h3>
                <p className='info-card-text'>Our team will assist you throughout.</p>
              </div>

              <div className='info-card'>
                <img src={car} alt="Parking" className='w-16 mx-auto mb-3' />
                <h3 className='info-card-title'>Parking</h3>
                <p className='info-card-text'>Complimentary valet parking available.</p>
              </div>

              <div className='info-card'>
                <img src={sunCloud} alt="Weather" className='w-16 mx-auto mb-3' />
                <h3 className='info-card-title'>Weather</h3>
                <p className='info-card-text'>Expect cool evenings, carry a light jacket.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="fifth-section w-full h-[1000px] relative overflow-hidden">
          <div className='pinhole-container absolute top-40 left-1/2 -translate-x-1/2'>
            <img src={whiteScroll} alt="" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full animate-spin-variable ' />
            <img src={pinhole} alt="" className='absolute top-1/2 left-1/2 w-[80%] -translate-x-1/2 -translate-y-1/2' />
          </div>
          <h1 className='countdown absolute left-1/2 -translate-x-1/2 text-4xl font-bold text-center'>
            The countdown begins
            <br />
            72D 05H 11M
          </h1>


        </section>
      </div >
    </div >
  )
}

export default App
