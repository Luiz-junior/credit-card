import React from "react";
import FormCreditCard from "components/FormCreditCard/FormCreditCard";
import CreditCard from "components/CreditCard/CreditCard";

import "./home.scss";

const Home = () => {
  return (
    <div className="container">
      <CreditCard />
      <FormCreditCard />
    </div>
  );
};

export default Home;
