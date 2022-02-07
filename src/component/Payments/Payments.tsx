import React from 'react';
import { useStore } from '../../provider/StoreProvider/StoreProvider';

export const Payments: React.FC = () => {
  const { coffeeBalance } = useStore();
  return (
    <div className='home'>
      <h3>Balance in Euros</h3>
      <div className='order orderTitle'>
        <div>User</div>
        <div>Total amout</div>
        <div>Payment received</div>
        <div>Due balance</div>
      </div>
      <div>
        {coffeeBalance?.map((cb, index) => (
          <div className='order orderDetails' key={index}>
            <div>{cb.user}</div>
            <div>{cb.orders}</div>
            <div>{cb.payment}</div>
            <div>{cb.balance}</div>
          </div>
        ))}
      </div>
    </div>
  );
}