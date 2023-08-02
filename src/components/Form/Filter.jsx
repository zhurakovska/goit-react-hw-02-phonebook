import React from 'react';
import PropTypes from 'prop-types';

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

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};
