import { createSelector } from "@reduxjs/toolkit";
export const selectContacts = state => state.phonebook.contacts.items;
export const selectIsLoading = state => state.phonebook.contacts.isLoading;
export const selectError = state => state.phonebook.contacts.error;
export const selectFilter = state => state.phonebook.filter;
export const getFilteredContacts = createSelector([selectContacts, selectFilter], (items, filter) => {
    return items.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase().trim()))
});