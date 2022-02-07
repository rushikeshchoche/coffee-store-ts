import { Payment } from "../type/Payment";
import { reduceCoffeePayments } from "./reduceCoffeePayments";

describe("Reduce coffee payment", () => {
  test("should return reduced payment", () => {
    const payments = [
      { user: "zoey", amount: 9 },
      { user: "nick", amount: 47 },
      { user: "zoey", amount: 10 },
      { user: "nick", amount: 18 },
    ];
    const reducedPayment = reduceCoffeePayments(payments);
    expect(reducedPayment).toEqual({
      zoey: 19,
      nick: 65,
    });
  });

  test("should return correct payment", () => {
    const payments = [
      { user: "joye", amount: 52 },
      { user: "leo", amount: -4 },
      { user: "leo", amount: 12 },
    ];
    const reducedPayment = reduceCoffeePayments(payments);
    expect(reducedPayment).toEqual({
      joye: 52,
      leo: 8,
    });
  });

  test("should return empty payment", () => {
    const payments: Payment[] = [];
    const reducedPayment = reduceCoffeePayments(payments);
    expect(reducedPayment).toEqual({});
  });
});
