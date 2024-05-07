# DeLo Tools - Offline Developer Toolkit

## Introduction

During a lunch break, I dedicated an hour to create a small, browser-based Developer Toolkit called named **DeLo Tools**. These tools are designed with privacy and security in mind, ensuring that your data never leaves your browser.

## Features

- **Base64 Decoder**: Decode any Base64 encoded data instantly.
- **JSON Formatter + PII Redactor**: Beautify your JSON and automatically redact personally identifiable information (PII).
- **JWT Decoder**: Decode and analyze JSON Web Tokens (JWTs).
- **Un-escaper and Formatter**: Un-escape and format SQL, XML, JSON values from log entries and objects.
- **SQL Formatter**: Cleanly format and indent your SQL queries for better readability.
- **Hash Generator**:  Generate hashes using various algorithms like MD5, SHA-1, SHA-256, and more.
- **Random Data Generator**: Generate random data, including ID, UDID, password, and personal information, for testing purposes.

Live URL: [https://tools.delorenzi.me](https://tools.delorenzi.me)

## Frequently Asked Questions (FAQ)

### Why another developer toolkit?

Online tools, while convenient, often send data to their backend for processing, which raises security and privacy concerns. DeLo Tools do not send your data anywhere; each tool runs entirely within the browser.

The open source nature of the project means you can clone it, run it locally, and inspect the code at any time, ensuring full transparency and compliance.

### What's  about this unescaper feature?

Logs and outputs often contain escaped characters that make reading the content challenging.
This feature of DeLo Tools can convert entries, such as:
```
"SELECT \"id\", \"field1\" AS \"_0\", \"field2\", \"field3\", \"field4\""
```

into
```
SELECT
    "id",
    "field1" AS "_0",
    "field2",
    "field3",
    "field4"
```

## Contributing

Your thoughts, ideas for improvement, and contributions are warmly welcomed.

Francesco De Lorenzi
