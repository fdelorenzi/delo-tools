import React from 'react';
export default function Navigation({ onNavigate }) {
// This function will be passed to Navigation and called with the right tool ID
const handleNavigate = (toolId) => {
  onNavigate(toolId);
};

return (
  <nav className="bg-gray-800">
    <div className="container mx-auto px-4 py-5">
      <div className="flex flex-wrap items-center justify-between">
        <span className="text-xl font-bold cursor-pointer" onClick={() => handleNavigate('')}>
          DeLo Tools
        </span>
        <div className="flex flex-wrap mt-4 md:mt-0">
          {/* Call handleNavigate with the appropriate tool ID */}
          <span className="px-3 py-2 m-1 rounded-md text-sm font-medium cursor-pointer" onClick={() => handleNavigate('base64-decoder')}>
            Base64 Decoder
          </span>
          <span className="px-3 py-2 m-1 rounded-md text-sm font-medium cursor-pointer" onClick={() => handleNavigate('json-formatter')}>
            JSON Formatter
          </span>
          <span className="px-3 py-2 m-1 rounded-md text-sm font-medium cursor-pointer" onClick={() => handleNavigate('jwt-decoder')}>
            JWT Decoder
          </span>
          <span className="px-3 py-2 m-1 rounded-md text-sm font-medium cursor-pointer" onClick={() => handleNavigate('unescape-n-format')}>
            Unescape & Format
          </span>
          <span className="px-3 py-2 m-1 rounded-md text-sm font-medium cursor-pointer" onClick={() => handleNavigate('sql-formatter')}>
            SQL Formatter
          </span>
        </div>
      </div>
    </div>
  </nav>
);
}