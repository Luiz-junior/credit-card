import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  CSSTransition,
  TransitionGroup,
  SwitchTransition,
} from "react-transition-group";

import chip from "../../assets/issues/chip.png";
import visa from "../../assets/issues/visa.png";
import "./CreditCard.scss";

import { maskCardNumber } from "../../utils/common";

function CreditCard() {
  const { cardNumber, cardName, month, year, cvv } = useSelector(
    (state) => state.formReducer
  );

  {
    console.log("numero", cardNumber);
  }

  return (
    <div className="credit-card-container">
      <section className="section-front-card">
        <div className="section-header-card">
          <img src={chip} className="chip-img" alt="Imagem do chip do cartão" />
          {/* criar logica pra mudar a bandeira do cartão */}
          <img
            src={`'../../assets/issues/amex.png'`}
            className="flag-img"
            alt="Imagem da bandeira do cartão"
          />
        </div>
        <div className="section-card-number">
          <TransitionGroup className="slide-fade-up" component="div">
            {cardNumber !== "" ? (
              maskCardNumber(cardNumber).map((value, i) => {
                return (
                  <CSSTransition
                    classNames="slide-fade-up"
                    timeout={250}
                    key={i}
                  >
                    <div className="card-item__numberItem">{value}</div>
                  </CSSTransition>
                );
              })
            ) : (
              <CSSTransition classNames="slide-fade-up" timeout={250}>
                <div className="card-item__numberItem">#</div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
        <div></div>
      </section>
      <section className="setion-back-card">back card</section>
    </div>
  );
}

export default CreditCard;
