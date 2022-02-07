import React from 'react';
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import './CustomLink.css';

export const CustomLink: React.FC<LinkProps> = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      style={{ backgroundColor: match ? '#51dfc1' : '#01d3a7' }}
      className='customLink'
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}
