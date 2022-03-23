import { MetaMaskInpageProvider } from '@metamask/providers';

export type WindowWithEthereum = Window & {
  ethereum: MetaMaskInpageProvider;
};
