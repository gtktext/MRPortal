import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap'
// import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Modal from '@material-ui/core/Modal';
// import Button from '@material-ui/core/Button';
// //form
// import {FormControl, FormControlLabel, FormGroup, FormHelperText, MenuItem} from '@material-ui/core';

// //select
// import { Select, SelectInput } from '@material-ui/core'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 
  const left = 50 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 140,
    height: theme.spacing.unit * 100,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
    city:'Boston',
    cities: ['Boston', 'Seattle', 'Portland'],
    selectedCity:'',
    parseTypes:['Part', 'Title', 'Article', 'Section', 'Paragraph'],  
    
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange = (e)=>{
    var key = e.target
    this.setState({
      selectedCity:e.target.value
    })
    console.log(this.state)
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
   
        <Button className = 'btn btn-danger' onClick={this.handleOpen}>Add New Rule</Button>
        
      </div>
    );
  }
}


// We need an intermediary variable for handling the recursive nesting.
// const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModal








// <MenuItem value={this.state.cities[1]}>{this.state.cities[1]}</MenuItem>
// <MenuItem value='seattle'>Seattle</MenuItem>
// <MenuItem value='Portland'>Portland</MenuItem>







// <Modal
//           aria-labelledby="simple-modal-title"
//           aria-describedby="simple-modal-description"
//           open={this.state.open}
//           onClose={this.handleClose}
//         >
//           <div style={getModalStyle()} className={classes.paper}>
//             <Typography variant="title" id="modal-title">
//               Fill in this form
//             </Typography>
//             <br /> <br />
//             <FormGroup>

//                <div style = {{display:'flex', flexDirection:'row'}}>
//                 <div style ={{backgroundColor:'', display:'flex', flexDirection:'column', width:'50%'}}>
//                   <div style= {{display:'flex'}}>
//                     <label style={{width:'30%', fontWeight:'bold'}}> Jurisdiction </label>
//                     <Select
//                               value = {this.state.selectedCity}
//                               style= {{width:'60%'}}
//                               onChange={this.handleChange}
//                               inputProps={{
//                                 name: 'City',
//                                 id: 'age-simple',
//                               }}
//                             >
//                       <MenuItem value="">
//                         <em>None</em>
//                       </MenuItem>
//                       {this.state.cities.map((city)=>{
//                         return <MenuItem value={city}>{city}</MenuItem>
//                       })}
                      
//                     </Select>
//                   </div>
//                   <div style={{display:'flex', marginTop:'40px'}}>
//                     <label style = {{width:'30%', fontWeight:'bold'}}>Document:</label>
//                     <label>Traffic Rules and Regulations City of {this.state.city}</label>
//                   </div>

//                 </div>

//                 <div style ={{backgroundColor:'', display:'', flexDirection:'column', width:'50%', margin:'auto'}}>
//                     <div style ={{display:'flex', flexDirection:'row', marginBottom: '5px'}}>
//                       <label style ={{marginRight:'10px'}}>1</label>
//                       <Select
//                               value = {this.state.selectedCity}
//                               style= {{width:'50%'}}
//                               onChange={this.handleChange}
//                               inputProps={{
//                                 name: 'City',
//                                 id: 'age-simple',
//                               }}
//                             >
//                         <MenuItem value="">
//                           <em>None</em>
//                         </MenuItem>
//                         {this.state.parseTypes.map((type)=>{
//                           return <MenuItem value={type}>{type}</MenuItem>
//                         })}
//                       </Select>
//                       <input type='text' />
//                     </div>


//                     <div style ={{display:'flex', flexDirection:'row', marginBottom: '5px'}}>
//                       <label style ={{marginRight:'10px'}}>2</label>
//                       <Select
//                               value = {this.state.selectedCity}
//                               style= {{width:'50%'}}
//                               onChange={this.handleChange}
//                               inputProps={{
//                                 name: 'City',
//                                 id: 'age-simple',
//                               }}
//                             >
//                         <MenuItem value="">
//                           <em>None</em>
//                         </MenuItem>
//                         {this.state.parseTypes.map((type)=>{
//                           return <MenuItem value={type}>{type}</MenuItem>
//                         })}
//                       </Select>
//                       <input type='text' />
//                     </div>

//                      <div style ={{display:'flex', flexDirection:'row', marginBottom: '5px'}}>
//                       <label style ={{marginRight:'10px'}}>3</label>
//                       <Select
//                               value = {this.state.selectedCity}
//                               style= {{width:'50%'}}
//                               onChange={this.handleChange}
//                               inputProps={{
//                                 name: 'City',
//                                 id: 'age-simple',
//                               }}
//                             >
//                         <MenuItem value="">
//                           <em>None</em>
//                         </MenuItem>
//                         {this.state.parseTypes.map((type)=>{
//                           return <MenuItem value={type}>{type}</MenuItem>
//                         })}
//                       </Select>
//                       <input type='text' />
//                     </div>

//                      <div style ={{display:'flex', flexDirection:'row', marginBottom: '5px'}}>
//                       <label style ={{marginRight:'10px'}}>4</label>
//                       <Select
//                               value = {this.state.selectedCity}
//                               style= {{width:'50%'}}
//                               onChange={this.handleChange}
//                               inputProps={{
//                                 name: 'City',
//                                 id: 'age-simple',
//                               }}
//                             >
//                         <MenuItem value="">
//                           <em>None</em>
//                         </MenuItem>
//                         {this.state.parseTypes.map((type)=>{
//                           return <MenuItem value={type}>{type}</MenuItem>
//                         })}
//                       </Select>
//                       <input type='text' />
//                     </div>

//                      <div style ={{display:'flex', flexDirection:'row', marginBottom: '5px'}}>
//                       <label style ={{marginRight:'10px'}}>5</label>
//                       <Select
//                               value = {this.state.selectedCity}
//                               style= {{width:'50%'}}
//                               onChange={this.handleChange}
//                               inputProps={{
//                                 name: 'City',
//                                 id: 'age-simple',
//                               }}
//                             >
//                         <MenuItem value="">
//                           <em>None</em>
//                         </MenuItem>
//                         {this.state.parseTypes.map((type)=>{
//                           return <MenuItem value={type}>{type}</MenuItem>
//                         })}
//                       </Select>
//                       <input type='text' />
//                     </div>


//                 </div>





//                </div>
// {/* bottom div */}
//                 <div style ={{backgroundColor:'green'}}>
//                   <div style = {{display:'flex'}}>
//                     <label>Regulation Titles</label>
//                 </div>
//               </div>

//             </FormGroup>


//           </div>
//         </Modal>