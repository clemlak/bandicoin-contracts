/* eslint-env node, mocha */
/* global artifacts, contract, it, assert */

const Bandicoin = artifacts.require('Bandicoin');

let bandicoin;

contract('Bandicoin', (accounts) => {
  it('Should deploy an instance of the Bandicoin contract', () => Bandicoin.deployed()
    .then((instance) => {
      bandicoin = instance;
    }));

  it('Should check the name of the token', () => bandicoin.name()
    .then((name) => {
      assert.equal(name, 'Bandicoin', 'Name is wrong');
    }));

  it('Should check the symbol of the token', () => bandicoin.symbol()
    .then((symbol) => {
      assert.equal(symbol, 'BADI', 'Symbol is wrong');
    }));

  it('Should check the decimals of the token', () => bandicoin.decimals()
    .then((decimals) => {
      assert.equal(decimals, 18, 'Decimals are wrong');
    }));

  it('Should check the total supply of the token', () => bandicoin.totalSupply()
    .then((totalSupply) => {
      assert.equal(totalSupply.toString(), 1000000 * 10 ** 18, 'Total supply is wrong');
    }));

  it('Should check the balance of the owner', () => bandicoin.balanceOf(accounts[0])
    .then((balance) => {
      assert.equal(balance.toString(), 1000000 * 10 ** 18, 'Owner balance is wrong');
    }));

  it('Should transfer tokens from account 0 to account 1', () => bandicoin.transfer(
    accounts[1],
    web3.utils.toWei('1'),
  ));

  it('Should check the balance of account 1', () => bandicoin.balanceOf(accounts[1])
    .then((balance) => {
      assert.equal(web3.utils.fromWei(balance), 0.5, 'Account 1 balance is wrong');
    }));

  it('Should check the balance of address 0x0', () => bandicoin.balanceOf('0x0000000000000000000000000000000000000000')
    .then((balance) => {
      assert.equal(web3.utils.fromWei(balance), 0.5, 'Address 0x0 balance is wrong');
    }));  
});
