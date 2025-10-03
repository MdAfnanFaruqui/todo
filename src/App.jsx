import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import To_do from './components/To_do'



function App() {
const [count,setCount]=useState(0)

  return (<>
    {/* <div>
        <h2>{count}</h2>
        <div>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}disabled={count<1} >-</button>
        </div>
    </div> */}
    
    <To_do/>
    
  </>
  )
}

export default App
