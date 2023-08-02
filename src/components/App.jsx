import React from 'react';

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
    name: '',
    number: '',
  };

  handleAddContact = contact => {
    // тут мы передаем обьект контакт который представляет собой объект, который содержит информацию о новом контакте, который нужно добавить.
    const { name, number } = contact;
    const id = nanoid();
    this.setState(prev => ({
      contacts: [...prev.contacts, { id, name, number }],
      name: '',
      number: '',
    }));
  };

  handleDeleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <FormData onAddContact={this.handleAddContact} />

        <h2>Contacts</h2>
        <Filter />
        <Contacts
          options={contacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </>
    );
  }
}
