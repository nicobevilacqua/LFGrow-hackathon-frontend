import React, { useEffect, useState, ChangeEvent } from 'react';
import { Integration } from 'lit-ceramic-sdk';

import Button, { StyleTypes } from '@components/finity/Button';

const ceramicNode = import.meta.env.CREAMIC_NODE;
const network = import.meta.env.NETWORK;

const litCeramicIntegration = new Integration(ceramicNode, network);

const accessControlConditions = [
  {
    contractAddress: '',
    standardContractType: '',
    chain: 'ethereum',
    method: 'eth_getBalance',
    parameters: [':userAddress', 'latest'],
    returnValueTest: {
      comparator: '>=',
      value: '1000000000000',
    },
  },
];

const LitCeramicExample: React.FC = () => {
  const [streamId, setStreamId] = useState(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [decryptedData, setDecryptedData] = useState(null);

  useEffect(() => {
    litCeramicIntegration.startLitClient(window);
  }, []);

  async function onEncryptHandler() {
    if (!inputValue) {
      alert('empty data');
      return;
    }

    console.log('encrypting');

    const newStreamId = await litCeramicIntegration.encryptAndWrite(
      inputValue,
      accessControlConditions
    );

    setStreamId(newStreamId);
  }

  async function onDecriptHandler() {
    console.log('decrypting');
    const data = await litCeramicIntegration.readAndDecrypt(streamId);
    setDecryptedData(data);
  }

  function onNameChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <section className="container">
      <input type="text" value={inputValue} onChange={onNameChange} />
      {streamId ? <div>StreamID: {streamId}</div> : ''}
      {decryptedData ? <div className="">DecryptedData: {decryptedData}</div> : ''}
      <Button styleType={StyleTypes.Primary} onClick={onEncryptHandler} text={'Encrypt'} />
      <Button styleType={StyleTypes.Primary} onClick={onDecriptHandler} text={'Decrypt'} />
    </section>
  );
};

export default LitCeramicExample;
