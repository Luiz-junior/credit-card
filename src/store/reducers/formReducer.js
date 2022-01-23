import * as TYPE from "store/actions/types";

const initialState = {
  cardNumber: "",
  cardName: "FULL NAME",
  month: "",
  year: "",
  cvv: "",
  flipped: false,
};

export function formReducer(state = initialState, action) {
  const { cardNumber, cardName, month, year, cvv, flipped } = action;

  switch (action.type) {
    case TYPE.CHANGE_CARD_NUMBER:
      return { ...state, cardNumber };
    case TYPE.CHANGE_CARD_NAME:
      return { ...state, cardName };
    case TYPE.CHANGE_CARD_MONTH:
      return { ...state, month };
    case TYPE.CHANGE_CARD_YEAR:
      return { ...state, year };
    case TYPE.CHANGE_CARD_CVV:
      return { ...state, cvv };
    case TYPE.FLIP_CREDIT_CARD:
      return { ...state, flipped };
    default:
      return state;
  }
}
