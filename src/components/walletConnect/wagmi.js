import { http, createConfig } from "wagmi";
import { bscTestnet } from "wagmi/chains";
import { metaMask, walletConnect } from "wagmi/connectors";

const projectId = "9ba1501155f1e72178bc1861538ba8bd";

export const config = createConfig({
  chains: [bscTestnet],
  autoConnect: true,
  connectors: [walletConnect({ projectId })],
  transports: {
    [bscTestnet.id]: http(),
  },
});
