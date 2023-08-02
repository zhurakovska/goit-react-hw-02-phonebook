import React from 'react';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class FormData extends React.Component {
  state = INITIAL_STATE;

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    this.props.onAddContact({
      // тут мы получаем наш contact деструтуризируем
      // тут мы передаем значения name и number(которое записали в инпуте) при сабмите мы прокидываем это в contact
      name: name,
      number: number,
    });

    this.setState(INITIAL_STATE);
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name:
            <input
              onChange={this.handleInputChange}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="">
            Number:
            <input
              onChange={this.handleInputChange}
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button>Add contact</button>
        </form>
      </>
    );
  }
}
