import propTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter({ value, onChangeFilter }) {
  return (
    <>
      <label className={s.text} name="filter" htmlFor="filter" value={value}>
        Find contacts by name
      </label>
      <input
        value={value}
        type="text"
        id="filter"
        onChange={e => onChangeFilter(e.target.value)}
      />
    </>
  );
}

Filter.propTypes = {
  value: propTypes.string,
  onChangeFilter: propTypes.func,
};
