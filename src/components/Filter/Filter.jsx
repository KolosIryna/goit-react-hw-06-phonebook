import { useDispatch, useSelector } from 'react-redux';
import { selectorFilter } from 'redux/filter/selectorFilter';
import { addFilter } from 'redux/filter/sliceFilter';

export const Filter = () => {
  const filter = useSelector(selectorFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(addFilter(event.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <form>
        <input
          type="text"
          placeholder="Search contacts"
          value={filter}
          onChange={handleFilterChange}
          style={{
            padding: '5px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      </form>
    </div>
  );
};
