import React, { Component } from 'react';
import ContactsForm from './js/ContactForm';
import ContactsList from './js/ContactList';
import SearchFilter from './js/ContactFilter';
import json from './js/contacts.json';
import stl from './css/App.module.css';
import shortid from 'shortid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

class App extends Component {
  state = {
    contacts: json,
    fillter: '',
  };

  addContact = ({ name, number }) => {
    console.log(name, number);
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    const initialContacts = this.state.contacts;

    if (initialContacts.some(contact => contact.name === name)) {
      return Notify.warning(`${contact.name} is already in the Phonebook`);
    }
    else if (initialContacts.some(contact => contact.number === number)) {
      return Notify.warning(`${contact.number} is already in the Phonebook`);
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };
  onSubmitData = data => {
    console.log(this.data);
  };
  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };
  changeFillter = e => {
    this.setState({ fillter: e });
  };
  deleteAllContacts = () => {
    this.setState({contacts: []})
  }

  render() {
    const { contacts, fillter } = this.state;
    const normalizedFillter = fillter.toLowerCase();
    const visibleTasks = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFillter)
    );
    return (
      <div className={stl.container}>
        <h1 className={stl.title}>Phonebook</h1>
        <ContactsForm
          onSubmitData={this.onSubmitData}
          onAddContact={this.addContact}
        />
        <h2 className={stl.title}>Contacts</h2>
        <SearchFilter value={fillter} onChangeFilter={this.changeFillter} />
        <ContactsList
          contacts={visibleTasks}
          onDeleteContact={this.deleteContact}
        />
        <button className={stl.btn} type='button' onClick={this.deleteAllContacts} >Delete All</button>
      </div>
    );
  }
}
export default App;
