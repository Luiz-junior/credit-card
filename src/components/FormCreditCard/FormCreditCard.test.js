import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";

import * as reactRedux from "react-redux";
import configureStore from "redux-mock-store";

import FormCreditCard from "./FormCreditCard";

const initialState = {
  cardNumber: "4654 1649 7946 4849",
  cardName: "FULL NAME",
  month: "",
  year: "",
  cvv: "",
  flipped: false,
};

const mockUseDispatch = jest.spyOn(reactRedux, "useDispatch");
const mockAlert = jest.spyOn(window, "alert").mockImplementation(() => {});

beforeEach(() => {
  let mockstore = configureStore();
  let store = mockstore(initialState);

  render(
    <reactRedux.Provider store={store}>
      <FormCreditCard />
    </reactRedux.Provider>
  );
});

describe("FormCreditCard Component", () => {
  test("Should render cardNumber label and input", () => {
    const label = screen.getByLabelText("card-number");
    const input = screen.getByTestId("card-number");

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("Should change value of cardNumber", () => {
    const input = screen.getByTestId("card-number");
    expect(
      fireEvent.change(
        input,
        mockUseDispatch({ target: { value: "1455 8469 4494 0494" } })
      )
    ).toBeTruthy();
  });

  test("Should render cardName label and input", () => {
    const label = screen.getByLabelText("card-name");
    const input = screen.getByTestId("card-number");

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("Should change value of cardName", () => {
    const input = screen.getByTestId("card-name");

    expect(
      fireEvent.change(
        input,
        mockUseDispatch({ target: { value: "Test Name" } })
      )
    ).toBeTruthy();
  });

  test("Should click submit button", () => {
    const button = screen.getByRole("button", { name: "Submit" });

    expect(fireEvent.click(button, mockUseDispatch(mockAlert()))).toBeTruthy();
  });
});
