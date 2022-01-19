import * as TYPE from "../actions/types";

const initialState = {
  cardNumber: "#### #### #### ####",
  cardName: "",
  month: "",
  year: "",
  cvv: 0,
};

export function formReducer(state = initialState, action) {
  const { cardNumber, cardName, month, year, cvv } = action;

  switch (action.type) {
    /*     case TYPE.GET_CREDIT_CARD_INFO:
      return { ...state, cardName, cardNumber, month, year, cvv }; */
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
    default:
      return state;
  }
}
