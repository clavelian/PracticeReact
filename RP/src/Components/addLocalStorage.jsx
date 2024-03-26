import { useState } from 'react';
import MyComponent from './MyComponent'

  const AddDataItem = () => {
  const [data, setData] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    localStorage.setItem('myData', data); // Store data in localStorage
    setData(''); // Clear the input field after submission
  };
  

  return (
    <>
    <MyComponent />
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Enter data to add..."
      />
      <button type="submit">Add Data</button>
    </form>
    </>
  );
}


export default AddDataItem;