import React from 'react';
import ContactTable from './components/ContactTable'
import ContactForm from './components/ContactForm'
import ContactModal from './components/ContactModal'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const SERVICE_URL = "http://contactlist.us-east-1.elasticbeanstalk.com"

class App extends React.Component {

  state = {
    loading: false,
    showEditModal: false,
    contactData: [
      {
        "contactId": 1, 
        "firstName": "Fake",
        "lastName": "Data",
        "company": "Unknown Inc.",
        "phone": "000-0000",
        "email": "fakedata@unknown.io"
      }],
      newContactData: {
        firstName: '',
        lastName: '',
        company: '',
        phone: '',
        email: ''
      },
      editContactData: {
        "contactId": 42,
        "firstName": "Zaphod",
        "lastName": "Beeblebrox",
        "company": "Heart of Gold",
        "phone": "000-0000",
        "email": "prez@badnews.us"
      }
  }
  
  handleAddFormChange = (event) => {
    // The event triggering this function should be an input's onChange event
    // We need to grab the input's name & value so we can associate it with the
    // newContactData within the App's state.
    let inputName = event.target.name;
    let inputValue = event.target.value;
    let contactInfo = this.state.newContactData;

    console.log(`Updating new contact data: ${inputName} : ${inputValue}`)

    if (contactInfo.hasOwnProperty(inputName)) {
      contactInfo[inputName] = inputValue;
      this.setState({ newContactData: contactInfo })
    }
  }

  //submitButton
  handleAddFormSubmit = (event) => {
    console.log("Adding contact!")
    if (event) event.preventDefault();

    fetch(SERVICE_URL + '/contact/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.newContactData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Add Contact - Success:', data);
        this.setState({ newContactData: { firstName: '', lastName: '', company: '', phone: '', email: '' } })
        //However, simply handling the submission of the form doesn't fully take into consideration the best user experience, 
        //because once a new contact is loaded, we need our ContactTable to be updated with the new information. 
        //This means we need to reload our data. Also, the ContactForm should be emptied, 
        //so that the user doesn't have to delete all of the information just to enter a new contact.
        this.loadContactData();
      })
      .catch((error) => {
        console.log('Add Contact - Error:')
        console.log(error)
      });
  }

  loadContactData() {
    this.setState({ loading: true })
    console.log("Loading contact data")
    fetch(SERVICE_URL + "/contacts")
      .then(data => data.json())
      .then(data => this.setState(
        { contactData: data, loading: false }
      ))
  }

  //EventHandlers for Open and Close ContactModal
  handleEditModalClose = (event) => {
    console.log("Closing Edit Modal")
    this.setState({ showEditModal : false})
 }

 handleEditModalOpen = (event) => {
    console.log("Opening Edit Modal")
    if (event) event.preventDefault();
    let contactId = event.target.value;
    console.log(`Editing contact id ${contactId}`)
    this.setState({ showEditModal : true})
 }
  //We want to use our class component's lifecycle method componentDidMount, 
  //a special method built into the component class that can be overridden with customized behavior. 
  //This method will run after a React component has been mounted to the view.
  componentDidMount() {
    console.log("App is now mounted.")
    //before create
    //this.setState({ loading: true })
    this.loadContactData();
    console.log("Loading contact data")
   // Within the method, we can call fetch to retrieve data from the contact list web service and then use setState to update the App contactData state variable. 
   //Once setState has been executed, the React DOM will trigger a re-render of our component, 
   //which should replace our previously hard-coded data with the newly retrieved information.
    fetch(SERVICE_URL + "/contacts")
      .then(data => data.json())
      .then(data => this.setState(
        //we can pass along the state object with the new contact data and the loading toggle set to false
        { contactData: data, loading: false }
      ))
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h1 className="text-center">Contact Application</h1>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm={8}>
            <h2>My Contacts</h2>
            <ContactTable contacts={this.state.contactData}
                          handleEdit={this.handleEditModalOpen} />
          </Col>
          <Col sm={4}>
            <h2>Add New Contact</h2>
            <ContactForm 
                         handleSubmit={this.handleAddFormSubmit}
                         handleChange={this.handleAddFormChange}
                         contactData={this.state.newContactData} />
          </Col>
        </Row>
        <ContactModal
         show={this.state.showEditModal}
         handleClose={this.handleEditModalClose}
         contactData={this.state.editContactData} />
      </Container>
    );
  }
}

export default App;