import { useReadContract, useWriteContract, useWaitForTransactionReceipt, useAccount } from 'wagmi';
import { TokenAbi } from '../../contracts/gameTokenAbi';
import { NFTAbi } from '../../contracts/gameNFTAbi';
import {  useState } from 'react';

const NFTAddress = '0x368c6da3d241f36FbA1c8e4c256dc172a66e564d';
const TokenAddress = '0xE2Da1cE95eEF59E9a9c7f30BB3DC7a12aD44447a';

function Mint () {

    const { isConnected, address } = useAccount();
    const [nextTokenId, setNextTokenId] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isButtonPressed, setIsButtonPressed] = useState<boolean>(false);

    const  { data: approveHash, writeContract: approve, isPending: isApprovePending } = useWriteContract();
    const  { data: mintHash, writeContract: mint, isPending: isMintPending } = useWriteContract();

    // Read the mint price from the contract
    const { refetch: refetchMintPrice } = useReadContract({
        address: NFTAddress,
        abi: NFTAbi,
        functionName: 'mintPrice',
    });

    const {  refetch: refetchNextTokenId } = useReadContract({
        address: NFTAddress,
        abi: NFTAbi,
        functionName: 'nextTokenId',
      });
    
    const { refetch: refetchBalance} = useReadContract({
        address: TokenAddress,
        abi: TokenAbi,
        functionName: 'balanceOf',
        args: address ? [address] : undefined,
      });

    const { refetch: refetchAllowance } = useReadContract({
        address: TokenAddress,
        abi: TokenAbi,
        functionName: 'allowance',
        args: address ? [address, NFTAddress] : undefined,
      });

    const mintNFT = async () => {
        try {
            setIsButtonPressed(true);
            setError(null);
            if (!isConnected) throw new Error('User disconnected');
            console.log("Wallet address: "+ address);
            const { data: mintPriceData } = await refetchMintPrice({ throwOnError: true, cancelRefetch: true });
            const { data: nextTokenIdData } = await refetchNextTokenId({ throwOnError: true, cancelRefetch: true });
            const { data: balanceData } = await refetchBalance({ throwOnError: true, cancelRefetch: true });
            const { data: allowanceData } = await refetchAllowance( { throwOnError: true, cancelRefetch: true});

            //get mint price 
            if (mintPriceData === undefined) throw new Error('Unable to read mint Price');
            const mintPrice = BigInt(mintPriceData);
            console.log('Mint Price: ' + mintPrice);

            //get balance 
            if (balanceData === undefined) throw new Error('Unable to read balance');
            const balance = BigInt(balanceData);       
            console.log('Balance: ' + balance)
            if (!balance || balance < 1000000000000000000n) throw new Error('Insufficient game tokens to mint NFT');

            console.log('Allowance: ' + allowanceData);
            if (allowanceData === undefined) throw new Error('Unable to read allowance');
            const allowance = BigInt(allowanceData);
            console.log('Allowance: ' + allowance);

            // Approve more tokens if needed
            if (allowance < mintPrice) {
                approve({
                    address: TokenAddress,
                    abi: TokenAbi,
                    functionName: 'approve',
                    args: [NFTAddress, mintPrice],
                });
                setIsButtonPressed(false)
            }

            //get Token ID and setTokenId
            if(nextTokenIdData === undefined) throw new Error('Unable to read nextTokenId');
            const nextTokenId = Number(nextTokenIdData);
            setNextTokenId(nextTokenId);

            const metadata = 'https://coral-roasted-gopher-138.mypinata.cloud/ipfs/QmcrfuR8JLSQxCpbBNqxt1AJJARs5ygkGgfFG4dkNXwy2P';
            mint({
                address: NFTAddress,
                abi: NFTAbi,
                functionName: 'mint',
                args: [metadata]
            })

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error : any) {
            console.error('Error minting NFT:', error);
            setError(error.message);
        }
    };

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash: mintHash,
    })

    const { isSuccess: isApproved} = 
    useWaitForTransactionReceipt({
        hash: approveHash
    })

    return (
        <div>
            <button onClick={mintNFT} disabled={isMintPending}>
               {(isMintPending || isApprovePending) ? 'Waiting...' : 'Mint NFT with Game Tokens (1 GT)'}
            </button>
            {!isButtonPressed && isApproved && <div>Approved allowance. Mint the NFT now!</div>}
            {isConfirming && <div>Waiting for confirmation...</div>}
            {isConfirmed && <div>You've minted an NFT with tokenID: {nextTokenId}</div>}
            {error && <div style={{ color: 'red' }}>Error: {error}</div>}
        </div>
    );
}

export default Mint;
