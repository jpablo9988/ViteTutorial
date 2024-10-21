import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import dancingBaby from './assets/dancingbaby.gif'
import animatronic from './assets/anim.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(420)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={dancingBaby} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={animatronic} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>I totally didn't use Vite + React to make this. I did it by scratch! </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          count is {count}
        </button>
        <p>
          GET TO 0 FOR [wild] PRIZE! 
        </p>
      </div>
      <p className="read-the-docs">
        This is the best website you've EVER laid your peepers upon. 
      </p>
    </>
  )
}

export default App
