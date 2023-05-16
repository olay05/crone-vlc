import React from 'react'
import './App.css'
import Logo from './Assets/VlclogoOrange.png';
import Flex from './Assets/fcix.png';
import Icon from './Assets/icon.png';
import Vlc from './Assets/logoGrey.png';
import Fb from './Assets/fb.png';
import Twitter from './Assets/tweet.png';

export default function App() {
  return (
    <div>
      <header>
        <nav>
          <ul className='flex p-4 gap-12 justify-center sticky text-orange-500 bg-slate-200 text-lg'>
            <img src={Logo} alt=''/>
            <li>VideoLAN</li>
            <li className='bg-orange-200 p-4'>VLC</li>
            <li>Projects</li>
            <li>Contribute</li>
            <li>Support</li>
            <img src={Flex} alt=""/>
          </ul>
        </nav>
      </header>

      <span className='flex gap-1 justify-center text-xl mt-10'>
        <p>VideoLAN, a project and a</p>
        <p className='text-orange-500'>non-profit oranization</p>
      </span>

      <article className='flex text-orange-500 justify-center mt-10 text-5xl '>
        <h2>Downloading VLC 3.0.18 for Windows</h2>

      </article>

      <span className='flex gap-1 justify-center text-xl mt-10'>
        <p>Thanks! Your download will start in few seconds... </p>
        <p>If not,</p>
        <p className='text-orange-500'>click here. Display checksum</p>

        <hr/>
      </span>
      
      <main className='flex justify-center gap-16'>
     
        <div  className='p-8 ml-8 mt-14 w-96 border-8 border-solid '>
          
          <img src={Icon} className='w-[70%]' alt=""/> 
          <h2 className='text-2xl'>Add the extension</h2>
          <p>Add Microsoft Rewards extension and start earning rewards for doing what you love</p>
          <button className='pt-2 pb-2 pl-[45%] pr-[40%] mt-3 bg-black text-white'>Install</button>
        </div>

        <div className='p-8 ml-8 mt-14 w-96 border-2 border-solid '>
          <img src={Icon} className='w-[70%] ' alt=""/> <h2 className='text-2xl'>Add the extension</h2>
          <p>It's easy - just install the Microsoft Rewards extension and earn free gift cards</p>

          <button className='pt-2 pb-2 pl-[45%] pr-[40%] mt-3 bg-black text-white'>Install</button>
          
        </div>
           
      </main>

      <span className=' '>
        <h3 className='text-orange-500 text-3xl pl-80 ml-28 mt-16'> VLC media player</h3> 
        <p className='pl-80 ml-28 text-lg'>VLC a free and open source cross-platform multimedia player and framework that plays most multimedia files as well <br/> as DVD, Audio, CD, VCD and various streaming protocols.</p>
      </span>
       
       <footer className='flex justify-evenly bg-slate-200 text-lg mt-12 pt-12'>
        <div className='bg-slate-200'>
        <img src={Vlc} alt=""/>
        <div className='w-20 flex bg-slate-200 pt-8'>
        <img src={Fb} className='bg-slate-200' alt=""/>  <img src={Twitter} className=' bg-slate-200' alt=""/>
        </div>

        </div>
        <div>
        <h3 className='text-2xl pb-5'>VLC media player</h3>
          <ul>
              <option>VLC</option>
              <option>VLC for Windows</option>
              <option>VLC for Mac OS X</option>
              <option> VLC for Ubuntu</option>
              <option>VLC for Android</option>
              <option>VLC for iOS</option>
              <option>Skins</option>
              <option> Extension</option>
              <option>Features</option>
              <option> Screenshots</option>
              <option>VLC Skin Editor</option>
          </ul>
          
          </div>

          <div>
        <h3 className='text-2xl pb-5'>ALL PROJECTS</h3>
          <ul>
              <option>VideoLAN Movie Creator</option>
              <option>DVBlast</option>
              <option>x264</option>
              <option>x262</option>
              <option>x265</option>
              <option>multicast</option>
              <option>VLMa</option>
              <option>libdvdcss</option>
              <option> libdvdnav</option>
              <option>libdvdread</option>
              <option>libbluray</option>
              <option>libdvdpsi</option>
              <option>libaacs</option>
              <option> libvdcsa</option>
              <option>biTStream</option>
          </ul>
          
          </div>

          <div>
        <h3 className='text-2xl pb-5'>COMMUNTY</h3>
          <ul>
              <option>Wiki</option>
              <option>Forums</option>
              <option>Mailing-Lists</option>
              <option>FAQ</option>
              <option>Donate money</option>
              <option>Donate time </option>
              <option>Get Goodies</option>
              
          </ul>
          
          </div>

          <div>
        <h3 className='text-2xl pb-5'>VIDEOLAN</h3>
          <ul>
              <option>Project and oranization</option>
              <option>Team</option>
              <option>Legal</option>
              <option> Contact us</option>
              <option>Partners</option>
              <option>Mirrors</option>
              <option>Press center</option>
              <option> Events</option>
              <option>Security center</option>
              <option> Get Involved</option>
              <option>News</option>
          </ul>
          
          </div>
       </footer>
       <p className='flex justify-center p-16 bg-slate-200 text-center'>
          Legal | Report Trademark Abuse <br/>
          VideoLAN, VLC, VLC media player and x264 are trademarks internationally registered by the VideoLAN non-profit organization. <br/>
          VideoLAN software is licensed under various open-source licenses: use and distribution are defined by each software license. <br/>

          Design by Made By Argon. Some icons are licensed under the CC BY-SA 3.0+. <br/>
          The VLC cone icon was designed by Richard Øiestad. Icons for VLMC, DVBlast and x264 designed by Roman Khramov.</p>

    </div>
  )
}
