import { createAppKit, useAppKitAccount } from "@reown/appkit/react";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
	projectId,
	metadata,
	networks,
	wagmiAdapter,
	solanaWeb3JsAdapter,
} from "@/config";
import { Toaster, toast } from 'sonner';
import { useEffect, useRef } from 'react';

const queryClient = new QueryClient();

const generalConfig = {
	projectId,
	metadata,
	networks,
};

createAppKit({
	adapters: [wagmiAdapter, solanaWeb3JsAdapter],
	...generalConfig,
});

function AccountListener() {
	const { isConnected, address } = useAppKitAccount();
	const prevIsConnectedRef = useRef<boolean | null>(null);

	useEffect(() => {
		if (prevIsConnectedRef.current === null) {
			prevIsConnectedRef.current = isConnected;
			return;
		}

		if (isConnected && !prevIsConnectedRef.current) {
			toast.success("Wallet connected");
		} else if (!isConnected && prevIsConnectedRef.current) {
			toast.warning("Aww, wallet disconnected")
		}

		prevIsConnectedRef.current = isConnected;
	}, [isConnected, address]);

	return null;
}

export default function WalletProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<WagmiProvider config={wagmiAdapter.wagmiConfig}>
			<QueryClientProvider client={queryClient}>
				<Toaster position="bottom-center" richColors />
				<AccountListener />
				{children}
			</QueryClientProvider>
		</WagmiProvider>
	);
}
