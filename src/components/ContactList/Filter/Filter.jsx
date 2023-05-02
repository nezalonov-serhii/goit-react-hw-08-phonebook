import { useDispatch, useSelector } from 'react-redux';

import { getVisibleContact } from 'redux/filterSlice/filterSlice';

import { Label, WrapFilter } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filterValue);

  return (
    <WrapFilter>
      <Label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={e => dispatch(getVisibleContact(e.target.value))}
          placeholder="search"
        />
      </Label>
    </WrapFilter>
  );
}

export default Filter;
