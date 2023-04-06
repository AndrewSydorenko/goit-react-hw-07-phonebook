import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getFilteredContacts } from '../redux/contactsSlice';

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 0;
  & li {
    background-color: #3973a796;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
  }
  & button {
    background-color: #3973a796;
    border: 1px solid grey;
    color: antiquewhite;
    border-radius: 10px;
    &:hover,
    :focus {
      color: #3973a796;
      background-color: antiquewhite;
    }
  }
`;

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  const handleDelete = id => {
    dispatch(deleteContact({ id }));
  };
  return (
    <StyledList>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </StyledList>
  );
};
