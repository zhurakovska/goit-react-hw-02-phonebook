import React from 'react';

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
