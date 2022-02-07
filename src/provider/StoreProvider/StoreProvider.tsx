import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Payment } from '../../type/Payment';
import { Price } from '../../type/Price';
import { StoreContext } from './context/StoreContext';
import * as StoreService from '../../service/StoreService';
import { Order } from '../../type/Order';
import { Balance } from '../../type/Balance';
import { reduceCoffeePayments } from '../../function/reduceCoffeePayments';
import { reduceCoffeeOrders } from '../../function/reduceCoffeeOrders';

export const StoreProvider: React.FC = ({ children }) => {
  const [isReady, setReady] = useState(false);
  const [coffeePrices, setCoffeePrices] = useState<Price[]>();
  const [coffeePayments, setCoffeePayments] = useState<Payment[]>();
  const [coffeeOrders, setCoffeeOrders] = useState<Order[]>();
  const [coffeeBalance, setCoffeeBalance] = useState<Balance[]>();

  const calculatePayment = useCallback(() => {
    if (!coffeePrices || !coffeePayments || !coffeeOrders) {
      return;
    }
    const paymentRecords = reduceCoffeePayments(coffeePayments);
    const orderRecords = reduceCoffeeOrders(coffeeOrders, coffeePrices);
    const balance: Balance[] = [];
    for (let user in orderRecords) {
      const orders = orderRecords[user].reduce(
        (acc, { price }) => acc + price,
        0
      );
      const paymentByUser = paymentRecords[user];
      balance.push({
        user,
        orders,
        payment: paymentByUser,
        balance: paymentByUser - orders,
      });
    }
    setCoffeeBalance(balance);
  }, [coffeeOrders, coffeePayments, coffeePrices]);

  const getStoreDetails = useCallback(async () => {
    const prices = await StoreService.getPrices();
    setCoffeePrices(prices);
    const payments = await StoreService.getPayments();
    setCoffeePayments(payments);
    const orders = await StoreService.getOrders();
    setCoffeeOrders(orders);
  }, []);

  /**
   * init Store provider to fetch all details
   */
  useEffect(() => {
    getStoreDetails().then(() => setReady(true));
  }, [getStoreDetails]);

  /**
   * calculate due payment after all details are available
   */
  useEffect(() => {
    if (isReady) {
      calculatePayment();
    }
  }, [calculatePayment, isReady]);

  const profileContext = React.useMemo(
    () => ({
      coffeePrices,
      coffeePayments,
      coffeeOrders,
      coffeeBalance,
    }),
    [coffeePrices, coffeePayments, coffeeOrders, coffeeBalance]
  );

  return (
    <StoreContext.Provider value={profileContext}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
