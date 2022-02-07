import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { StoreProvider, useStore } from './StoreProvider';
import * as StoreService from '../../service/StoreService';
import { reduceCoffeePayments } from '../../function/reduceCoffeePayments';
import { reduceCoffeeOrders } from '../../function/reduceCoffeeOrders';
import { Price } from '../../type/Price';
import { Payment } from '../../type/Payment';
import { Order } from '../../type/Order';
import { Balance } from '../../type/Balance';

jest.mock('../../service/StoreService');
jest.mock('../../function/reduceCoffeePayments');
jest.mock('../../function/reduceCoffeeOrders');

afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
});


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

const stubPayments: Payment[] = [
  { user: "zoey", amount: 9 },
  { user: "nick", amount: 47 },
  { user: "zoey", amount: 10 },
  { user: "nick", amount: 18 },
];

const stubReducedPayments = {
  zoey: 19,
  nick: 65,
};

const stubOrders: Order[] = [
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

const stubReducedOrders = {
  zoey: [
    {
      user: 'zoey',
      drink: 'supermochacrapucaramelcream',
      size: 'huge',
      price: 5.5
    },
    { user: 'zoey', drink: 'short espresso', size: 'small', price: 3 },
    { user: 'zoey', drink: 'short espresso', size: 'small', price: 3 }
  ],
  nick: [
    { user: 'nick', drink: 'latte', size: 'small', price: 3.5 },
    { user: 'nick', drink: 'short espresso', size: 'small', price: 3 }
  ]
};

const stubBalance: Balance[] = [
  { user: 'zoey', orders: 11.5, payment: 19, balance: 7.5 },
  { user: 'nick', orders: 6.5, payment: 65, balance: 58.5 }
];

describe('init', () => {
    test('store provider', async () => {
        // setup
        const mockGetPrices = (StoreService.getPrices as jest.Mock).mockResolvedValue(stubPrices);
        const mockGetPayments = (StoreService.getPayments as jest.Mock).mockResolvedValue(stubPayments);
        const mockGetOrders = (StoreService.getOrders as jest.Mock).mockResolvedValue(stubOrders);
        const mockReducedPayments = (reduceCoffeePayments as jest.Mock).mockReturnValue(stubReducedPayments);
        const mockReducedOrders = (reduceCoffeeOrders as jest.Mock).mockReturnValue(stubReducedOrders);
        const { result, waitForNextUpdate, rerender } = renderHook(() => useStore(), {
            wrapper: ({ children }) => <StoreProvider>{children}</StoreProvider>,
        });

        // test
        expect(result.current.coffeePrices).toBeUndefined();
        expect(result.current.coffeeOrders).toBeUndefined();
        expect(result.current.coffeePayments).toBeUndefined();
        expect(result.current.coffeePayments).toBeUndefined();
        rerender();
        await waitForNextUpdate();
        expect(mockGetPrices).toBeCalledTimes(1);
        expect(mockGetPayments).toBeCalledTimes(1);
        expect(mockGetOrders).toBeCalledTimes(1);
        expect(mockReducedPayments).toBeCalledTimes(1);
        expect(mockReducedOrders).toBeCalledTimes(1);
        expect(result.current.coffeePrices).toEqual(stubPrices);
        expect(result.current.coffeePayments).toEqual(stubPayments);
        expect(result.current.coffeeOrders).toEqual(stubOrders);
        expect(result.current.coffeeBalance).toEqual(stubBalance);
    });
});
