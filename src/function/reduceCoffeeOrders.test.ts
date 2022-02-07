import { Order } from "../type/Order";
import { Price } from "../type/Price";
import { reduceCoffeeOrders } from "./reduceCoffeeOrders";

const stubPrices: Price[] = [
  { drink_name: "short espresso", prices: { small: 3.0 } },
  {
    drink_name: "latte",
    prices: { small: 3.5, medium: 4.0, large: 4.5 },
  },
  {
    drink_name: "flat white",
    prices: { small: 3.5, medium: 4.0, large: 4.5 },
  },
  { drink_name: "long black", prices: { small: 3.25, medium: 3.5 } },
  {
    drink_name: "mocha",
    prices: { small: 4.0, medium: 4.5, large: 5.0 },
  },
  {
    drink_name: "supermochacrapucaramelcream",
    prices: { large: 5.0, huge: 5.5, mega: 6.0, ultra: 7.0 },
  },
];

describe("Reduce coffee orders", () => {
  test("should return reduced order", () => {
    const orders = [
      {
        user: "zoey",
        drink: "supermochacrapucaramelcream",
        size: "huge",
      },
      {
        user: "zoey",
        drink: "short espresso",
        size: "small",
      },
      {
        user: "nick",
        drink: "latte",
        size: "small",
      },
      {
        user: "nick",
        drink: "short espresso",
        size: "small",
      },
      {
        user: "zoey",
        drink: "short espresso",
        size: "small",
      },
    ];
    const reducedOrders = reduceCoffeeOrders(orders, stubPrices);
    expect(reducedOrders).toEqual({
      zoey: [
        {
          user: "zoey",
          drink: "supermochacrapucaramelcream",
          size: "huge",
          price: 5.5,
        },
        { user: "zoey", drink: "short espresso", size: "small", price: 3 },
        { user: "zoey", drink: "short espresso", size: "small", price: 3 },
      ],
      nick: [
        { user: "nick", drink: "latte", size: "small", price: 3.5 },
        { user: "nick", drink: "short espresso", size: "small", price: 3 },
      ],
    });
  });

  test("should return empty order", () => {
    const orders: Order[] = [];
    const reducedOrders = reduceCoffeeOrders(orders, stubPrices);
    expect(reducedOrders).toEqual({});
  });
});
