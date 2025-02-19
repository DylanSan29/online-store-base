import React from "react";
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <Navbar />
      <h1 className="text-xl font-bold">Mi Tienda Online</h1>
    </header>
  );
};

export default Header;
