import stl from 'components/css/ContactList.module.css'
const ContactsList = ({ contacts, onDeleteContact, onToggleCompleted }) => {
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

export default ContactsList;