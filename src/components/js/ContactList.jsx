import stl from 'components/css/ContactList.module.css';
import PropTypes from 'prop-types';
const ContactsList = ({ contacts, onDeleteContact, }) => {
  return (
    <ul className={stl.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li className={stl.contactsList__item} key={id}>
          <p className={stl.contactsList__text}>
            {name}: {number}
              </p>
          <button className={stl.contactsList__btn} type='button' onClick={() => onDeleteContact(id)} >Delete</button>
         
        </li>
      ))}
    </ul>
    
  );
};
ContactsList.prototype = {
  contacts: PropTypes.arrayOf(PropTypes.string),
  onDeleteContact: PropTypes.func.isRequired,
  
}
export default ContactsList;