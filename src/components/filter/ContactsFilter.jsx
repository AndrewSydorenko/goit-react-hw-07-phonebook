import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/contactsSlice';
import { selectFilter } from 'components/redux/selectors';

const StyledInput = styled.input`
  background-color: antiquewhite;
  border: 1px solid grey;
  border-radius: 10px;
  &:hover,
  :focus {
    border: 1px solid #3973a796;
  }
`;

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleFilterUpdate = e => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <div>
      <StyledInput value={filter} type="text" onChange={handleFilterUpdate} />
    </div>
  );
};
