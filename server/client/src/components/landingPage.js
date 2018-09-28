import React from 'react';
import PropTypes from 'prop-types';


import {Button, UncontrolledCollapse, Card, CardBody,Collapse} from 'reactstrap'




//work to get rid of all material ui
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


//which relies on the below:
import Collapsible from 'react-collapsible';
//react-responsive-accordian
// import Accordion from 'react-responsive-accordion';







import Footer from './footer'

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});
// for Collapsible
const buttonName = 'testing'
const docs =[
  {'Massachussets':[{'Boston':['BackBay','FrontBay']}, {'Cambridge':['neigh1', 'neigh2']}]},

  {'Washington':[{'Seattle':['Ballard','Fremont']}, {'Spokane':['neigh1', 'neigh2']}]} 
  ];

// const docs = ['states':['Washington','Oregon','California']]




function alertNewSubJurisdictionSubCity(){
  alert('Add new neighborhood')
}
function alertNewCity(){
  alert('Add new City')
}
function alertNewState(){
  alert('Add new State')
}

function SimpleExpansionPanel(props) {
  var that = this


  const { classes } = props;
  return (
    <div>
    <Button  href='/auth/google' className = 'btn btn-success' onClick={props.getMore}>Login with Google</Button>
    <hr />
    <testDocs />
    <Button style={{'color':'white','width': '100%','textAlign':'left'}} className='btn btn-success' onClick={alertNewState}>Add State</Button>

    {docs.map((doc,docs)=>{
      console.log('Doc is', Object.keys(doc), doc[Object.keys(doc)])
      return(



      <div><Button><Collapsible  trigger={Object.keys(doc)} >
      <Button style={{'color':'white','marginLeft':'40px','width': '100%','textAlign':'left'}} className='btn btn-success' onClick={alertNewCity} >Add City</Button>
        {doc[Object.keys(doc)].map((city)=>{
          console.log('city is', city)
          let indentCity = Object.keys(city)
         return <div ><Button style={{'width':'100%','marginLeft':'45px','textAlign':'left'}}><Collapsible trigger={indentCity}>
                 <Button style={{'color':'white','marginLeft':'30px'}} className='btn btn-success' onClick={alertNewSubJurisdictionSubCity}>Add Neighborhood</Button>
                  {city[Object.keys(city)].map((neigh)=>{
                    let indentNeigh = '' +neigh

                    console.log('Neighborhood',neigh)
                    return (
                    <div>
                    <Button style={{'color':'white','marginLeft':'30px'}}><Collapsible trigger = {indentNeigh}>
                       
                    </Collapsible></Button><br/></div>

                    )
                  })}

                </Collapsible></Button><br/></div>})

        }
      </Collapsible></Button><br/></div>
      ) }       )
    }



   





          <div>
            <h3>
              Three easy steps to Administer new rules
            </h3>
            <ol>
              <a href = '#'><li> Load a reference copy of the document. </li> </a>
              <a href = '/documentloader'><li> Parse the document into individual rules. </li> </a>
              <a href = '#'><li> Define rules for jurisdiction and assign them to documents </li> </a>
            </ol>
          </div>

        <hr />

        <Footer />


        { console.log('props', props)}

    </div>



  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);




// ,  {'Washington':['Seattle','Spokane']}, {'California':['L.A.','SanFrancisco']}



// import React from 'react'
// import {AppBar, Tabs, Tab} from 'material-ui'

// class LandingPage extends React.Component {
//   render() {
//     return (
//       <div>
//         <hr />
//         <h1> Rules Administration Portal</h1>
//       </div>
//     )
//   }
// }
// export default LandingPage;