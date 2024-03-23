// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Profile from "./Profile";
import Header from "./Header";

const Kumpanya = () => {
  const [companyName, setCompanyName] = useState("Company A");
  const handleCompanyNameChange = (newCompanyName) => {
    setCompanyName(newCompanyName);
  };
  
  // window.localStorage.setItem('company', JSON.stringify('myData'));
  // window.dispatchEvent(new Event('storage'));

  return (
    <div>
      <Header companyName={companyName} />
      <Profile companyName={companyName} />
      <button onClick={() => handleCompanyNameChange("Company B")}>
        Change Company Name
      </button>
    </div>
  );
};
export default Kumpanya;
