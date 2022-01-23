import React from "react";
import { screen, render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import * as reactRedux from "react-redux";

import CreditCard from "./CreditCard";

const initialState = {
  cardNumber: "4654 1649 7946 4849",
  cardName: "FULL NAME",
  month: "",
  year: "",
  cvv: "",
  flipped: false,
};

beforeEach(() => {
  let mockstore = configureStore();
  let store = mockstore(initialState);

  render(
    <reactRedux.Provider store={store}>
      <CreditCard />
    </reactRedux.Provider>
  );
});

describe("CreditCard Component", () => {
  test("Should render chip image and flag image", () => {
    const chip = screen.getByAltText("Imagem do chip do cartão");
    const flag = screen.getByAltText("Imagem da bandeira do cartão");

    expect(chip).toBeInTheDocument();
    expect(flag).toBeInTheDocument();
  });

  test("Should render cardNumber section and section slideFadeUp", () => {
    const sectionCardNumber = screen.getByLabelText("section-card-number");

    expect(sectionCardNumber).toBeInTheDocument();
  });

  test("Should render footerCard section, card holder and section slide-fade-up-2", () => {
    const footerCard = screen.getByLabelText("footer-card");
    const cardHolder = screen.getByText(/Card Holder/i);
    const slideFadeUp2 = screen.getByLabelText(/slide-fade-up-2/i);

    expect(footerCard).toBeInTheDocument();
    expect(cardHolder).toBeInTheDocument();
    expect(slideFadeUp2).toBeInTheDocument();
  });

  test("Should render Expires, Month and Year", () => {
    const expires = screen.getByText(/Expires/i);
    const month = screen.getByText("MM");
    const year = screen.getByText("YY");

    expect(expires).toBeInTheDocument();
    expect(month).toBeInTheDocument();
    expect(year).toBeInTheDocument();
  });

  test("Should render back card", () => {
    const cvv = screen.getByText(/CVV/i);
    const valueCVV = screen.getByLabelText("value-cvv");
    const typeCard = screen.getByAltText(/Imagem do tipo de cartão/i);

    expect(cvv).toBeInTheDocument();
    expect(valueCVV).toBeInTheDocument();
    expect(typeCard).toBeInTheDocument();
  });
});
