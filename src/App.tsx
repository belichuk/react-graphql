import React, {useState} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {ApolloProvider} from '@apollo/client';
import client from './components/ApolloClient';
import SearchForm from './components/SearchForm';
import GitHubRepos from './components/GitHubRepos';

import './App.css';

function App() {
    const [query, setQuery] = useState('JavaScript');

    return (
        <ApolloProvider client={client}>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">React/GraphQL</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="mr-auto"></Nav>
                    <SearchForm query={query} onSubmit={setQuery} />
                </Navbar.Collapse>
            </Navbar>
            <Container className="content" fluid="lg">
                <GitHubRepos query={query} />
            </Container>
        </ApolloProvider>
    );
}

export default App;
