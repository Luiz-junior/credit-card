import React from "react";

import "./home.scss";

import FormCreditCard from "../../components/FormCreditCard/FormCreditCard";
import CreditCard from "../../components/CreditCard/CreditCard";

const Home = () => {
  return (
    <div className="container">
      <CreditCard />
      <FormCreditCard />
    </div>
  );
};

export default Home;
