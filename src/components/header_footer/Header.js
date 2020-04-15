import React, { Component } from 'react';
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import CityLogo from "../ui/icons";

class Header extends Component {
    render() {
        return (
           <AppBar
               position="fixed"
               style={{
                   background: '#235c8a',
                   boxShadow: 'none',
                   padding: '10px 0',
                   borderBottom: '2px solid #00285e'
               }}
           >
               <Toolbar
                   style={{ display: 'flex' }}
               >
                   <div style={{ flexGrow: 1 }}>
                        <div className="header_logo">
                            <CityLogo
                                link={true}
                                linkTo="/"
                                width="70px"
                                height="70px"
                            />
                        </div>
                   </div>

                   <Link to="/the_team">
                       <Button color="inherit">The team</Button>
                   </Link>
                   <Link to="/the_matches">
                       <Button color="inherit">The team</Button>
                   </Link>
               </Toolbar>
           </AppBar>
        );
    }
}

export default Header;