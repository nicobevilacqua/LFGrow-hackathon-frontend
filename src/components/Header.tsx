import React from 'react';
import { signInWallet } from '../scripts/ethers-service';
import { login } from '../scripts/login-users';

const Header: React.FC = () => {
  const handleLogin = async () => {
    await login();
  };

  return (
    <header className="flex justify-center align-center py-10">
      <div className="container">header</div>
      <div className="container" onClick={handleLogin}>
        Login Lens
      </div>
    </header>
  );
};

export default Header;
