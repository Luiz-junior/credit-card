const currentYear = new Date().getFullYear();

export const months = Array.from({ length: 12 }, (x, i) => {
  const month = i + 1;
  return month <= 9 ? "0" + month : month;
});

export const years = Array.from({ length: 9 }, (_x, i) => currentYear + i);

export const maskCardNumber = (cardNumber) => {
  if (cardNumber) {
    let cardNumberArr = cardNumber.split("");

    cardNumberArr.forEach((value, index) => {
      if (index > 4 && index < 14) {
        if (cardNumberArr[index] !== " ") {
          cardNumberArr[index] = "*";
        }
      }
    });

    return cardNumberArr;
  }

  return [];
};

const CARDS = {
  visa: "^4",
  amex: "^(34|37)",
  mastercard: "^5[1-5]",
  discover: "^6011",
  unionpay: "^62",
  troy: "^9792",
  diners: "^(30[0-5]|36)",
};

export const cardType = (cardNumber) => {
  if (cardNumber) {
    const number = cardNumber;
    let regex;
    for (const [card, pattern] of Object.entries(CARDS)) {
      regex = new RegExp(pattern);
      if (number.match(regex) != null) {
        return card;
      }
    }
  }

  return "visa";
};

export const onlyNumbers = (value) =>
  value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
