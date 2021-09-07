import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';

class NavbarCustom extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://www.pinclipart.com/picdir/big/197-1975006_john-cena-wink-sticker-by-ferdinand-for-clipart.png"
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                        />{' '}
                        Welcome To Gallery Of Horns
                    </Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}

export default NavbarCustom
