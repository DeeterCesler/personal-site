import React, {Component} from "react";
import {Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse, NavLink} from "reactstrap";
import {HashLink} from "react-router-hash-link";

export default class NavBar extends Component{
    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
        return(
            <div id="navbar">
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Deeter Cesler - Chad version 1.0</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/#home">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/#portfolio">Portfolio</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/#about">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/#contact">Contact</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/blog">Blog</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/now">Now</NavLink>
                                </NavItem>
                            </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}