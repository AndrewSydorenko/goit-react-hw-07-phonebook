import { createSlice, createSelector } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

const contactsInitialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
};

const contactsSlice = createSlice({
    name: 'phonebook',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name: name,
                        number: number,
                    },
                };
            },
        },
        deleteContact(state, action) {
            state.contacts = state.contacts.filter(contacts => contacts.id !== action.payload.id)
        },
        setFilter(state, action) {
            state.filter = action.payload
        },

    },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
export const contactsSelector = (state) => state.phonebook.contacts;
export const filterSelector = (state) => state.phonebook.filter;
export const getFilteredContacts = createSelector([contactsSelector, filterSelector], (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase().trim()))
});