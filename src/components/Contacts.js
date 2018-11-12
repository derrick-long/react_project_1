import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {
    state = {
            contacts: [
                {
                    id: 1,
                    name: 'John Doe',
                    email: 'jdoe@gmail.com',
                    phone: '555-555-5555'
                
                },
                {
                    id: 2,
                    name: 'Karen Williams',
                    email: 'karenw@gmail.com',
                    phone: '442-535-4444'

                },
                {
                    id: 3,
                    name: 'Felix Biederman',
                    email: 'biderman@gmail.com',
                    phone: '666-666-6666'

                }
            ]
        };

  render() {
      const { contacts } = this.state;
   
      return (
      <React.Fragment>
        {contacts.map(contact=>(
             <Contact  
             key={contact.id}
             contact={contact}
             />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;