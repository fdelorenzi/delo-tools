import React from 'react';

export default function JWTDecoder() {
  const [input, setInput] = React.useState('');
  const [decodedHeader, setDecodedHeader] = React.useState('');
  const [decodedPayload, setDecodedPayload] = React.useState('');
  const [error, setError] = React.useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const decodeJWT = () => {
    try {
      const parts = input.split('.');
      if (parts.length !== 3) {
        throw new Error('Invalid JWT: It must consist of three parts.');
      }

      const decodedHeader = JSON.parse(window.atob(parts[0]));
      const decodedPayload = JSON.parse(window.atob(parts[1]));

      setDecodedHeader(JSON.stringify(decodedHeader, null, 2));
      setDecodedPayload(JSON.stringify(decodedPayload, null, 2));
      setError('');
    } catch (e) {
      setError('Invalid JWT string.');
      setDecodedHeader('');
      setDecodedPayload('');
    }
  };

  return (
    <div id="jwt-decoder" className="mt-6">
      <textarea
        className="w-full p-2 text-gray-900 rounded-lg"
        rows="4"
        placeholder="Enter JWT here"
        value={input}
        onChange={handleInputChange}
      ></textarea>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded my-4"
        onClick={decodeJWT}
      >
        Decode JWT
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {decodedHeader && (
        <>
          <p className="mt-2">Decoded Header:</p>
          <textarea
            className="w-full p-2 text-gray-900 rounded-lg"
            rows="4"
            placeholder="Decoded Header"
            value={decodedHeader}
            readOnly
          ></textarea>
        </>
      )}
      {decodedPayload && (
        <>
          <p className="mt-2">Decoded Payload:</p>
          <textarea
            className="w-full p-2 text-gray-900 rounded-lg"
            rows="6"
            placeholder="Decoded Payload"
            value={decodedPayload}
            readOnly
          ></textarea>
        </>
      )}
    </div>
  );
}