import { useEffect, useState } from "react";

const DisplayData = () => {
  const [storedData, setStoredData] = useState('');

  useEffect(() => {
    // Initial data fetch from localStorage
    const data = localStorage.getItem('myData');
    setStoredData(data);

    // Add event listener for storage changes
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);

      window.dispatchEvent(new Event('storage'));
    };
  }, []); // Empty dependency array ensures setup runs only once

  const handleStorageChange = (event) => {
    // Check if the changed storage key is 'myData'
    if (event.key === 'myData') {
      const newData = event.newValue;
      setStoredData(newData);
    }
  };

  return (
    <div>
      {/* ... other elements */}
      {storedData && <p>Stored Data: {storedData}</p>}
    </div>
  );
};

export default DisplayData;
