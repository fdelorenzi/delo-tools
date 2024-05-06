import React from 'react';
import Navigation from './components/Navigation';
import ToolCard from './components/ToolCard';
import SQLFormatter from './components/SQLFormatter';
import JWTDecoder from './components/JWTDecoder';
import JSONFormatter from './components/JSONFormatter';
import ContentFormatter from './components/ContentFormatter';
import Base64Decoder from './components/Base64Decoder';

export default function App() {
  const [selectedTool, setSelectedTool] = React.useState('');

  const handleNavigate = (toolId) => {
    setSelectedTool(toolId);
  };

  const renderToolCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <ToolCard 
        title="Base64 Decoder" 
        description="Efficiently decode Base64 encoded data, ensuring accurate results with every use."
        iconClass="fas fa-code" 
        onCardClick={() => handleNavigate('base64-decoder')} 
      />
      <ToolCard 
        title="JSON Formatter" 
        description="Instantly transform your JSON strings into a human-readable format. Optionally redact PII."
        iconClass="fas fa-stream" 
        onCardClick={() => handleNavigate('json-formatter')} 
      />
      <ToolCard 
        title="JWT Decoder" 
        description="Decode and inspect the contents of JWTs to verify their structure and debug payload data."
        iconClass="fas fa-key" 
        onCardClick={() => handleNavigate('jwt-decoder')} 
      />
      <ToolCard 
        title="Unescape & Format" 
        description="Automatically detect escaped characters and format strings for SQL, XML, and JSON."
        iconClass="fas fa-wrench" 
        onCardClick={() => handleNavigate('unescape-n-format')} 
      />
      <ToolCard 
        title="SQL Formatter" 
        description="Beautify and standardize SQL queries using a syntax highlighter and formatter."
        iconClass="fas fa-database" 
        onCardClick={() => handleNavigate('sql-formatter')} 
      />
    </div>
  );

  return (
    <div>
      <Navigation onNavigate={handleNavigate} />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center my-10">Offline Developer Tools</h1>
        
        {selectedTool === '' && (
          <>
            <p className="text-center my-4">Fully offline tools, running on your browser to keep your data safe. Use them directly in your browser, check the code or clone the repo locally for added security and compliance.</p>
            {renderToolCards()}
          </>
        )}

        {selectedTool === 'base64-decoder' && <Base64Decoder />}
        {selectedTool === 'json-formatter' && <JSONFormatter />}
        {selectedTool === 'jwt-decoder' && <JWTDecoder />}
        {selectedTool === 'unescape-n-format' && <ContentFormatter />}
        {selectedTool === 'sql-formatter' && <SQLFormatter />}
      </div>
    </div>
  );
}