import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/sliceContacts';
import { selectorContacts } from 'redux/contacts/selectors';
import { selectorFilter } from 'redux/filter/selectorFilter';
import css from './Contacts.module.css';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);
  const filter = useSelector(state => selectorFilter(state));

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ul>
      {getFilteredContacts().map(contact => (
        <li key={contact.id} className={css.item}>
          {contact.name}: {contact.number}
          <button
            className={css.button}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
