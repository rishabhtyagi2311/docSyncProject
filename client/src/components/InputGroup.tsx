import React from 'react';

function InputGroup({ label, type, id, name, required }) {
  return (
    <div className="input-group">
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        placeholder=" "
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default InputGroup;