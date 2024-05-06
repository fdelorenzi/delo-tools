import React from 'react';
import { format } from 'sql-formatter';

export default function SQLFormatter() {
  const [input, setInput] = React.useState('');
  const [formattedSQL, setFormattedSQL] = React.useState('');
  const [error, setError] = React.useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleFormatSQL = () => {
    try {
      // Assuming sqlFormatter is exposed globally by the script tag
      const formatted = format(input, { language: 'sql' }); // Default language is SQL
      setFormattedSQL(formatted);
      setError('');
    } catch (e) {
      setFormattedSQL('');
      setError('Invalid SQL or an error occurred while formatting.');
    }
  };

  return (
    <div id="sql-formatter" className="mt-6">
      <textarea
        className="w-full p-2 text-gray-900 rounded-lg"
        rows="6"
        placeholder="Enter SQL string"
        value={input}
        onChange={handleInputChange}
      ></textarea>
      <button
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded my-4"
        onClick={handleFormatSQL}
      >
        Format SQL
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {formattedSQL && (
        <>
          <p className="mt-2">Formatted SQL:</p>
          <textarea
            className="w-full p-2 text-gray-900 rounded-lg"
            rows="10"
            placeholder="Formatted SQL will be shown here."
            value={formattedSQL}
            readOnly
          ></textarea>
        </>
      )}
    </div>
  );
}