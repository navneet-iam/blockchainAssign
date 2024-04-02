import { useState } from 'react';
import './styles.css'; 
import SearchBar from './search';
import ConnectWalletButton from './ConnectWallet';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
    <SearchBar />
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className="nav">
        <li className={`nav-item ${activeItem === 'Home' ? 'active' : ''}`} onClick={() => handleItemClick('Home')}>
          Home
        </li>
        <li className={`nav-item ${activeItem === 'Assets' ? 'active' : ''}`} onClick={() => handleItemClick('Assets')}>
          Assets
        </li>
        <li className={`nav-item ${activeItem === 'Trade' ? 'active' : ''}`} onClick={() => handleItemClick('Trade')}>
          Trade
        </li>
      </ul>
      <ConnectWalletButton />
    </div>
  );
};

export default Sidebar;
