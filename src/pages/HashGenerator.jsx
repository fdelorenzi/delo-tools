import React from 'react';
import { MD5, SHA1, SHA256 } from 'crypto-js';

export default function HashGenerator() {
  const [input, setInput] = React.useState('');
  const [hashes, setHashes] = React.useState({
    md5: '',
    sha1: '',
    sha256: '',
  });

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const generateHashes = () => {
    setHashes({
      md5: MD5(input).toString(),
      sha1: SHA1(input).toString(),
      sha256: SHA256(input).toString(),
    });
  };

  return (
    <div id="hash-generator" className="mt-6">
      <h1 className="text-3xl font-bold text-center my-10">
        Hash Generator
      </h1>
      <textarea
        className="w-full p-2 text-gray-900 rounded-lg"
        rows="2"
        placeholder="Enter text here"
        value={input}
        onChange={handleInputChange}
      ></textarea>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
        onClick={generateHashes}
      >
        Generate Hashes
      </button>
      <div>
        <p>MD5: {hashes.md5}</p>
        <p>SHA1: {hashes.sha1}</p>
        <p>SHA256: {hashes.sha256}</p>
      </div>
    </div>
  );
}