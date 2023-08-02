import React from 'react';

export const Filter = ({ filter, onChangeValue }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Write contact"
        value={filter}
        onChange={e => onChangeValue(e.target.value)}
      />
    </div>
  );
};
