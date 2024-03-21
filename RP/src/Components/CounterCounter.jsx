import { useState } from "react";

const CounterCounter = () => {

    const [CounterC,setCounterC] = useState(0)
    const handleAddition = () => setCounterC(CounterC + 1 )



    return (  
        <>
        <button onClick={handleAddition}>Plus</button>
        {CounterC}
        </>
    );
}
 
export default CounterCounter;