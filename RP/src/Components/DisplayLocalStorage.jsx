import { useEffect, useState } from "react";

const DisplayData = () => {
  const [storedData, setStoredData] = useState('');

  useEffect(() => {
    // Initial data fetch from localStorage
    const data = localStorage.getItem('myData');
    setStoredData(data);
  },[storedData]); 

  return (
    <div>
      {storedData && <p>Stored Data: {storedData}</p>}
    </div>
  );
};

export default DisplayData;
