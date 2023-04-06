import styled from 'styled-components';
import ContactsForm from './phonebook/ContactsForm';
import { ContactsList } from './contacts/ContacstList';
import { ContactsFilter } from './filter/ContactsFilter';

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
  return (
    <StyledSection>
      <div>
        <h1>Phonebook</h1>
        <ContactsForm />
      </div>
      <div>
        <h2>Contacts</h2>
        <ContactsFilter />
        <ContactsList />
      </div>
    </StyledSection>
  );
}

export default App;
