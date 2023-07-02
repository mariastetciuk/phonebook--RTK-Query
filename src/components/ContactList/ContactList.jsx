import css from './ContactList.module.css';
import { useGetFetchContactsQuery } from 'redux/contactSlice';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/selectors';

export function ContactList() {
  const { data, isLoading } = useGetFetchContactsQuery();
  // const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  // const { items } = useSelector(getContacts);
  console.log(isLoading, data);
  const filterContact = () => {
    return data.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const contacts = filterContact();

  return (
    <ul className={css.contacts__list}>
      {contacts.map(({ id, name, phone }) => {
        return (
          <li className={css.contacts__item} key={id}>
            {name}: <span className={css.contacts__span}>{phone}</span>
            <button
              className={css.contacts__btn}
              type="button"
              // onClick={() => {
              //   console.log(id, name, phone);
              //   dispatch(deleteContactThunk(id));
              // }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
