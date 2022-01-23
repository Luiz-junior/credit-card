import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { months, years, onlyNumbers } from "utils/common";
import {
  changeCardNumber,
  changeCardName,
  changeMonth,
  changeYear,
  changeCVV,
  onFlipCreditCard,
} from "store/actions/formAction";

import "./FormCreditCard.scss";

const FormCreditCard = () => {
  const dispatch = useDispatch();

  const { cardNumber, cardName, month, year, cvv } = useSelector(
    (state) => state.formReducer || {}
  );

  const handleSubmit = () => {
    setTimeout(() => {
      alert(`Card Number: ${cardNumber} 
      \nCard Name: ${cardName}
      \nExpiration Date: ${month} - ${year}
      \nCVV: ${cvv}
      `);
    }, 500);
  };

  return (
    <div className="form-container">
      <div className="card-info">
        <div className="input-box">
          <label
            htmlFor="cardNumber"
            className="card-input-label"
            aria-label="card-number"
          >
            Card Number
          </label>
          <input
            type="text"
            name="cardNumber"
            value={cardNumber && cardNumber.replace(/\d{4}(?=.)/g, "$& ")}
            className="card-input"
            onChange={(e) => {
              dispatch(changeCardNumber(onlyNumbers(e.target.value)));
            }}
            maxLength="19"
            data-testid="card-number"
          />
        </div>

        <div className="input-box">
          <label
            htmlFor="card-name"
            className="card-input-label"
            aria-label="card-name"
          >
            Card Name
          </label>
          <input
            type="text"
            name="card-name"
            value={cardName}
            className="card-input"
            onChange={(v) => {
              dispatch(changeCardName(v.target.value));
            }}
            maxLength={25}
            data-testid="card-name"
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
              onChange={(v) => {
                dispatch(changeMonth(v.target.value));
              }}
            >
              {months.map((month, i) => (
                <option key={i} value={month}>
                  {i === 0 ? "Month" : month}
                </option>
              ))}
            </select>
          </div>

          <div className="input-box">
            <select
              name="years"
              id="years"
              className="card-input"
              onChange={(v) => dispatch(changeYear(v.target.value))}
            >
              {years.map((year, i) => (
                <option key={i} value={year}>
                  {i === 0 ? "Year" : year}
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
              onChange={(v) => dispatch(changeCVV(onlyNumbers(v.target.value)))}
              className="card-input"
              id="cvv-input"
              onFocus={() => dispatch(onFlipCreditCard(true))}
              onBlur={() => dispatch(onFlipCreditCard(false))}
              maxLength={3}
            />
          </div>
        </div>
        <button
          name="submit-button"
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
