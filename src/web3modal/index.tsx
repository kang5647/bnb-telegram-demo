import { createWeb3Modal } from '@web3modal/wagmi/react';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { WagmiProvider } from 'wagmi';
import { bscTestnet } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useMemo } from 'react';

// 0. Setup queryClient
const queryClient = new QueryClient();

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;

const chains = [bscTestnet] as const;

// 3. Create modal
const metadata = {
  name: 'BNB Telegram App Demo',
  description: 'A simple counter Telegram mini app',
  url: 'https://kang5647.github.io/bnb-telegram-demo/', // origin must match your domain & subdomain
  icons: ['https://kang5647.github.io/bnb-telegram-demo/bnb_icon.png'],
};

const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
});

export function Web3ModalProvider({ children }: { children: ReactNode }) {
  console.log("Web3ModalProvider rendered");

  const memoizedConfig = useMemo(() => config, []);
  const memoizedQueryClient = useMemo(() => queryClient, []);

  return (
    <WagmiProvider config={memoizedConfig}>
      <QueryClientProvider client={memoizedQueryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
