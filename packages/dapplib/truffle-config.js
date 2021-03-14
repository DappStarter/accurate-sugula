require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remind huge guess problem blue general'; 
let testAccounts = [
"0x8f926749082c596b82896a8758f908060c8ca3a7dec0ca314953913e070b24e3",
"0x9674284970179d52324fc25b106183f68a7be1bce673d4eed5d06e7825c26029",
"0x057865f9064bd3b040f23d0514d1805e0b96f9c81e618ebc7675ece145a882c1",
"0x8161a03a8665eba784eb59312090ca7673aea01f3fcd4bba45f3f71a54f7d2c0",
"0xa74f930fd99dfaaf128dfa5f7e09da8e89d46e25830b3a2df1820263ec1b5c52",
"0x4af22b411a91762a3bf317aeeef1868489d02930162624d362c3e0d0c15ae0bc",
"0xdb60ec587d4e2627ba1ed6aa867bacc15d2fa469bf64f0bb3cd6735ba29f953a",
"0x4bd76bfb2e30eba3fdba8fc719907c02fa4a24caf180c762d35e67c91502f75b",
"0x635488c8433030030a1055cdfa136e1b9513b1028de42945bc0142ef5b4130c6",
"0x7d502e27fa49c33357b24a936d58cf8c361d62cd626ab99e45a16cb87be7ca56"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
