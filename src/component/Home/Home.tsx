import React from 'react';
import { useStore } from '../../provider/StoreProvider/StoreProvider';
import './Home.css';

export const Home: React.FC = () => {
  const { coffeeOrders } = useStore();
  return (
    <div className='home'>
      <h3>Orders</h3>
      <div className='order orderTitle'>
        <div>No.</div>
        <div>User</div>
        <div>Drink</div>
        <div>Size</div>
      </div>
      <div>
        {coffeeOrders?.map((order, index) => (
          <div className='order orderDetails' key={index}>
            <div>{index + 1}</div>
            <div>{order.user}</div>
            <div>{order.drink}</div>
            <div>{order.size}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
