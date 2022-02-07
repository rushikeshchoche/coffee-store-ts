import React from 'react';
import { useStore } from '../../provider/StoreProvider/StoreProvider';
import {DrinkPrice} from '../../type/Price';
import './Price.css';

export const Prices: React.FC = () => {
  const { coffeePrices } = useStore();

  const renderPrices = (drinkPrice: DrinkPrice) => {
    return Object.entries(drinkPrice).map(([key, value], index) => (
      <div key={index} className='itemPrice'>
        {`${key} - `}&euro;{`${value}`}
      </div>)
    );
  }
  return (
    <div>
      <h3>Coffee Prices</h3>
      <div>
        {coffeePrices?.map((coffee, index) => (
          <div className='price priceDetails' key={index}>
            <div>{coffee.drink_name}</div>
            <div className='coffeePrice'>{renderPrices(coffee.prices)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
