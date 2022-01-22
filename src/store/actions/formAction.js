import * as TYPE from "./types";

export const getCreditCardInfo = (value) => {
  return (dispatch) => {
    dispatch({ type: TYPE.GET_CREDIT_CARD_INFO, creditCardInfo: value });
  };
};

export const changeCardNumber = (cardNumber) => {
  return (dispatch) => {
    dispatch({ type: TYPE.CHANGE_CARD_NUMBER, cardNumber });
  };
};

export const changeCardName = (cardName) => {
  return (dispatch) => {
    dispatch({ type: TYPE.CHANGE_CARD_NAME, cardName });
  };
};

export const changeMonth = (month) => {
  return (dispatch) => {
    dispatch({ type: TYPE.CHANGE_CARD_MONTH, month });
  };
};

export const changeYear = (year) => {
  return (dispatch) => {
    dispatch({ type: TYPE.CHANGE_CARD_YEAR, year });
  };
};

export const changeCVV = (cvv) => {
  return (dispatch) => {
    dispatch({ type: TYPE.CHANGE_CARD_CVV, cvv });
  };
};

export const onFlipCreditCard = (flipped) => {
  return (dispatch) => {
    dispatch({ type: TYPE.FLIP_CREDIT_CARD, flipped });
  };
};
