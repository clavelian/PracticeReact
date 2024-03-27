import { useState } from 'react';
import MyComponent from '../MyComponent'

  const AddDataItem = () => {
  const [data, setData] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('myData', data); 
    setData('')
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