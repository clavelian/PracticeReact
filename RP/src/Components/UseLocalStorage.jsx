import { useState } from "react";
import UUseLocalStorage from "./UUselocalStorage";


const Demo = () => {
    const [value, setValue] = useState('')
    const {setItem, getItem, removeItem} = UUseLocalStorage('value')

return (  
    <>
        <h1>useLocalStorage</h1>
        <input 
            type="text"
            value={value} 
            onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => setItem(value)}>Set</button>
        <button onClick={() => getItem}>Get</button>
        {value && <p>{value}</p>}
        <button onClick={removeItem}>Remove</button>
    </>
    );
}
 
export default Demo;