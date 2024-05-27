import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ConnectButton from './connectButton';
//import { useWeb3ModalAccount } from '@web3modal/ethers/react';
import Counter from './Counter/index.tsx';

function HomePage() {
  //const { address, isConnected } = useWeb3ModalAccount();

  return (
    <main>
      <div className="button-container">
        <ConnectButton />
      </div>
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
