const connectBtn = document.querySelector('#connect');
const connectBtn2 = document.querySelector('#connect2');
const connect_wallet = document.querySelector('#connect_wallet');
const connected_wallet = document.querySelector('#connected_wallet');
const EvmChains = window.evmChains;
const Web3Modal = window.Web3Modal.default
const WalletConnectProvider = window.WalletConnectProvider.default;
let web3Modal;
let provider;
let selectedAccount;

connected_wallet.style.display = 'none';

function init() {
    console.log('initalzing');
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            // options: {
            //     infuraId: "a730db81f8904213b6c2af6a3771b022"
            // }
            options: {
                rpc: {
                   56: 'https://bsc-dataseed.binance.org/'
                },
                network: 'binance',
              }
        }
    }

    web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: false, // optional
        providerOptions, // required
    });
    // web3Modal.clearCachedProvider()
}


async function fetchAccountData() {
    // Get a Web3 instance for the wallet
    // console.log(provider);
    const web3 = new Web3(provider);
    // Get connected chain id from Ethereum node
    const chainId = await web3.eth.getChainId();
    console.log(chainId);
	const chainData = await EvmChains.getChain(chainId);
    console.log(chainData.name);
    if (chainId !== 56) 
        return alert("Connect wallet to a Binance Smart Chain Mainnet");
    
    // Get list of accounts of the connected wallet
    const accounts = await web3.eth.getAccounts();
    // MetaMask does not give you all accounts, only the selected account
    selectedAccount = accounts[0];
    showAddress(selectedAccount);
    console.log('selected-account', selectedAccount);
}

async function onConnect() {
    console.log("button clicked");
    try {
        provider = await web3Modal.connect();
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }
    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts) => {
        fetchAccountData();
    });
    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
        fetchAccountData();
    });

    // Subscribe to networkId change
    provider.on("networkChanged", (networkId) => {
        fetchAccountData();
    });
    await fetchAccountData();
}

function showAddress(num) {
    const firstAddressPart = shortener(num, 0, 4);
    const lastAddressPart = shortener(num, 38, 42);
    connect_wallet.style.display = 'none';
    connected_wallet.style.display = 'block';
    connected_wallet.innerHTML = `${firstAddressPart}...${lastAddressPart} CONNECTED`;
}

const shortener = (_data, _start, _end) => {
    let result = "";
    for (let i = _start; i < _end; i++) 
        result = [
            ... result,
            _data[i]
        ];
    

    return result.join("");
};

init();

connectBtn.addEventListener('click',onConnect)
connectBtn2.addEventListener('click',onConnect)

