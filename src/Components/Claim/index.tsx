import { useWriteContract, useWaitForTransactionReceipt, useAccount } from 'wagmi';
import { DistributorAbi } from '../../contracts/distributeTokenAbi';
import { useState } from 'react';
const DistributorAddress = '0x53c570782e262689794F1e869Ab2739652Eed18B';

type ClaimProps = {
    count : number
}
const Claim: React.FC<ClaimProps> = ({ count }) => {
    const { isConnected, address } = useAccount()
    const { data: hash, writeContract, isPending } = useWriteContract()
    const [error, setError] = useState<string | null>(null);

    const claimTokens = async () => {
        if (count >= 10) {
            try {
                if (!isConnected || !address) throw new Error('User Disconnected');
                writeContract({
                    address: DistributorAddress,
                    abi: DistributorAbi,
                    functionName: 'claimTokens',
                    args: [address],
                })

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (error: any) {
                console.error('Error rewarding tokens:', error);
                setError(error.message);
            }
        }
    };

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    })

    return (
        <div>
            <button onClick={claimTokens} disabled={count < 10 || isPending}>
            {isPending ? 'Confirming...' : 'Claim GT tokens'}
            </button>
            {isConfirming && <div>Waiting for confirmation...</div>}
            {isConfirmed && <div>You've claimed 1 GT token.</div>}
            {error && <div style={{ color: 'red' }}>Error: {error}</div>}
        </div>

    );
};

export default Claim;
