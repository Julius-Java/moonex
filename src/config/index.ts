import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, arbitrum, solana, solanaDevnet, solanaTestnet, } from '@reown/appkit/networks'
import type { AppKitNetwork } from '@reown/appkit/networks'
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react'
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'

export const projectId = import.meta.env.VITE_APPKIT_PROJECT_ID;

if (!projectId) {
        throw new Error('Project ID is not defined')
}

export const metadata = {
        name: 'Moonex Exchange',
        description: 'Trusted and secure multi-chain dex platform',
        url: 'https://reown.com', // origin must match your domain & subdomain
        icons: ['https://avatars.githubusercontent.com/u/179229932']
      }

      export const networks = [mainnet, arbitrum, solana, solanaDevnet, solanaTestnet] as [AppKitNetwork, ...AppKitNetwork[]]

      export const wagmiAdapter = new WagmiAdapter({
        projectId,
        networks
      })

      export const solanaWeb3JsAdapter = new SolanaAdapter({
        wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()]
      })

      export const config = wagmiAdapter.wagmiConfig