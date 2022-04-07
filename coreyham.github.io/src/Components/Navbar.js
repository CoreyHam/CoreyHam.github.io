import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
export default function MyNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container className='navContainer'>
            <Nav>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}