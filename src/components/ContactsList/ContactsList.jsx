import propTypes from 'prop-types';
import s from './ContactList.module.css';

export default function ContactsList({ contactsData, onDeleteBtn }) {
  return (
    <>
      <ul>
        {contactsData.map(({ id, name, phone }) => (
          <li key={id}>
            <p className={s.nameText}>
              {name}: <span>{phone}</span>
            </p>
            <button type="button" onClick={e => onDeleteBtn(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

ContactsList.propTypes = {
  onDeleteBtn: propTypes.func,
  contactsData: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string,
      name: propTypes.string,
      phone: propTypes.string,
    }),
  ),
};
