import { Order } from "../type/Order";
import { Price } from "../type/Price";

export const reduceCoffeeOrders = (
  coffeeOrders: Order[],
  coffeePrices: Price[]
) => {
  return coffeeOrders.reduce<Record<string, (Order & { price: number })[]>>(
    (preVal, curVal) => {
      const { user, drink, size } = curVal;
      const drinkPricesBySize = coffeePrices.find(
        ({ drink_name }) => drink_name === drink
      )?.prices;
      let price = 0;
      if (drinkPricesBySize) {
        for (const [key, value] of Object.entries(drinkPricesBySize)) {
          if (key === size) {
            price = value;
          }
        }
      }
      preVal[user] = [...(preVal[user] || []), { user, drink, size, price }];
      return preVal;
    },
    {}
  );
};
