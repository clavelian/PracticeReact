// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function MyComponent() {
  const [inputText, setInputText] = useState(''); // State to store input value

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  function OtherComponent(props) {
    // eslint-disable-next-line react/prop-types
    const { inputText } = props;
  
    // You can use the received inputText prop here
    return (
      <div>
        <p>Received Text: {inputText}</p>
      </div>
    );
  }

  // ... rest of your component

  return (
    <div>
      <input type="text" value={inputText} onChange={handleChange} />
      {/* You can access the input value as a prop here */}
      <p>Entered Text: {inputText}</p>  {/* Displaying the input for reference */}
      {/* You can pass the inputText as a prop to another component here */}
      <OtherComponent inputText={inputText} />
    </div>
  );
}

export default MyComponent;
