import React from 'react';
import { Table, Button } from 'react-bootstrap';

//we could actually declare each of these new components within their own file as we have with the other components we've designed so far, 
//these new components will only be used within our ContactTable. 
//It makes sense to add them within the same file and use them inside of the ContactTable render method.
const ContactTableHeader = () => {
    return (
        <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Company</th>
            <th>Phone</th>
            <th>Email</th>
            <th></th>
            <th></th>
        </tr>
    );
}

const ContactTableRow = ({ contact, toggleEdit, toggleDelete}) => {
    return (
        <tr>
            <td>{contact.contactId}</td>
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{contact.company}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
            <td><Button onClick={toggleEdit} value={contact.contactId}>Edit</Button></td>
            <td><Button onClick={toggleDelete} value={contact.contactId}>Delete</Button></td>
        </tr>
    );
}

//we have to rework our original placeholder component into an ES6 class extending React.Component.
//requires us to enclose the original component's return within a render method.
class ContactTable extends React.Component {
     // this static property will initialize a prop with data
    // if it hasn't been provided by the parent component
    // static defaultProps = {
    //     contacts: [
    //         {
    //             "contactId": 1,
    //             "firstName": "Still Fake",
    //             "lastName": "Contact",
    //             "company": "Unknown Inc.",
    //             "phone": "000-0000",
    //             "email": "stillfake@unknown.io"
    //         },
    //         {
    //             "contactId": 2,
    //             "firstName": "So Mysterious",
    //             "lastName": "Contact",
    //             "company": "Unknown Inc.",
    //             "phone": "000-0000",
    //             "email": "somysterious@unknown.io"
    //         }
    //     ]
    // }
    render() {
        // Here is a debug method to monitor incoming contact data
        console.log("Rendering Contact Table:")
        console.log(this.props.contacts)

        return (<Table striped bordered responsive>
            <thead>
                <ContactTableHeader/>
            </thead>
            <tbody>
            {this.props.contacts.map((contact, i) => {
                    return <ContactTableRow contact={contact} key={i}
                                            toggleEdit={this.props.handleEdit}
                                            toggleDelete={this.props.handleDelete} />
                })}
            </tbody>
        </Table>)
    }
}

export default ContactTable