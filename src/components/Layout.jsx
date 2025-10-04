// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* This renders the current page */}
    </>
  );
};

export default Layout;
