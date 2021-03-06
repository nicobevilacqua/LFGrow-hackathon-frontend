import React from 'react';
import { CeramicClient } from '@ceramicnetwork/http-client';
import { DID } from 'dids';
import { getResolver as getKeyResolver } from 'key-did-resolver';
import { getResolver as get3IDResolver } from '@ceramicnetwork/3id-did-resolver';
import { EthereumAuthProvider, ThreeIdConnect } from '@3id/connect';

import { WindowWithEthereum } from 'types';
import { MetaMaskInpageProvider } from '@metamask/providers';

import Button from '@components/finity/Button';

// Create a ThreeIdConnect connect instance as soon as possible in your app to start loading assets
const threeID = new ThreeIdConnect();

async function authenticateWithEthereum(ethereumProvider: MetaMaskInpageProvider) {
  // Request accounts from the Ethereum provider
  const accounts: string[] = (await ethereumProvider.request({
    method: 'eth_requestAccounts',
  })) as string[];

  if (!accounts) {
    console.error('invalid');
    return;
  }

  // Create an EthereumAuthProvider using the Ethereum provider and requested account
  const authProvider = new EthereumAuthProvider(ethereumProvider, accounts[0]);
  // Connect the created EthereumAuthProvider to the 3ID Connect instance so it can be used to
  // generate the authentication secret
  await threeID.connect(authProvider);

  const ceramic = new CeramicClient();
  const did = new DID({
    // Get the DID provider from the 3ID Connect instance
    provider: threeID.getDidProvider(),
    resolver: {
      ...get3IDResolver(ceramic),
      ...getKeyResolver(),
    },
  });

  // Authenticate the DID using the 3ID provider from 3ID Connect, this will trigger the
  // authentication flow using 3ID Connect and the Ethereum provider
  await did.authenticate();

  // The Ceramic client can create and update streams using the authenticated DID
  ceramic.did = did;
}

const windowWithEthereum = window as unknown as WindowWithEthereum;

// When using extensions such as MetaMask, an Ethereum provider may be injected as `window.ethereum`
async function tryAuthenticate() {
  if (windowWithEthereum.ethereum == null) {
    throw new Error('No injected Ethereum provider');
  }
  await authenticateWithEthereum(windowWithEthereum.ethereum);
}

const Home = () => {
  return (
    <div className="w-30 flex flex-col justify-center">
      <h1 className="">Design System</h1>
      <Button onClick={tryAuthenticate} text={'Authenticate'} />
    </div>
  );
};

export default Home;
