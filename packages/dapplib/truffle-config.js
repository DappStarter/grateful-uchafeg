require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'guess narrow fringe skull guard render remind property half arctic off soft'; 
let testAccounts = [
"0xeeff3e8df56fa59ddd0c2261fc1491e01f26cd761e06f9215de2d0396d522cf2",
"0xefd0ac730cfb348ebaa6b51515a72e48abd54ab104afb09555908334aa3143f3",
"0x9b32ecd1c7321e8f66e78d7bf151fff62b4f0cee3864c4d466ec363c3b9c374b",
"0xb1e48378a2ebc93585b62d02bc0a3cc8cb3a9eee9d1cbb09846b99ca04d3a221",
"0xff5a9aa953c60ef74e3e77fb984a26085fddbd764d36162e61c27dd54bfaad94",
"0x92dc8cfe93580083f6350bb4ae50eebc4939f1aadff9e5c7467603010d01f7b9",
"0xb2e2a8d601f7192c9c44a575c517b636babbc209132eeb5cccb2982c77275994",
"0xe013cec136e31720a5e181d89fc0f7535c16d5523b68b4f2982754c7557d65c5",
"0x3fe59f422dc8c47c6f61ca6787612bd31e5d7b2e8264f63888129b13e67cf401",
"0x135d4446a9d82d503de94f8a6d9b0da40bd673b4cf21d9181b5706e5893fcc3b"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


