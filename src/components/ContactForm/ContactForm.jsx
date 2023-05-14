import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from "prop-types";
import styles from './contactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  idContacts = nanoid();

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    this.props.onSubmit(name.value, number.value);
    name.value = '';
    number.value = '';
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label htmlFor={this.idContacts}>
          <p>Name</p>
          <input
            id={this.idContacts}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={this.idContacts}>
          <p>Number</p>
          <input
            id={this.idContacts}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
