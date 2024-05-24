import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ConnectButton from './connectButton';
import { useWeb3ModalAccount } from '@web3modal/ethers/react';

function HomePage() {
  const { address, chainId, isConnected } = useWeb3ModalAccount();

  return (
    <main>
      <ConnectButton />
      {isConnected && (
        <div>
          <div>Address: {address}</div>
          <div>ChainId: {chainId}</div>
        </div>
      )}
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
      <HomePage />
    </App> 
  </React.StrictMode>,
)
