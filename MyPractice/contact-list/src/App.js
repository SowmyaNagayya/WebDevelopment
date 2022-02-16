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
    contactData: [
      {
        "contactId": 1, 
        "firstName": "Fake",
        "lastName": "Data",
        "company": "Unknown Inc.",
        "phone": "000-0000",
        "email": "fakedata@unknown.io"
      }]
  }
  
  //We want to use our class component's lifecycle method componentDidMount, 
  //a special method built into the component class that can be overridden with customized behavior. 
  //This method will run after a React component has been mounted to the view.
  componentDidMount() {
    console.log("App is now mounted.")
    this.setState({ loading: true })
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
            <ContactTable contacts={this.state.contactData} />
          </Col>
          <Col sm={4}>
            <h2>Add New Contact</h2>
            <ContactForm />
          </Col>
        </Row>
        {/* <ContactModal /> */}
      </Container>
    );
  }
}

export default App;