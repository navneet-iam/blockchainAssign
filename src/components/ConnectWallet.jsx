import { useState } from 'react';
import {Web3} from 'web3';
import './connectWallet.css'; 

const WalletConnection = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    try {
     
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const account = accounts[0];
        const accountDetails = await web3.eth.getAccounts();
        const address = accountDetails[0];
        setWalletConnected(true);
        setWalletAddress(address);
      } else {
        alert('MetaMask is not installed');
      }
    } catch (error) {
      alert(`Error connecting wallet: ${error.message}`);
    }
  };

  const logout = () => {
    // Update state to indicate wallet is disconnected
    setWalletConnected(false);
    setWalletAddress('');
  };

  const getTruncatedAddress = (address) => {
    return `${address.substring(0, 6)}..${address.substring(address.length - 6)}`;
  };

  return (
    <div className="wallet-connection">
      {walletConnected ? (
        <div>
          <p>{getTruncatedAddress(walletAddress)}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletConnection;
