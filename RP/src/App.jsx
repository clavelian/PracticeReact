import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import CounterCounter from './Components/CounterCounter.jsx'
import Counter from './Components/Counter.jsx'
// import Student from './Components/StudentProps,jsx'
import Student from './Components/Student.jsx'

function App() {
  const [count, setCount] = useState(0)
  const handleAdd = () => setCount(count + 1)
  const handleMulti = () => setCount(count * 2)
  const handleSub = () => setCount((count) > 0 ? count - 1 : count)
  const handleDiv = () => setCount(count > 0 ? Math.ceil(count / 2) : count)
  const handleReset = () => setCount(0)
                          
                          // setCount((count) > 0 ? count - 1 : count)
  return (
    <>

        <button onClick={(handleSub)}>-</button>
          count is {count}
        <button onClick={(handleMulti)}>x</button>
        <button onClick={(handleAdd)}>+</button>
        <button onClick={(handleDiv)}>/</button>
        <button onClick={(handleReset)}>RESET</button>
        <div>
        <br/>
        <CounterCounter/>
        </div>
        <Counter/>
        <br/>
        <br/>
        <Student name="Spongebob" age={30} isStudent={true}  />

    </>
  )
}

export default App
