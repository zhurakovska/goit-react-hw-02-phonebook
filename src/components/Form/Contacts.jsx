import React from 'react';
import PropTypes from 'prop-types';

export const Contacts = ({ options, onDeleteContact }) => {
  return (
    <ul>
      {options.map(({ id, name, number }) => (
        <li key={id}>
          {name} {number}
          <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
