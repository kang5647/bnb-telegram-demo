/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { BrowserProvider, Contract } from 'ethers'
import counterAbi from './contractAbi.json'
import React, { useState } from 'react';

const counterAddress = '0xCb76A2A6b24633952B43683B7A695d0180809BF1'

function Counter(){
    const { address, chainId, isConnected} = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    const [count, setCount] = useState<number | null> (0);
    const [error, setError] = useState<string | null> (null);

    async function getCount() {
        try{
            if (!isConnected) throw Error('User disconnected')
            if (walletProvider){
                const ethersProvider = new BrowserProvider(walletProvider);
                const signer = await ethersProvider.getSigner()
                // The Contract object
                const counterContract = new Contract(counterAddress, counterAbi, signer)
                let count = await counterContract.getCount();
                count = Number(count);
                console.log("Count: " + count);
                setCount(count);
                setError(null);
            }
        } catch (err: any) {
            setError(err.message);
        }
    }

    async function incrementCount(){
        try {
            if (!isConnected) throw Error('User disconnected')
                if (walletProvider){
                    const ethersProvider = new BrowserProvider(walletProvider);
                    const signer = await ethersProvider.getSigner()
                    // The Contract object
                    const counterContract = new Contract(counterAddress, counterAbi, signer)
                    await counterContract.incrementCounter();
                    console.log("You've incremented count!");
                    setError(null);
                    await getCount();
            }
        } catch(err: any) {
            setError(err.message);
        }
    }

    async function decrementCount(){
        try{
            if (!isConnected) throw Error('User disconnected')
                if (walletProvider){
                    const ethersProvider = new BrowserProvider(walletProvider);
                    const signer = await ethersProvider.getSigner()
                    // The Contract object
                    const counterContract = new Contract(counterAddress, counterAbi, signer);
                    await counterContract.decrementCounter();
                    console.log("You've decremented count!");
                    setError(null);
                    await getCount();
            }
        } catch(err: any){
            setError(err.message);
        }
    }

    return (
    <div>
        <h1>Counter</h1>
        {count !== null && <div>Current Count: {count}</div>}
        <button onClick={getCount}>Get Count</button>
        <button onClick={incrementCount}>Increment Count</button>
        <button onClick={decrementCount}>Decrement Count</button>
        {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      </div>
      );
}

export default Counter;