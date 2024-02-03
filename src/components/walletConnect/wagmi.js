import { createConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { walletConnect } from "wagmi/connectors";

const projectId = "9ba1501155f1e72178bc1861538ba8bd";

export const config = createConfig({
  chains: [polygonMumbai],
  autoConnect: true,
  connectors: [walletConnect({ projectId })],
});
