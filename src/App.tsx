import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

import './App.css';

function App() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">React/GraphQL</Navbar.Brand>
            <Navbar.Collapse>
                <Nav className="mr-auto"></Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default App;
