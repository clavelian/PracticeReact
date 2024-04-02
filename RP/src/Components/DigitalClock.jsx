import React, {useState,useEffect, useCallback} from "react";

const DigitalClock = () => {

    const [time,setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    },[])

    const formatTime = () =>{
        let hours = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        const meridiem = hours >= 12 ? "PM" : "AM"
    }

    return (  
        <>
            <div className="clock-container">
                <span>00:00:00</span>
            </div>    
        </>
    );
}
 
export default DigitalClock;