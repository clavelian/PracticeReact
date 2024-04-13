import React, { useState, useEffect } from 'react';

function Greeting() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const getGreeting = () => {
      const date = new Date();
      const hour = date.getHours();

      if (hour < 12) {
        setGreeting('Good Morning');
      } else if (hour < 18) {
        setGreeting('Good Afternoon');
      } else {
        setGreeting('Good Evening');
      }
    };

    getGreeting(); // Call initially

    // Update greeting on time changes (optional)
    const intervalId = setInterval(getGreeting, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup function for interval
  }, []);

  return (
    <div>
      {greeting}
    </div>
  );
}

export default Greeting;