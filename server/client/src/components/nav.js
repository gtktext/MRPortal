import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

//
import FaBeer from 'react-icons/lib/fa/beer';
import FaUser from 'react-icons/lib/fa/user';
import FaUserPlus from 'react-icons/lib/fa/user-plus';
import FaGroup from 'react-icons/lib/fa/group';


//Font Awesome
var FontAwesome = require('react-fontawesome');


class Navbar extends Component {
  render() {
    return (
        <div>


          <Nav style ={{backgroundColor:'green'}}>
            <NavItem>
              <img height ='40px'  src = {require('../pics/car.jpeg')} />
            </NavItem>
            <NavItem>
              <NavLink style ={{color:'white'}} href="/signsportal">Signs Portal</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style ={{color:'white'}} href="/garageportal">Garage Portal</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style ={{color:'white'}} href="/">City Portal</NavLink>
            </NavItem>

              
            <NavLink style ={{color:'white'}} href="#"><FaGroup /> Refer a Friend</NavLink>

              
            <NavLink style ={{color:'white'}} href="#"><FaUser /> myAccount</NavLink>
            <NavItem>

              <FontAwesome style ={{color:'white'}} name='rocket' />

            </NavItem>

          </Nav>
          <hr /> 
      </div>
    )
  }
}
export default Navbar;







// import {AppBar, Tabs, Tab} from 'material-ui'

// //icons
// import FaceIcon from '@material-ui/icons/Face';
// import AccountBoxIcon from '@material-ui/icons/AccountBox';
// import PersonAdd from '@material-ui/icons/PersonAdd'


      // <AppBar title="My App" style={{backgroundColor: 'green', marginBottom:'0px'}}>
      //   <Tabs style={{'color':'white'}}>
      //     <Tab label="Signs Portal" />
      //     <Tab label="Garage Portal" />
      //     <a href='/'><Tab label="City Portal" /></a>
      //     <Tab label="Job Provisioning" style = {{marginRight: '50px'}}/>

      //      <a href='/' style={{color:'white'}}> <  AccountBoxIcon style = {{marginTop: '9px', marginRight: '-30px', color:'white'}} /><Tab style={{marginBottom:'10px'}} label='My Account'  />   </a>

      //       <a href='/' style={{color:'white'}} ><PersonAdd style = {{marginTop: '9px', marginRight: '-22px', color:'white'}} />
      //     <Tab style = {{marginBottom:'10px'}} label='Refer a Friend' ><PersonAdd style = {{color:'white'}}/></Tab></a>
     


      //   </Tabs>
      // </AppBar>