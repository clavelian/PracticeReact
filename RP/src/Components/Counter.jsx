import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)
    const handleReset = () => setCount(0)
  
    return (
      <>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>+</button>
            count is {count}
          <button onClick={handleReset}>Reset</button>
        </div>
      </>
    )
  }
  export default Counter