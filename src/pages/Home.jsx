import React from "react";
import { Link } from "react-router-dom";
import  ToolCard  from "../components/ToolCard";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-10">
        Offline Developer Tools
      </h1>
      <p className="text-center my-4">
        Fully offline tools, running on your browser to keep your data safe. Use
        them directly in your browser, check the code or clone the repo locally
        for added security and compliance.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/base64-decoder">
          <ToolCard
            title="Base64 Decoder"
            description="Efficiently decode Base64 encoded data, ensuring accurate results with every use."
            iconClass="fas fa-code"
          />
        </Link>
        <Link to="/json-formatter">
          <ToolCard
            title="JSON Formatter"
            description="Instantly transform your JSON strings into a human-readable format. Optionally redact PII."
            iconClass="fas fa-stream"
          />
        </Link>
        <Link to="/jwt-decoder">
          <ToolCard
            title="JWT Decoder"
            description="Decode and inspect the contents of JWTs to verify their structure and debug payload data."
            iconClass="fas fa-key"
          />
        </Link>
        <Link to="/unescape-n-format">
          <ToolCard
            title="Unescape & Format"
            description="Automatically detect escaped characters and format strings for SQL, XML, and JSON."
            iconClass="fas fa-wrench"
          />
        </Link>
        <Link to="/sql-formatter">
          <ToolCard
            title="SQL Formatter"
            description="Beautify and standardize SQL queries using a syntax highlighter and formatter."
            iconClass="fas fa-database"
          />
        </Link>
        <Link to="/hash-generator">
          <ToolCard
            title="Hash Generator"
            description="Generate hashes using various algorithms like MD5, SHA-1, SHA-256, and more."
            iconClass="fas fa-lock"
          />
        </Link>
        <Link to="/random-data-generator">
          <ToolCard
            title="Random Data Generator"
            description="Generate random data, including ID, UDID, password, and personal information, for testing purposes."
            iconClass="fas fa-user-secret"
          />
        </Link>
      </div>
    </>
  );
}
