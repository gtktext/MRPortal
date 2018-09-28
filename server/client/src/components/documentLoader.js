import React, {Component} from 'react';
import PropTypes from 'prop-types';


//element
import ParkingRulesTabs from './parkingRulesTabs';
import Footer from './footer';


//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import { Collapse, Button, CardBody, Card } from 'reactstrap';


class DocumentLoader extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { 
      collapse: [false, false, false],
      jurisdiction: ['Choose', 'Massachusetts', 'Washington', 'BC'],
      stateChoice: '',

               };
  }
  toggle(num) {
    for (var x =0; x< this.state.collapse.length; x++){
      var closed = [false, false, false]
      closed[num] = !closed[num]
      console.log( this.state.collapse);
      this.setState({
        collapse: closed,
      })
      setTimeout(()=>{
                console.log('state.collapse',this.state.collapse)

      }, 1000)

      // this.setState({collapse[0]: false })

    }
  }

  saveUrl =  ()=>{
    console.log('saving URL ', this.refs.url.value);
    alert('Saving web address to the DB and opening it in a new window ' + this.refs.url.value +'   ' + this.refs.urlTitle.value )
    window.open('http://'+this.refs.url.value, '_blank');
    this.refs.url.value = '';
    this.refs.urlTitle.value = '';
  }

  saveDoc = ()=>{
   window.alert('saving '+ this.refs.docSource.value)
  }
  chooseState =(a)=>{
    // var x = (a.value || a.options[a.selectedIndex].value);
    // let d = document.getElementById('inputGroupSelect01');
    // console.log('DDDDDDDDDDDDD is', d)
    // console.log('this is: ', azz.options[azz.selectedIndex].text);

  }

  States = (pickerStyle)=>(this.state.jurisdiction.map((name)=>{
            return (
                   <option  value={name}>{name} </option>
                
              )
          }))

  


  render() {
      let pickerStyle = {
    width: '50%'
  }

  console.log('States are', this.States)
  



    return (
      <div class ='container'>

        {/* Dropdown picker */}
        <div>
          <h1> Document Loader </h1>
          <p> 1. Choose a Jurisdiction </p>
          

          <div class="input-group mb-3" style={pickerStyle}>
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01" style ={{color:'green'}}>Jurisdiction</label>
            </div>
            <select onChange ={this.chooseState()} class="custom-select" id="inputGroupSelect01">

            <this.States />
            </select>
          </div>
          
          <div class="input-group mb-3" style={pickerStyle}>
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01" style ={{color:'green'}}>City</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">Boston</option>
              <option value="2">Cambridge</option>
              <option value="3">Burlington</option>
            </select>
          </div>
        </div>

        {/* Dropdown picker */}


        {/* Select Document */}
        <p>Select New Document Source</p>

        <form>
         <div style={{width:'50%'}}>
          <div class="form-check">
            <label class="form-check-label">

              URL   
              <input ref = 'url' type ='text' style ={{'marginRight':'20px'}}/>
              <br/>
              Title

              <input ref = 'urlTitle' type ='text' style ={{'marginRight':'20px'}}/>

              <button  style = {{color:'green'}} onClick = {this.saveUrl}  value='save'>Save</button>
            </label>

          </div>
         </div>
        </form>
        <br/>
        <hr/>
        <hr/>
        <br/>
        <form>
          <div style={{width:'50%'}}>
          <div class="form-check">
            <label class="form-check-label">
             Document

              <input ref ='docSource' type ='file' style ={{'marginLeft':'20px'}}/>
           


            </label>
            <button onClick = {this.saveDoc}style = {{color:'green'}} type='submit'>Save</button>
          </div>
         </div>  
        </form>
        <br/>
        <hr/>
        <hr/>
        <br/>




        {/* Select Document */}







      {/* acordian */}
        <a onClick={()=>this.toggle(0)}  style={{ marginBottom: '1rem', color: 'green' }}>Laws of massachusetts - part 1 title 13 - Eminent Domain and Betterments</a>
        <Collapse isOpen={this.state.collapse[0]}>
          <Card>
            <CardBody>
            Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse> <br/>
        <a onClick={()=>this.toggle(1)} style={{ marginBottom: '1rem' }}>Laws of massachusetts - part 1 title 14 - Public Ways and Works</a>
        <Collapse isOpen={this.state.collapse[1]}>
          <Card>
            <CardBody>
            Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse> <br/>
        <a onClick={()=>this.toggle(2)}  style={{ marginBottom: '1rem', color: 'red' }}>Laws of massachusetts - part 1 title 15 - Some other descriptio of the law</a>
        <Collapse isOpen={this.state.collapse[2]}>
          <Card>
            <CardBody>
            Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse> <br/>
        <br />
        <Footer />

      </div>

    );
  }
}

export default DocumentLoader;












     // <form className={classes.container} noValidate autoComplete="off">
     //    <TextField
     //      id="name"
     //      label="Name"
     //      className={classes.textField}
     //      value={this.state.name}
     //      onChange={this.handleChange('name')}
     //      margin="normal"
     //    />
     //    <TextField
     //      id="uncontrolled"
     //      label="Uncontrolled"
     //      defaultValue="foo"
     //      className={classes.textField}
     //      margin="normal"
     //    />
     //    <TextField
     //      required
     //      id="required"
     //      label="Required"
     //      defaultValue="Hello World"
     //      className={classes.textField}
     //      margin="normal"
     //    />
     //    <TextField
     //      error
     //      id="error"
     //      label="Error"
     //      defaultValue="Hello World"
     //      className={classes.textField}
     //      margin="normal"
     //    />
     //    <TextField
     //      id="password-input"
     //      label="Password"
     //      className={classes.textField}
     //      type="password"
     //      autoComplete="current-password"
     //      margin="normal"
     //    />
     //    <TextField
     //      id="multiline-flexible"
     //      label="Multiline"
     //      multiline
     //      rowsMax="4"
     //      value={this.state.multiline}
     //      onChange={this.handleChange('multiline')}
     //      className={classes.textField}
     //      margin="normal"
     //    />
     //    <TextField
     //      id="multiline-static"
     //      label="Multiline"
     //      multiline
     //      rows="4"
     //      defaultValue="Default Value"
     //      className={classes.textField}
     //      margin="normal"
     //    />
     //    <TextField
     //      id="helperText"
     //      label="Helper text"
     //      defaultValue="Default Value"
     //      className={classes.textField}
     //      helperText="Some important text"
     //      margin="normal"
     //    />
     //    <TextField
     //      id="with-placeholder"
     //      label="With placeholder"
     //      placeholder="Placeholder"
     //      className={classes.textField}
     //      margin="normal"
     //    />
     //    <TextField
     //      id="textarea"
     //      label="With placeholder multiline"
     //      placeholder="Placeholder"
     //      multiline
     //      className={classes.textField}
     //      margin="normal"
     //    />
     //    <TextField
     //      id="number"
     //      label="Number"
     //      value={this.state.age}
     //      onChange={this.handleChange('age')}
     //      type="number"
     //      className={classes.textField}
     //      InputLabelProps={{
     //        shrink: true,
     //      }}
     //      margin="normal"
     //    />
     //    <TextField
     //      id="search"
     //      label="Search field"
     //      type="search"
     //      className={classes.textField}
     //      margin="normal"
     //    />
     //    <TextField
     //      id="select-currency"
     //      select
     //      label="Select"
     //      className={classes.textField}
     //      value={this.state.currency}
     //      onChange={this.handleChange('currency')}
     //      SelectProps={{
     //        MenuProps: {
     //          className: classes.menu,
     //        },
     //      }}
     //      helperText="Please select your currency"
     //      margin="normal"
     //    >
     //      {currencies.map(option => (
     //        <MenuItem key={option.value} value={option.value}>
     //          {option.label}
     //        </MenuItem>
     //      ))}
     //    </TextField>
     //    <TextField
     //      id="select-currency-native"
     //      select
     //      label="Native select"
     //      className={classes.textField}
     //      value={this.state.currency}
     //      onChange={this.handleChange('currency')}
     //      SelectProps={{
     //        native: true,
     //        MenuProps: {
     //          className: classes.menu,
     //        },
     //      }}
     //      helperText="Please select your currency"
     //      margin="normal"
     //    >
     //      {currencies.map(option => (
     //        <option key={option.value} value={option.value}>
     //          {option.label}
     //        </option>
     //      ))}
     //    </TextField>
     //    <TextField
     //      id="full-width"
     //      label="Label"
     //      InputLabelProps={{
     //        shrink: true,
     //      }}
     //      placeholder="Placeholder"
     //      helperText="Full width!"
     //      fullWidth
     //      margin="normal"
     //    />
     //  </form>