import { AuthCoreContextProvider } from '@particle-network/auth-core-modal';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react';
import { type ReactNode } from 'react';

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;

console.log('Project ID:', projectId);

// 2. Set chains
const bnb_mainnet = {
    chainId: 56,
    name: 'BNB Chain',
    currency: 'BNB',
    explorerUrl: 'https://bscscan.com',
    rpcUrl: 'https://bsc-dataseed.binance.org/',
};

const bnb_testnet = {
    chainId: 97,
    name: 'BNB Chain Testnet',
    currency: 'tBNB',
    explorerUrl: 'https://testnet.bscscan.com',
    rpcUrl: 'https://data-seed-prebsc-1-s1.bnbchain.org:8545',
};

// 3. Create modal
const metadata = {
    name: 'My Website',
    description: 'My Website description',
    url: 'https://mywebsite.com', // origin must match your domain & subdomain
    icons: ['https://avatars.mywebsite.com/'],
};

const web3Modal = createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [bnb_mainnet, bnb_testnet],
    projectId: projectId as string,
    enableAnalytics: true,
});

const ParticleProvider = ({ children }: { children: ReactNode }) => {
    return (
        <AuthCoreContextProvider
            options={{
                projectId: import.meta.env.VITE_PROJECT_ID as string,
                clientKey: import.meta.env.VITE_CLIENT_KEY as string,
                appId: import.meta.env.VITE_APP_ID as string,
                web3Modal,
            }}
        >
            {children}
        </AuthCoreContextProvider>
    );
};

export default ParticleProvider;