import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ConnectButton from './connectButton';
import { useWeb3ModalAccount } from '@web3modal/ethers/react';
import Counter from './Counter/index.tsx';

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
      <Counter/>
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
