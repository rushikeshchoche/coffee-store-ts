import axios from 'axios';
import { getEnvironment } from '../helper/config';
import { Order } from '../type/Order';
import { Payment } from '../type/Payment';
import { Price } from '../type/Price';

export const getPrices = async (): Promise<Price[]> => {
  const response = await axios.get(`${getEnvironment.apiBaseUrl}/prices`);
  return response.data;
};

export const getPayments = async (): Promise<Payment[]> => {
  const response = await axios.get(`${getEnvironment.apiBaseUrl}/payments`);
  return response.data;
};

export const getOrders = async (): Promise<Order[]> => {
  const response = await axios.get(`${getEnvironment.apiBaseUrl}/orders`);
  return response.data;
};
