// npm create vite@latest
// cd ...
// npm install
// npm run dev
// npx vite build

// import dynamic updating
import { useState } from 'react'
// import logos
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// attach css (duplicate statement, also attached in main.tsx)
import './index.css'

// default export of this module is `App()` which gets rendered in `index.html`
export default function App() {
  const [count, setCount] = useState(0);

  // this whole thing is the div id="root"
  return (
    <>
      {/* textBox for now holds everything with a 10% margin-left */}
      <div id="textBox">
        {/* push the content down a little bit */}
        <br /><br />
        {/* this is the div with the logos innit */}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <br />
        <p>Riley Guioguio</p>

        {/* header thingy */}
        <p>Hello, and welcome to my portfolio website!</p>
        <div>
          {/* arrow function: calls setCount with the parameters when clicked */}
          <button className="funky"onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Hello <code>world</code>, welcome to my portfolio
          </p>
          <p className="funky">
            another text element<br/>with a break
          </p>
        </div>
      </div>
      <div id="demos">
        <br /><br />
        hello guys
      </div>
    </>
  );
}