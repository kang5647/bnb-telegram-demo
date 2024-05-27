/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { BrowserProvider, Contract } from 'ethers'
import counterAbi from './contractAbi.json'
import { useEffect, useState } from 'react';
import { useEthereum } from '@particle-network/auth-core-modal';

const counterAddress = '0xCb76A2A6b24633952B43683B7A695d0180809BF1';
const expectedChainId = 97;

//const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

function Counter(){
    const { isConnected } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();
    const { chainId, switchChain } = useEthereum();

    const [count, setCount] = useState<number | null> (0);
    const [error, setError] = useState<string | null> (null);
    const [loading, setLoading] = useState<boolean>(false);

    const getCount = async() => {
        try{
            if (!isConnected) throw Error('User disconnected')
            if (walletProvider){
                if (chainId !== expectedChainId) {
                    await switchChain(expectedChainId);
                }
                const ethersProvider = new BrowserProvider(walletProvider);
                const signer = await ethersProvider.getSigner()
                // The Contract object
                const counterContract = new Contract(counterAddress, counterAbi, signer)
                let count = await counterContract.getCount();
                count = Number(count);
                console.log("Count: " + count);
                setCount(count);
                setError(null);
                return count;
            } else {
                throw Error('Connected to the wrong network');
            }
        } catch (err: any) {
            setError(err.message);
            return count;
        }
    }

    const incrementCount = async() => {
        try {
            if (!isConnected) throw Error('User disconnected')
            if (walletProvider){
                setLoading(true);
                const ethersProvider = new BrowserProvider(walletProvider);
                const signer = await ethersProvider.getSigner()
                // The Contract object
                const counterContract = new Contract(counterAddress, counterAbi, signer)
                const tx = await counterContract.incrementCounter();
                await tx.wait()
                
                // Workaround for waiting the transaction to be mined.
                // This ensures that the count is updated correctly, as 
                // Particle Auth might allow the code to proceed before
                // the transaction is fully mined and reflected on-chain 
                await getCount();
                console.log("You've incremented count!");
                setError(null);
            }
        } catch(err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    const decrementCount = async() => {
        try{
            if (!isConnected) throw Error('User disconnected')
            if (walletProvider){
                setLoading(true);
                const ethersProvider = new BrowserProvider(walletProvider);
                const signer = await ethersProvider.getSigner()
                // The Contract object
                const counterContract = new Contract(counterAddress, counterAbi, signer);
                const tx = await counterContract.decrementCounter();
                await tx.wait()

                // Workaround for waiting the transaction to be mined.
                // This ensures that the count is updated correctly, as 
                // Particle Auth might allow the code to proceed before
                // the transaction is fully mined and reflected on-chain
                await getCount();
                console.log("You've decremented count!");
                setError(null);
            }
        } catch(err: any){
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (isConnected) {
            if (chainId === expectedChainId) {
                getCount();
            } else {
                setError('Connected to the wrong network');
                setCount(0);
            }
        } else {
            setCount(0);
            setError(null);
        }
    }, [isConnected, chainId])

    return (
    <div className="counter-container">
        <div className="title-container">
            <img src="bnb_icon.png" alt="BNB Logo" className="logo" />
            <h1>Counter</h1>
        </div>
        <button onClick={incrementCount} disabled={loading}>
            {loading ? 'Loading...' : 'Increment Count'}
        </button>
        <button onClick={decrementCount} disabled={loading}>
            {loading ? 'Loading...' : 'Decrement Count'}
        </button>
        {count !== null && <div className="text-display">Current Count: {count}</div>}
        {error && <div style={{ color: 'red' }} className='text-display'>Error: {error}</div>}
    </div>
      );
}

export default Counter;