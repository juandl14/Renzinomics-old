import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    localhost: {
      chainId: 31337,
    },
  },
};

export default config;
