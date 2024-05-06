import React from 'react';
import { format } from 'sql-formatter';

export default function ContentFormatter() {
  const [input, setInput] = React.useState('');
  const [formattedContent, setFormattedContent] = React.useState('');
  const [error, setError] = React.useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const unescapeString = (str) => {
    // Unescape new lines and quotes, and cleanup the string
    return cleanupString(str.replace(/\\n/g, "\n").replace(/\\(['"])/g, "$1"));
  };

  const isJSON = (str) => {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isXML = (str) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(str, "text/xml");
    return xmlDoc.querySelector("parsererror") === null;
  };

  const formatJSON = (str) => {
    const jsonObj = JSON.parse(str);
    return JSON.stringify(jsonObj, null, 4);
  };

  const formatSQL = (str) => {
    // Use sql-formatter to format the SQL string
    return format(str);
  };

  const formatXML = (str) => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(str, "text/xml");
    const xsltDoc = new DOMParser().parseFromString([
      // XSLT for pretty-printing XML
      '<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">',
      '  <xsl:output method="xml" indent="yes"/>',
      '  <xsl:template match="node()|@*">',
      '    <xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy>',
      '  </xsl:template>',
      '</xsl:stylesheet>',
    ].join('\n'), 'application/xml');
    const xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(xsltDoc);
    const resultDocument = xsltProcessor.transformToDocument(xml);
    const serializer = new XMLSerializer();
    return serializer.serializeToString(resultDocument);
  };

  const formatContent = () => {
    setError('');
    setFormattedContent('');
    const unescapedInput = unescapeString(input);

    if (isJSON(unescapedInput)) {
      setFormattedContent(formatJSON(unescapedInput));
    }
    else if (isXML(unescapedInput)) {
      setFormattedContent(formatXML(unescapedInput));
    }
    else {
      // Very naive check for SQL -- this need to be replaced with an actual SQL formatter
      setFormattedContent(formatSQL(unescapedInput));
    }
  };

  return (
    <div id="content-formatter" className="mt-6">
      <textarea
        className="w-full p-2 text-gray-900 rounded-lg"
        rows="6"
        placeholder="Enter escaped content here"
        value={input}
        onChange={handleInputChange}
      ></textarea>
      <button
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded my-4"
        onClick={formatContent}
      >
        Format Content
      </button>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mt-2">
        {formattedContent && (
          <pre className="overflow-x-auto p-3 text-gray-900 bg-white rounded-lg shadow-inner">
            {formattedContent}
          </pre>
        )}
      </div>
    </div>
  );
}