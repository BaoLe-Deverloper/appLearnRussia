import React, { Component } from "react";
import './style.css';
import {
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    Nav,
} from "shards-react";

class navbarIndex extends Component {

 
    render() {

        return (

            <Navbar style={{ width: "100%", "zIndex": 1000 }} expand="md">
                <NavbarBrand href="#">App Learn Russian</NavbarBrand>
                    <Nav navbar className="ml-auto">
                    <NavItem>
                        <NavLink active href="#">
                           Info Apps
                         </NavLink>
                    </NavItem>
                      
                    </Nav>
               
              
            </Navbar>


        );
    }
}



export default navbarIndex;