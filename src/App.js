import logo from './logo.svg';
import './App.css';
import {TonConnectButton, TonConnectUIProvider} from '@tonconnect/ui-react';
import {Address} from "./compant/Address";
import {Wallet} from "./compant/Wallet";

function App() {
    // const userFriendlyAddress = useTonAddress();
    // const rawAddress = useTonAddress(false);
    return (
        <TonConnectUIProvider manifestUrl="http://https://dishsoontgmini.vercel.app/tonconnect-manifest.json">
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <TonConnectButton/>

                    <Address></Address>
                    <Wallet></Wallet>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </TonConnectUIProvider>

    );
}

export default App;
