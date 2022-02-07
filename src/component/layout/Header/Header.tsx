import React from 'react';
import { CustomLink } from '../CustomLink/CustomLink';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <div className='header'>
      <nav>
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='prices'>Prices</CustomLink>
        <CustomLink to='payments'>Payments</CustomLink>
      </nav>
    </div>
  );
}