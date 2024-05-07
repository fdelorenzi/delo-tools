import React, { useState } from 'react';
import { Redactor } from 'redact-pii';

const redactor = new Redactor({ builtInRedactors: { all: true } });

export default function TextRedactor() {
  const [inputText, setInputText] = useState('');
  const [redactedText, setRedactedText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const redactText = () => {
    const redacted = redactor.redact(inputText);
    setRedactedText(redacted);
  };

  return (
    <div id="redact-text" className="mt-6">
      <h1 className="text-3xl font-bold text-center my-10">
        Text Redactor
      </h1>
      <textarea
        className="w-full p-2 text-gray-900 rounded-lg"
        rows="4"
        placeholder="Enter text here"
        value={inputText}
        onChange={handleInputChange}
      ></textarea>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded my-4"
        onClick={redactText}
      >
        Redact Text
      </button>
      {redactedText && (
        <>
          <p className="mt-2">Redacted Text:</p>
          <textarea
            className="w-full p-2 text-gray-900 rounded-lg"
            rows="4"
            placeholder="Redacted text output"
            value={redactedText}
            readOnly
          ></textarea>
        </>
      )}
    </div>
  );
}