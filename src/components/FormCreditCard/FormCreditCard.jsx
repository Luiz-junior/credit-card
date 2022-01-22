import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./FormCreditCard.scss";
import { months, years, onlyNumbers } from "../../utils/common";
import {
  changeCardNumber,
  changeCardName,
  changeMonth,
  changeYear,
  changeCVV,
  onFlipCreditCard,
} from "../../store/actions/formAction";

const FormCreditCard = () => {
  const dispatch = useDispatch();

  const { cardNumber, cardName, month, year, cvv } = useSelector(
    (state) => state.formReducer
  );

  const handleSubmit = () => {
    alert(`Card Number: ${cardNumber} 
        \nCard Name: ${cardName}
        \nExpiration Date: ${month} - ${year}
        \nCVV: ${cvv}
        `);
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
            name="cardNumber"
            value={cardNumber.replace(/\d{4}(?=.)/g, "$& ")}
            className="card-input"
            onChange={(e) => {
              dispatch(changeCardNumber(onlyNumbers(e.target.value)));
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
              dispatch(changeCardName(v.target.value));
            }}
            maxLength={25}
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
              onChange={(v) => dispatch(changeYear(v.target.value))}
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
              onChange={(v) => dispatch(changeCVV(onlyNumbers(v.target.value)))}
              className="card-input"
              id="cvv-input"
              onFocus={() => dispatch(onFlipCreditCard(true))}
              onBlur={() => dispatch(onFlipCreditCard(false))}
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
