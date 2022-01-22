import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import {
  CSSTransition,
  TransitionGroup,
  SwitchTransition,
} from "react-transition-group";

import { maskCardNumber, cardType } from "../../utils/common";
import chip from "../../assets/issues/chip.png";
import "./CreditCard.scss";

const CreditCard = ({
  currentFocusedElm,

  onCardElementClick,
}) => {
  const { cardNumber, cardName, month, year, cvv, flipped } = useSelector(
    (state) => state.formReducer
  );

  const useCardType = useMemo(() => {
    return cardType(cardNumber);
  }, [cardNumber]);

  const formatValue = (value) => {
    let newValue = value.match(/.{1,4}/g);

    return newValue.join(" ");
  };

  return (
    <div className={flipped ? "credit-card-flipped" : "credit-card-no-flipped"}>
      <section className="section-front-card">
        <div className="section-header-card">
          <img src={chip} className="chip-img" alt="Imagem do chip do cartão" />
          <img
            src={require(`../../assets/issues/${useCardType}.png`)}
            className="flag-img"
            alt="Imagem da bandeira do cartão"
          />
        </div>
        <div
          className="section-card-number"
          onClick={() => onCardElementClick("cardNumber")}
        >
          <TransitionGroup className="slide-fade-up" component="div">
            {cardNumber !== "" ? (
              maskCardNumber(cardNumber).map((value, i) => {
                return (
                  <CSSTransition
                    classNames="slide-fade-up"
                    timeout={250}
                    key={i}
                  >
                    <div className="card-number-value">
                      {formatValue(value)}
                    </div>
                  </CSSTransition>
                );
              })
            ) : (
              <CSSTransition classNames="slide-fade-up" timeout={250}>
                <div className="card-number-value">#</div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
        <footer className="footer-card">
          <div className="card-holder-container">
            <label className="holder-label">Card Holder</label>
            <div className="card-name-text">
              <TransitionGroup component="div" className="slide-fade-up-2">
                {cardName === "FULL NAME" ? (
                  <CSSTransition classNames="slide-fade-up-2" timeout={250}>
                    <div>FULL NAME</div>
                  </CSSTransition>
                ) : (
                  cardName.split("").map((value, index) => (
                    <CSSTransition
                      timeout={250}
                      classNames="slide-fade-right"
                      key={index}
                    >
                      <span className="name-value">{value}</span>
                    </CSSTransition>
                  ))
                )}
              </TransitionGroup>
            </div>
          </div>
          <div className="expires-container">
            <div>
              <label className="expires-label">Expires</label>
            </div>
            <label className="month-text">
              <SwitchTransition in-out>
                <CSSTransition
                  classNames="slide-fade-up"
                  timeout={200}
                  key={month}
                >
                  <span>{!month ? "MM" : month} </span>
                </CSSTransition>
              </SwitchTransition>
            </label>
            /
            <label htmlFor="cardYear" className="label-year">
              <SwitchTransition out-in>
                <CSSTransition
                  classNames="slide-fade-up"
                  timeout={250}
                  key={year}
                >
                  <span>
                    &nbsp; {!year ? "YY" : year.toString().substr(-2)}
                  </span>
                </CSSTransition>
              </SwitchTransition>
            </label>
          </div>
        </footer>
      </section>
      <section className="section-back-card">
        <div className="first-line" />

        <div className="section-cvv">
          <div className="text-cvv">CVV</div>
          <div className="value-cvv">
            <TransitionGroup>
              {cvv.split("").map((value, index) => (
                <CSSTransition
                  classNames="zoom-in-out"
                  key={index}
                  timeout={250}
                >
                  <span>*</span>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
          <div className="section-card-type">
            <img
              alt="card-type"
              src={require("../../assets/issues/discover.png")}
              className="card-type-img"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreditCard;
