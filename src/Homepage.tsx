// src/HomePage.tsx
import React from 'react';
import ConnectButton from './Components/ConnectButton';
import Counter from './Components/Counter';
import Claim from './Components/Claim';
import Mint from './Components/Mint';

type HomePageProps = {
  count: number;
  onCountChange: (newCount: number) => void;
};

const HomePage: React.FC<HomePageProps> = React.memo(({ count, onCountChange }) => {
  return (
    <main className='main-container'>
      <h1>Earn $GT</h1>
      <div className="button-container">
        <ConnectButton />
      </div>
      <Counter count={count} onCountChange={onCountChange} />
      <Claim count={count} />
      <Mint />
    </main>
  );
});

export default HomePage;
