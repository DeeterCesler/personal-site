import React, {Component} from "react";
import {Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse, NavLink} from "reactstrap";

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
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Deeter Cesler - Chad version 1.0</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/#home">home</NavLink>
                                </NavItem>
                                {/* <NavItem>
                                    <NavLink href="/#portfolio">portfolio</NavLink>
                                </NavItem> */}
                                <NavItem>
                                    <NavLink href="/#about">about</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/#contact">contact</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/blog">blog</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/now">now</NavLink>
                                </NavItem>
                            </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}