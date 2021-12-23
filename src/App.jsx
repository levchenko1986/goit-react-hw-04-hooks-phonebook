import { useState } from "react";
import Container from "./components/Container";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import defaultContacts from "./components/contacts.json";
import useLocalStorage from "./components/LocalStorage";
import styles from "./App.css";

function App() {
  const [allContacts, setAllContacts] = useLocalStorage(
    "allContacts",
    defaultContacts
  );
  const [filter, setFilter] = useState("");

  const formSubmit = (data) => {
    if (
      allContacts.find(
        (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      return alert("This contact has already been added to the list");
    }
    setAllContacts([data, ...allContacts]);
  };

  const handleContacts = () => {
    const onContactsFilter = filter.toLowerCase();
    return allContacts.filter((contact) =>
      contact.name.toLowerCase().includes(onContactsFilter)
    );
  };

  const filterChange = (event) => {
    setFilter(event.target.value);
  };

  const deleteContact = (contactId) => {
    setAllContacts(allContacts.filter((contact) => contact.id !== contactId));
  };

  const getContacts = handleContacts();
  return (
    <Container>
      <div className={styles.app}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm onSubmitContact={formSubmit} />
        <h2 className={styles.title}>Contacts</h2>
        <Filter filter={filter} onFilterChange={filterChange} />
        <ContactList getContacts={getContacts} deleteContact={deleteContact} />
      </div>
    </Container>
  );
}

export default App;
