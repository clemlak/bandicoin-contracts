require('dotenv').config();
const PrivateKeyProvider = require('truffle-privatekey-provider');
const Utils = require('web3-utils');

const mainnetUrl = `https://mainnet.infura.io/v3/${process.env.INFURA}`;
const ropstenUrl = `https://ropsten.infura.io/v3/${process.env.INFURA}`;

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
      gas: 4000000,
      gasPrice: Utils.toWei('10', 'gwei'),
    },
    ropsten: {
      provider: new PrivateKeyProvider(process.env.PRIVATE_KEY, ropstenUrl),
      network_id: 3,
      gasPrice: Utils.toWei('10', 'gwei'),
      gas: 4000000,
      skipDryRun: true,
    },
    live: {
      provider: new PrivateKeyProvider(process.env.PRIVATE_KEY, mainnetUrl),
      network_id: 1,
      gasPrice: Utils.toWei('10', 'gwei'),
      gas: 4000000,
    },
  },
  mocha: {
    useColors: true,
  },
  compilers: {
    solc: {
      version: '0.5.7',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
