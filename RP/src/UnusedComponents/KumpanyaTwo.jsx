// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Profile from "../Components/Profile";
import Header from "../Components/Header";

const KumpanyaTwo = () => {
  const [companyName, setCompanyName] = useState("Company A");
  const handleCompanyNameChange = (newCompanyName) => {
    setCompanyName(newCompanyName);
  };
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
export default KumpanyaTwo;
