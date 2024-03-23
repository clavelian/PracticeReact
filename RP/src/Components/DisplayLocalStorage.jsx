import { useEffect, useState } from "react";


 const DisplayData = () => {
     const [storedData, setStoredData] = useState('');
  
     useEffect(() => {
       const data = localStorage.getItem('myData');
       setStoredData(data);
     }, []);  //Empty dependency array ensures useEffect runs only once on component mount

    return(
        <div>
        {/* ... other elements */}
        {storedData && <p>Stored Data: {storedData}</p>}
      </div>
    )
      //... rest of your component code
   }



   export default DisplayData