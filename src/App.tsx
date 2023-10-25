// npm create vite@latest
// cd ...
// npm install
// npm run dev
// npx vite build

// import dynamic updating
// import { useState } from 'react'
// import logos
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import githubIcon from './assets/githubIcon.png'
// attach css (duplicate statement, also attached in main.tsx)
import './index.css'

// import our first square demo
import Demo1 from './Demo1.tsx'


// create new function for displaying Icons
function Icons()
{
  return (
    <>
      <div className="funky">        
        <a href="https://vitejs.dev" className="icon">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" className="icon2">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
        <div className="icon2Text">
          I built this website portfolio with react.js + vite,
          with elements of html, javascript (typescript), and css
        </div>
      </div>
      <br />

      <div className="funky">
        <a href="https://github.com/yelir4/">
          <img src={githubIcon} className="icon" />
          <div className="iconText">
            check out the documentation at my github!
          </div>
        </a>
      </div>
      <br />

      <div className="funky">
      <a href="https://www.linkedin.com/in/rileyguioguio/">
        <img src={githubIcon} className="icon" />
        <div className="iconText">
          visit my linkedin!
        </div>
        </a>
      </div>
    </>
  );
}



// default export of this module is `App()` which gets rendered in `index.html`
export default function App() {
  // this whole thing is the div id="root"
  return (
    <>
      {/* textBox holds the text content, with 8% `margin-left` */}
      <div id="textBox">        
        <br />
        {/* picture goes here */}
        <img src={viteLogo} width="100px" />
        <p>Riley Guioguio</p>

        {/* introduction */}
        <p>
          Hello, and welcome to my website portfolio!
          <br/>My name is Riley and I'm a junior at Santa Clara University.
          <br/>This is still a work in progress...
        </p>
        <br />

        <h3>relevant coursework</h3>
        <p>
          C
          <li>Abstract Data Types and Data Structures (CSEN 12)</li>
          <li>Computer Networks (CSEN 146)</li>
          <li>Operating Systems (CSEN 177)</li>
        </p>

        <p>
        C++
        <li>Object-Oriented Programming and Advanced Data Structures (CSEN 79)</li>
        </p>

        <p>
        Java
        <li>AP Computer Science A</li>
        <li>Object-Oriented Analysis, Design, Programming (CSEN 160)</li>
        </p>

        <p>
        Python
        <li>Machine Learning and Data Mining (CSEN 140)</li>
        <li>Computer Networks (CSEN 146)</li>
        </p>

        <p>
        ARM Assmebly
        <li>Intro to Embedded Systems (CSEN 20)</li>
        </p>

        <p>
        Circuitry
        <li>Electric Circuits (ELEN 50)</li>
        <li>Digital Integrated Circuit Design (ELEN 153)</li>
        </p>
        
        {/* projects section */}
        <h3>projects</h3>
        <Icons />
        <br />
        
        <h5>thanks for stopping by...</h5>
      </div>
      <div id="demos">
        <br /><br />
        hello all

        <Demo1 />
      </div>
    </>
  );
}