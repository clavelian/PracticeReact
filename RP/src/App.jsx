// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react'
import './App.css'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
import CounterCounter from './Components/CounterCounter.jsx'
import Counter from './Components/Counter.jsx'
import Student from './UnusedComponents/Student.jsx'
import Kumpanya from './Components/Kumpanya.jsx'
import AddDataItem from './Components/addLocalStorage.jsx'
import DisplayData from './Components/DisplayLocalStorage.jsx'
// import MyComponent from './Components/MyComponent.jsx'
// import OtherComponent from './Components/OtherComponent.jsx'
// import Demo from './Components/UseLocalStorage.jsx'
// import DigitalClock from './Components/DigitalClock.jsx'
// import Greeting from './Components/Greeting.jsx'

function App() {
  const [count, setCount] = useState(0)
  const handleAdd = () => setCount(count + 1)
  const handleMulti = () => setCount(count * 2)
  const handleSub = () => setCount((count) > 0 ? count - 1 : count)
  const handleDiv = () => setCount(count > 0 ? Math.ceil(count / 2) : count)
  const handleReset = () => setCount(0)
                          
                          setCount((count) > 0 ? count - 1 : count)


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
        {/* <br/>
        <br/> */}
        {/* <Student name="Spongebob" age={30} isStudent={true}  /> */}
        {/* <br/>
        <br/> */}
        {/* <MyComponent /> */}

        {/* <h1>This text must be replaced after the Company Name has been changed</h1> */}
        
        {/* <Kumpanya />

        <AddDataItem />
        <DisplayData /> */}
        {/* <MyComponent /> */}
        {/* <OtherComponent  /> */}
        {/* <Demo/>
        <br />
        <br />
        <br />
        <DigitalClock/>
        <Greeting /> */}
    </>
  )
}

export default App
