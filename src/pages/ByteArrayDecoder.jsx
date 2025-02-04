import React, { useState } from 'react';

export default function ByteArrayDecoder() {
  const [input, setInput] = useState('');
  const [asciiOutput, setAsciiOutput] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const convertToASCII = () => {
    try {
      const byteArray = input.split(',').map(str => parseInt(str.trim(), 10));
      if (byteArray.some(isNaN) || byteArray.some(num => num < 0 || num > 255)) throw new Error('Invalid byte');
      const asciiString = String.fromCharCode(...byteArray);
      setAsciiOutput(asciiString);
      setError('');
    } catch (e) {
      setError('Invalid byte array.');
      setAsciiOutput('');
    }
  };

  return (
    <div id="byte-array-converter" className="mt-6">
      <h1 className="text-3xl font-bold text-center my-10">
        Byte Array to ASCII Converter
      </h1>  
      <textarea
        className="w-full p-2 text-gray-900 rounded-lg"
        rows="4"
        placeholder="Enter byte array here, e.g., 65,66,67"
        value={input}
        onChange={handleInputChange}
        aria-label="Byte Array Input"
      ></textarea>
      <div className="flex space-x-4 my-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={convertToASCII}
          aria-label="Convert to ASCII"
        >
          Convert to ASCII
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {asciiOutput && (
        <>
          <p className="mt-2">ASCII Output:</p>
          <pre className="w-full p-2 text-gray-900 rounded-lg bg-gray-100 break-words whitespace-pre-wrap" style={{ minHeight: '100px' }}>
            {asciiOutput}
          </pre>
        </>
      )}
    </div>
  );
}