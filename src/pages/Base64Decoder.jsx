import React from 'react';

export default function Base64Decoder() {
  const [input, setInput] = React.useState('');
  const [encoded, setEncoded] = React.useState('');
  const [decoded, setDecoded] = React.useState('');
  const [error, setError] = React.useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleEncodeBase64 = () => {
    // Reset the error and decoded before setting the new encoded value.
    setError('');
    setDecoded('');
    setEncoded(btoa(input));
  };

  const handleDecodeBase64 = () => {
    try {
      // Reset the error and encoded before setting the new decoded value.
      setError('');
      setEncoded('');
      setDecoded(atob(input));
    } catch (e) {
      setError('Invalid Base64 string.');
    }
  };

  return (
    <div id="base64-decoder"> {/* Added an ID for navigation */}
      <h1 className="text-3xl font-bold text-center my-10">
        Base64 Decoder
      </h1>
      <textarea
        className="w-full p-2 text-gray-900 rounded-lg"
        rows="4"
        placeholder="Enter string to encode or decode"
        value={input}
        onChange={handleInputChange}
      ></textarea>
      <div className="flex justify-between my-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleEncodeBase64}
        >
          Encode
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDecodeBase64}
        >
          Decode
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div>
        {encoded && (
          <>
            <p className="mt-2">Encoded Output:</p>
            <textarea
              className="w-full p-2 text-gray-900 rounded-lg"
              rows="2"
              placeholder="Encoded output"
              value={encoded}
              readOnly
            ></textarea>
          </>
        )}
        {decoded && (
          <>
            <p className="mt-2">Decoded Output:</p>
            <textarea
              className="w-full p-2 text-gray-900 rounded-lg"
              rows="2"
              placeholder="Decoded output"
              value={decoded}
              readOnly
            ></textarea>
          </>
        )}
      </div>
    </div>
  );
}