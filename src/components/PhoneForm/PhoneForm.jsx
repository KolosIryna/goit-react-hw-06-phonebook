import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/sliceContacts';
import { selectorContacts } from 'redux/contacts/selectors';
import css from './PhoneForm.module.css';

export const PhoneForm = () => {
  const contacts = useSelector(selectorContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleAddNewContact = formData => {
    const isNameExist = contacts.some(
      contact => contact.name.toLowerCase() === formData.name.toLowerCase()
    );

    if (isNameExist) {
      alert(`${formData.name} is already in contacts.`);
    } else {
      const newContact = {
        id: nanoid(),
        ...formData,
      };
      dispatch(addContact(newContact));
      setName('');
      setNumber('');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleAddNewContact({ name, number });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit} className={css.form}>
        <label>
          <span className={css.title}>Name</span>
          <input
            className={css.input}
            onChange={handleInputChange}
            value={name}
            name="name"
            type="text"
            required
            placeholder="Enter name"
          />
          <span className={css.title}>Number</span>
          <input
            className={css.input}
            onChange={handleInputChange}
            value={number}
            type="tel"
            name="number"
            required
            placeholder="Number"
            minLength="7"
            maxLength="12"
          />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
