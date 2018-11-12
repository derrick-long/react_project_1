import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component {
    state = {
    contacts: [{
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
    }


render() {
    return(
        <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
        )       
    }
}

export const Consumer = Context.Consumer;