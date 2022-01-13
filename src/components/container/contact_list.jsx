import React from 'react';
import ContactComponent from "../pure/contact";
import { Contact } from '../../models/contact.class';

const ContactListComponent = () => {

  const newContact = new Contact('Juan', 'Perez', 'mail@deprueba.com', false);

  return (
    <div>
      <div>
        <h1>
          Lista de Contactos
        </h1>
      </div>
      <ContactComponent contact={newContact}></ContactComponent>
    </div>
  );
};

export default ContactListComponent;
