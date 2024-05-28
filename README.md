# Vite React WalletConnect WAGMI Telegram Mini App

Follow these steps to create a Vite React application, integrate WalletConnect using WAGMI, publish it as a GitHub Page, and deploy it as a Telegram Mini App. This Web3 App aims to demonstrate common on-chain mechanics such as claiming tokens and using those tokens to mint NFTs, and to inspire the community to build on Telegram. 

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- A Telegram account to create and test the Mini App
- MetaMask or another WalletConnect-compatible wallet

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

## Step 2: Set Up WalletConnect with WAGMI

Refer to their official [documentation](https://docs.walletconnect.com/web3modal/react/about?platform=wagmi). WalletConnect's Web3Modal SDK provides simple-to-use wallet integration into Web3 App. 

## Step 3: 



## Step 3: Publish to GitHub Pages

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

## Step 4: Integrate with Telegram Mini App

1. **Set up a Telegram bot:**

    - Create a new bot using BotFather on Telegram.
    - Note down the bot token provided by BotFather.

2. **Configure the Telegram Mini App settings:**

    - Go to the BotFather chat and use the command `/setdomain`.
    - Enter your app’s domain.
    - Use `/setuserpic` to set an image for your Mini App.

3. **Deploy your app:**

    - Build your app for production:

        ```sh
        npm run build
        ```

    - Deploy the `dist` folder to your web server.

4. **Test the integration:**

    - Open your Telegram bot and start a chat.
    - Use the `/start` command to launch your Mini App.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


  Get your [Wallet Connect](https://docs.walletconnect.com/web3modal/about) project ID. <br>
  Get your [Particle Network](https://dashboard.particle.network/#/) project ID, client key, app ID.

