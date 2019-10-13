import React from "react"; 
import {Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse, NavLink} from "reactstrap";

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="container">
                <div className="col text-right">
                <Navbar expand="md">
                    {props.loggedIn ? 
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/contacts/all">See all contacts</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/contacts/new">New contact</NavLink>
                                </NavItem>
                            </Nav>
                                :
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/register">Register</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/login">Login</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/help">Help</NavLink>
                                </NavItem>
                            </Nav>
                        }
                    </Navbar>
                </div>
            </div>
        </div>
    )
}

export default Footer;