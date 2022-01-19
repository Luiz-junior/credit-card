import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./FormCreditCard.scss";
import { months, years } from "../../utils/common";
import {
  getCreditCardInfo,
  changeCardNumber,
  changeCardName,
  changeMonth,
  changeYear,
  changeCVV,
} from "../../store/actions/formAction";

const FormCreditCard = () => {
  const dispatch = useDispatch();

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [monthSelected, setMonthSelected] = useState("");
  const [yearSelected, setYearSelected] = useState("");
  const [cvv, setCvv] = useState(0);

  const handleSubmit = () => {
    /* const cardInfo = {
      cardNumber,
      cardName,
      monthSelected,
      yearSelected,
      cvv,
    }; */
    /*  dispatch(getCreditCardInfo(cardInfo)); */
    /* alert(`Card Number: ${cardNumber} 
        \nCard Name: ${cardName}
        \nExpiration Date: ${monthSelected} - ${yearSelected}
        \nCVV: ${cvv}
        `); */
  };

  return (
    <div className="form-container">
      <div className="card-info">
        <div className="input-box">
          <label htmlFor="card-number" className="card-input-label">
            Card Number
          </label>
          <input
            type="text"
            name="card-number"
            value={cardNumber}
            className="card-input"
            onChange={(v) => {
              setCardNumber(v.target.value);
              dispatch(changeCardNumber(v.target.value));
            }}
            maxLength="19"
          />
        </div>

        <div className="input-box">
          <label htmlFor="card-name" className="card-input-label">
            Card Name
          </label>
          <input
            type="text"
            name="card-name"
            value={cardName}
            className="card-input"
            onChange={(v) => {
              setCardName(v.target.value);
              dispatch(changeCardName(v.target.value));
            }}
          />
        </div>

        <div className="card-details">
          <div className="input-box">
            <label htmlFor="months" className="card-input-label">
              Expiration Date:
            </label>

            <select
              name="months"
              id="months"
              className="card-input"
              onChange={(v) => setMonthSelected(v.target.value)}
            >
              <option disabled selected>
                Month
              </option>

              {months.map((month, i) => (
                <option key={i} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          <div className="input-box">
            <select
              name="years"
              id="years"
              className="card-input"
              onChange={(v) => setYearSelected(v.target.value)}
            >
              <option disabled selected>
                Year
              </option>

              {years.map((year, i) => (
                <option key={i} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="input-box">
            <label htmlFor="cvv" className="card-input-label">
              CVV
            </label>
            <input
              name="cvv"
              type="text"
              value={cvv}
              onChange={(v) => setCvv(v.target.value)}
              className="card-input"
              id="cvv-input"
            />
          </div>
        </div>
        <button
          className="submit-button"
          type="submit"
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormCreditCard;
