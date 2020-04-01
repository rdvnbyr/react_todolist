import React from 'react';
import { Navbar } from 'react-bootstrap';

function Header({src}) {
    return (
        
        <Navbar style={{background: '#35495e'}} variant="dark" className="container">
            <Navbar.Brand href="#home">
                <img
                    src={ src }
                    width="30"
                    height="30"
                    className="d-inline-block align-top mx-2"
                    alt="React Bootstrap logo"
                />{'  '}
                React_To Do List App
            </Navbar.Brand>
        </Navbar>
        
    )
}


export default Header
