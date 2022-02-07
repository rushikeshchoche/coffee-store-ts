import React from "react";
import { Price } from "../../../type/Price";
import { Payment } from "../../../type/Payment";
import { Order } from "../../../type/Order";
import { Balance } from "../../../type/Balance";

export type StoreContextType = {
  coffeePrices: Price[] | undefined;
  coffeePayments: Payment[] | undefined;
  coffeeOrders: Order[] | undefined;
  coffeeBalance: Balance[] | undefined;
};

export const StoreContext = React.createContext<StoreContextType>({
  coffeePrices: undefined,
  coffeePayments: undefined,
  coffeeOrders: undefined,
  coffeeBalance: undefined,
});
