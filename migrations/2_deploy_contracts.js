/* eslint-env node */
/* global artifacts */

const Bandicoin = artifacts.require('Bandicoin');

function deployContracts(deployer) {
  deployer.deploy(Bandicoin);
}

module.exports = deployContracts;
