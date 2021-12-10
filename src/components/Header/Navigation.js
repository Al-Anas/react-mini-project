import React from "react";
import {Navbar,NavbarBrand} from 'reactstrap';

const Navigation=()=>{

    return (
        <div>
           <Navbar color="dark">
               <div className="container">
                  <NavbarBrand href="/">Al Anas</NavbarBrand>
               </div>
           </Navbar>
        </div>
    )
}

export default Navigation;