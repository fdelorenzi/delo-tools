import React, { useState } from 'react';
import { SyncRedactor } from 'redact-pii';

const redactor = new SyncRedactor();

export default function JSONFormatter() {
  const [input, setInput] = useState('');
  const [formattedJSON, setFormattedJSON] = useState('');
  const [redactedJSON, setRedactedJSON] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 4);
      setFormattedJSON(formatted);
      setError('');
    } catch (e) {
      setError('Invalid JSON string.');
      setFormattedJSON('');
    }
  };

  const redactJSON = () => {
    try {
      const parsed = JSON.parse(input);
      const redacted = redactObject(parsed);
      const formatted = JSON.stringify(redacted, null, 4);
      setRedactedJSON(formatted);
      setError('');
    } catch (e) {
      setError('Invalid JSON string.');
      setRedactedJSON('');
    }
  };

  const redactObject = (obj) => {
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        redactObject(obj[key]);
      } else if (typeof obj[key] === 'string') {
        obj[key] = redactor.redact(obj[key]);
      }
    }
    return obj;
  };

  return (
    <div id="json-formatter" className="mt-6">
      <h1 className="text-3xl font-bold text-center my-10">
        JSON Formatter
      </h1>  
      <textarea
        className="w-full p-2 text-gray-900 rounded-lg"
        rows="4"
        placeholder="Enter JSON here"
        value={input}
        onChange={handleInputChange}
      ></textarea>
      <div className="flex space-x-4 my-4">
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          onClick={formatJSON}
        >
          Format JSON
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={redactJSON}
        >
          Format JSON & Redact PII
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {formattedJSON && (
        <>
          <p className="mt-2">Formatted JSON:</p>
          <textarea
            className="w-full p-2 text-gray-900 rounded-lg"
            rows="8"
            placeholder="Formatted JSON output"
            value={formattedJSON}
            readOnly
          ></textarea>
        </>
      )}
      {redactedJSON && (
        <>
          <p className="mt-2">Redacted JSON:</p>
          <textarea
            className="w-full p-2 text-gray-900 rounded-lg"
            rows="8"
            placeholder="Redacted JSON output"
            value={redactedJSON}
            readOnly
          ></textarea>
        </>
      )}
    </div>
  );
}