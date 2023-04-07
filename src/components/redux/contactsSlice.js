import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";


const contactsInitialState = {
    contacts: {
        items: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        isLoading: false,
        error: null
    },
    filter: ''
};


const contactsSlice = createSlice({

    name: 'phonebook',
    initialState: contactsInitialState,
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.contacts.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error = action.payload;
            })
            .addCase(addContact.pending, (state) => {
                state.contacts.isLoading = true;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items.push(action.payload);
            })
            .addCase(addContact.rejected, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error = action.payload;
            })
            .addCase(deleteContact.pending, (state) => {
                state.contacts.isLoading = true;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items = state.contacts.items.filter(items => items.id !== action.payload.id)
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error = action.payload;
            })
    }
});

export const { setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
