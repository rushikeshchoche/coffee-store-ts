import { Payment } from "../type/Payment";

export const reduceCoffeePayments = (payments: Payment[]) => {
  return payments.reduce<Record<string, number>>((preVal, curVal) => {
    const keyExists = Object.keys(preVal).some((key) => key === curVal.user);
    if (keyExists) {
      preVal[curVal.user] += curVal.amount;
    } else {
      preVal[curVal.user] = curVal.amount;
    }
    return preVal;
  }, {});
};
