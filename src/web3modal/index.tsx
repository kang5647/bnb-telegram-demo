import { AuthCoreContextProvider } from '@particle-network/auth-core-modal';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react';
import { type ReactNode } from 'react';

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;

// 2. Set chains
const bnb_testnet = {
    chainId: 97,
    name: 'BNB Chain Testnet',
    currency: 'tBNB',
    explorerUrl: 'https://testnet.bscscan.com',
    rpcUrl: 'https://data-seed-prebsc-1-s1.bnbchain.org:8545',
};

// const bnb_mainnet = {
//     chainId: 56,
//     name: 'BNB Chain',
//     currency: 'BNB',
//     explorerUrl: 'https://bscscan.com',
//     rpcUrl: 'https://bsc-dataseed.binance.org/',
// };

// const opbnb_mainnet = {
//     chainId: 204,
//     name: 'opBNB Mainnet',
//     currency: 'BNB',
//     explorerUrl: 'http://mainnet.opBNBscan.com/',
//     rpcUrl: 'https://opBNB-mainnet-rpc.bnbchain.org'
// }

// const opbnb_testnet = {
//     chainId: 5611,
//     name: 'opBNB Testnet',
//     currency: 'tBNB',
//     explorerUrl: 'https://testnet.opbnbscan.com',
//     rpcUrl: 'https://opbnb-testnet-bridge.bnbchain.org'
// }

// 3. Create modal
const metadata = {
    name: 'BNB Telegram App Demo',
    description: 'A simple counter Telegram mini app',
    url: 'https://kang5647.github.io/bnb-telegram-demo/', // origin must match your domain & subdomain
    icons: ['https://kang5647.github.io/bnb-telegram-demo/bnb_icon.png'],
};

const web3Modal = createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    // chains: [bnb_mainnet, bnb_testnet, opbnb_mainnet, opbnb_testnet],
    chains: [bnb_testnet],
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