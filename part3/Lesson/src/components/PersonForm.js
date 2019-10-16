import React from 'react';

const PersonForm = ({ handleSubmit, handleOnNameChange, handleOnNumberChange, name, number }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new:</h2>
      <div>
        name: <input onChange={handleOnNameChange} value={name} />
      </div>
      <div>
        number: <input onChange={handleOnNumberChange} value={number} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;