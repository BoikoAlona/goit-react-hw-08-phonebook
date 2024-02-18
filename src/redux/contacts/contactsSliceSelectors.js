import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;

export const selectFilter = state => state.contacts.filter;

export const selectContactsIsLoading = state => state.contacts.isLoading;

export const selectContactsError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact => {
      const contactName = contact.name || '';
      return contactName.toLowerCase().includes(filter.trim().toLowerCase());
    });
  }
);
