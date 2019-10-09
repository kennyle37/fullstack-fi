import React from 'react';

const PersonForm = ({ handleSubmit, handleOnNameChange, handleOnNumberChange}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new:</h2>
      <div>
        name: <input onChange={handleOnNameChange} />
      </div>
      <div>
        number: <input onChange={handleOnNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;