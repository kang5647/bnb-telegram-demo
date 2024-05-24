import React from 'react';
import ParticleProvider from './web3modal';

function App({ children }: { children: React.ReactNode }) {
  return (
    <ParticleProvider>{children}</ParticleProvider>
  );
}

export default App;