import styled from 'styled-components';
import ContactsForm from './phonebook/ContactsForm';
import { ContactsList } from './contacts/ContacstList';
import { ContactsFilter } from './filter/ContactsFilter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/operations';
import { selectError, selectIsLoading } from './redux/selectors';

const StyledSection = styled.section`
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledSection>
      <div>
        <h1>Phonebook</h1>
        <ContactsForm />
      </div>
      <div>
        <h2>Contacts</h2>
        <ContactsFilter />
        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        <ContactsList />
      </div>
    </StyledSection>
  );
}

export default App;
