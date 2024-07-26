require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "1ee1853602d6c1e06c9c91c64fe1ecd07f93dce9121cfd3f77922a40d441929f";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x1ee1853602d6c1e06c9c91c64fe1ecd07f93dce9121cfd3f77922a40d441929f`],
    },
  },
};
