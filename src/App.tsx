import { Web3ModalProvider } from './web3modal';
import { useCallback, useState } from 'react';
import HomePage from './Homepage';

const App = () => {
  return (
    <Web3ModalProvider>
      <CounterProvider />
    </Web3ModalProvider>
  );
};

const CounterProvider = () => {
  const [count, setCount] = useState(0);
  const handleCountChange = useCallback((newCount: number) => {
    setCount(newCount);
  }, []);

  return <HomePage count={count} onCountChange={handleCountChange} />;
};

export default App;
