import React, {useState} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import SearchForm from './components/SearchForm';

import './App.css';

function App() {
    const [query, setQuery] = useState('JavaScript');

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">React/GraphQL</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="mr-auto"></Nav>
                    <SearchForm query={query} onSubmit={setQuery} />
                </Navbar.Collapse>
            </Navbar>
            <div className="container">{query}</div>
        </div>
    );
}

export default App;
