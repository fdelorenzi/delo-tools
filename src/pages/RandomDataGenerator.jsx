import React, { useState } from 'react';
import { faker } from '@faker-js/faker';

export default function RandomDataGenerator() {
  const [dataType, setDataType] = useState('ID');
  const [generatedData, setGeneratedData] = useState('');

  const handleDataTypeChange = (event) => {
    setDataType(event.target.value);
  };

  const generateData = () => {
    let data = '';
    switch (dataType) {
      case 'ID':
        data = faker.datatype.number();
        break;
      case 'UUID':
        data = faker.datatype.uuid();
        break;
      case 'Random Password':
        data = faker.internet.password();
        break;
      case 'Full Sample Profile':
        data = {
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          address: faker.location.streetAddress(),
          phoneNumber: faker.phone.number(),
          email: faker.internet.email(),
        };
        break;
      default:
        data = '';
    }
    setGeneratedData(JSON.stringify(data, null, 2));
  };

  return (
    <div id="fake-data-generator" className="mt-6">
      <h1 className="text-3xl font-bold text-center my-10">
        Random Data Generator
      </h1>
      <div>
        <input
          type="radio"
          id="id"
          name="dataType"
          value="ID"
          checked={dataType === 'ID'}
          onChange={handleDataTypeChange}
        />
        <label htmlFor="id">ID</label>
      </div>
      <div>
        <input
          type="radio"
          id="uuid"
          name="dataType"
          value="UUID"
          checked={dataType === 'UUID'}
          onChange={handleDataTypeChange}
        />
        <label htmlFor="uuid">UUID</label>
      </div>
      <div>
        <input
          type="radio"
          id="password"
          name="dataType"
          value="Random Password"
          checked={dataType === 'Random Password'}
          onChange={handleDataTypeChange}
        />
        <label htmlFor="password">Random Password</label>
      </div>
      <div>
        <input
          type="radio"
          id="profile"
          name="dataType"
          value="Full Sample Profile"
          checked={dataType === 'Full Sample Profile'}
          onChange={handleDataTypeChange}
        />
        <label htmlFor="profile">Full Sample Profile</label>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
        onClick={generateData}
      >
        Generate Data
      </button>
      <pre>{generatedData}</pre>
    </div>
  );
}