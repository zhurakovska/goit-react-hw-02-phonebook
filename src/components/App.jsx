import React from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

import { FormData } from './Form/FormData';
import { Contacts } from './Form/Contacts';
import { Filter } from './Form/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = contact => {
    const contactExists = this.state.contacts.some(
      existingName =>
        existingName.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (contactExists) {
      alert(`${contact.name} is already exist`);
      return;
    }
    // тут мы передаем обьект контакт который представляет собой объект, который содержит информацию о новом контакте, который нужно добавить.
    const { name, number } = contact;
    const id = nanoid();
    this.setState(prev => ({
      contacts: [...prev.contacts, { id, name, number }],
      name: '',
      number: '',
    }));
  };

  handleFilterChange = filterValue => {
    this.setState({ filter: filterValue });
    console.log(filterValue);
  };

  getfilteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  handleDeleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.getfilteredContacts();
    const { filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <FormData onAddContact={this.handleAddContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChangeValue={this.handleFilterChange} />
        <Contacts
          options={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};
