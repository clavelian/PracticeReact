import { useState } from "react";
import UUseLocalStorage from "./UUselocalStorage";


const Demo = () => {
    const [value, setValue] = useState('')
    const {setItem} = UUseLocalStorage('value')

return (  
    <>
        <h1>useLocalStorage</h1>
        <input 
            type="text"
            value={value} 
            onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => setItem}>Set</button>
        <button>Get</button>
        <button>Remove</button>
    </>
    );
}
 
export default Demo;