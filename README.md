# Vite React WalletConnect WAGMI Telegram Mini Dapp

Follow these steps to create a Vite React application, integrate WalletConnect using WAGMI, publish it as a GitHub Page, and deploy it as a Telegram Mini App. This Web3 App aims to demonstrate common on-chain mechanics such as claiming tokens and using those tokens to mint NFTs, and to inspire the community to build on Telegram. 

Try it here: [t.me/BNBMiniGame_bot/bnbminiapp](t.me/BNBMiniGame_bot/bnbminiapp) (copy the link to your browser)

<img src="https://github.com/kang5647/bnb-telegram-demo/assets/76279908/977af764-9e95-4f41-a331-06ad6fc5870c" alt="Example Image" width="500" height="450">


## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- A Telegram account to create and test the Mini App
- MetaMask or another WalletConnect-compatible wallet

<br>

## Step 1: Set Up Vite React Project

1. **Create a new Vite React project:**

    ```sh
    npm create vite@latest your-project-name --template react
    ```

2. **Navigate to the project directory:**

    ```sh
    cd my-vite-react-app
    ```

3. **Install dependencies:**

    ```sh
    npm install
    ```

4. **Start the development server:**

    ```sh
    npm run dev
    ```
<br>

## Step 2: Writing Smart Contracts

In this example, we are going to create ERC20 tokens and ERC721 NFTs with a custom mint function. We will also create a separate contract to handle token claiming. We use [Remix](https://remix.ethereum.org/) to compile and deploy the smart contracts.

### Game Token Contract (ERC20) 
```solidity
// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GameToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("GameToken", "GT") {
        _mint(msg.sender, initialSupply);
    }
}
```
### Game NFT Contract (ERC721)
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract GameNFT is ERC721 {
    uint256 public nextTokenId;
    address public admin;
    IERC20 public gameToken;
    uint256 public mintPrice;

    struct Item {
        string metadata;
    }

    mapping(uint256 => Item) public items;

    constructor(address _gameToken, uint256 _mintPrice) ERC721("GameNFT", "GNFT") {
        admin = msg.sender;
        gameToken = IERC20(_gameToken);
        mintPrice = _mintPrice;
    }

    function setMintPrice(uint256 _mintPrice) external {
        require(msg.sender == admin, "only admin can set mint price");
        mintPrice = _mintPrice;
    }

    function mint(string memory metadata) external {
        require(gameToken.transferFrom(msg.sender, address(this), mintPrice), "payment failed");
        uint256 tokenId = nextTokenId;
        nextTokenId++;
        _safeMint(msg.sender, tokenId);
        items[tokenId] = Item(metadata);
    }
}

```

### TokenDistributor Contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TokenDistributor {
    IERC20 public gameToken;
    address public admin;
    uint256 public claimAmount;

    constructor(address _tokenAddress) {
        gameToken = IERC20(_tokenAddress);
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    function setClaimAmount(uint256 amount) external onlyAdmin {
        claimAmount = amount;
    }

    function claimTokens(address to) external {
        require(claimAmount > 0, "Claim amount is not set");
        require(gameToken.transfer(to, claimAmount), "Token transfer failed");
    }
}
```
<br>

## Step 3 Save the contract ABI

Save the ABI (Application Binary Interface) of your smart contract as a TypeScript file.
1. Generate the ABI: After compiling your smart contract, you will get the ABI from the build artifacts (usually a JSON file).
![image](https://github.com/kang5647/bnb-telegram-demo/assets/76279908/e702a9cd-84a7-41c7-98a9-115695098db4)

2. Save the ABI as a TypeScript file: Create a new TypeScript file to store the ABI (can be found in `contracts` folder).

<br>

## Step 4 Setup WalletConnect with WAGMI 

WalletConnect's Web3Modal SDK provides simple-to-use wallet integration into Web3 App. 

Create `.env` and `.env.production` (for deploying as GitHub Pages).
```
VITE_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id
```
### Create Web3Modal Component
Refer to WalletConnect official [documentation](https://docs.walletconnect.com/web3modal/react/about?platform=wagmi) for implementation guide.

<br>

## Step 5: Creating Components

In this example, we will create a simple counter app that allows users to claim tokens once they have incremented the counter 10 times. Below are the components we will create: `Claim`, `Mint`, `Counter`, and `ConnectButton`.

### Folder Structure

```plaintext
src
├── Components
│   ├── Claim
│   │   └── index.tsx
│   ├── Mint
│   │   └── index.tsx
│   ├── Counter
│   │   └── index.tsx
│   └── ConnectButton
        └── index.tsx
├── App.jsx
├── main.jsx
└── index.css
```

### Homepage.jsx
Puts together all other components (`Counter`, `Claim`, `Mint`, and `ConnectButton`)
```jsx
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
```

### App.jsx
Sets up the Web3 context using a custom Web3ModalProvider and includes a CounterProvider to manage the counter state. 

```jsx
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

```

### Main Entry Point
The entry point of the React application. It renders the App component into the root element of the HTML file. 

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

```
<br>

## Step 6: Publish to GitHub Pages

1. **Install the `gh-pages` package:**

    ```sh
    npm install gh-pages --save-dev
    ```

2. **Add the following scripts to your `package.json`:**

    ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    ```

3. **Update the `vite.config.js` file to include the base path for GitHub Pages:**

    ```js
    // vite.config.js
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
      base: '/your-repo-name/',
      plugins: [react()],
    });
    ```

4. **Deploy your app to GitHub Pages:**

    ```sh
    npm run deploy
    ```

5. **Configure GitHub Pages settings:**

    - Go to your repository on GitHub.
    - Navigate to **Settings** > **Pages**.
    - Under **Source**, select `gh-pages` branch.

Your app should now be live at `https://your-username.github.io/your-repo-name/`.
<br>
## Step 7: Integrate with Telegram Mini App

1. **Set up a Telegram bot:**

    - Create a new bot using BotFather on Telegram.

2. **Configure the Telegram Mini App settings:**

    - Go to the BotFather chat and use the command `/newapp`.
    - Enter your app’s domain. Since you have deployed to GitHub Pages, the domain would be `https://your-username.github.io/your-repo-name/`.
      
<img src="https://github.com/kang5647/bnb-telegram-demo/assets/76279908/c54c17ba-d82b-4714-807b-10b99039f61e" alt="Example Image" width="450" height="100">

3. **Test the integration:**

    - Open your Telegram bot and start a chat.
    - Use the `/start` command to launch your Mini App.

## Disclaimer

WalletConnect currently does not work very well when used in a Telegram Mini App. There are no problems when accessing the webpage in a mobile browser.


## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



