//Document loader




import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


//radio buttons
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';


//accordian
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';








const { classes } = this.props;

    return (
 
     <div style={{marginLeft:'20px'}} >
          {/*  <ParkingRulesTabs /> */}
      <h1>Document Loader </h1>


//marked out to replace with bootstrap
      <FormGroup className='well'>

      <h3>1. Choose a jurisdiction: </h3>

          <div className='container' >
          <FormLabel>jurisdiction</FormLabel>
          <FormGroup style={{maxWidth: '30%'}}>
            <TextField
              id="select-currency"
              select
              label=""
              value={this.state.states}
              onChange={this.handleChange('states')}

              helperText="Please choose a State or Province"
              margin="normal"
            >
              {states.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormGroup>
           </div>
           <div>
           <h3> 2. Select New Document Source</h3>

           <div >
            <FormControl style={{width:'80%'}} component="fieldset" required className={classes.formControl}>


                  <div>
                    <label>Web Address: </label>
                     <input style = {{'display':'inline-block', width:'50%'}} type = 'text' ref ='URLLink'/>

                     <Button onClick={this.openURL}   variant='raised' style={{color:'white', margin:'20px', backgroundColor:'green'}} className='classes.button' variant="outlined" >Open URL </Button>



                   </div>

          
                <div>
                     <label>Document: </label>

           
                     <textarea style = {{'display':'inline-block', width:'50%'}} name="" id="" cols="30" rows="10" />
                     <Button name ="openURL" variant='raised' style={{color:'white', margin:'20px', backgroundColor:'green'}} className='classes.button' variant="outlined" >Browse </Button>
                     <div style = {{display:'inline-block'}}>
                      <FormLabel> Title</FormLabel>
                      <input type='text' />
                      
                     </div>




                </div>

   
              <div>
              <h3>3. Save Document </h3>
               <Button variant='raised' style={{color:'white', backgroundColor:'green'}} size='medium' className='classes.button'>Submit</Button>
              </div>
            </FormControl>
           </div>
   




           </div>



        </FormGroup>


        <h3 style={{marginTop:'30px'}}> Existing Documents </h3>



        {/* ACcordian for local regs */}
        <ExpansionPanel >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}  ><b>General Laws of massachusetts - part 1 title 13 - Eminent Domain and Betterments</b></Typography>
          </ExpansionPanelSummary>
          

                  <ExpansionPanel style = {{'marginLeft': '50px'}}>
                      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Typography>
                      </ExpansionPanelSummary>
                      
                    </ExpansionPanel>



              {/* 
                    // <ExpansionPanel style = {{'marginLeft': '50px'}}>
                    //   <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    //     <Typography className={classes.heading} >North End</Typography>
                    //   </ExpansionPanelSummary>
                    // </ExpansionPanel>

                    // //Add new (clickable)
                    // <ExpansionPanel  style = {{'marginLeft': '50px'}}>
                    //   <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    //     <Typography className={classes.heading} >Add New Sub Jurisdiction</Typography>
                    //   </ExpansionPanelSummary>
                    // </ExpansionPanel> */}

        </ExpansionPanel> 

        <ExpansionPanel >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}  ><b>General Laws of massachusetts - part 1 title 14 - Public Ways and Works</b></Typography>
          </ExpansionPanelSummary>
              <ExpansionPanel style = {{'marginLeft': '50px'}}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Typography>
                  </ExpansionPanelSummary>
                      
              </ExpansionPanel>
        </ExpansionPanel> 
        <Footer />

      </div>





      const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

const states = [
  {
    value: 'WA',
    label: 'Washington'
  },
  {
    value: 'MA',
    label: 'Massachusets',
  },
  {
    value: 'NY',
    label: 'New York',
  },
  {
    value: 'BC',
    label: 'British Columbia',
  },
];

class TextFields extends React.Component {
  constructor(props){
    super(props);
    console.log('Props coming in are:',this.props)
  }
  state = {

  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  openURL = () => {
    console.log(this.refs.URLLink.value, 'to be opened')
    window.open('http://'+this.refs.URLLink.value )
  }

  render() {
    return(
      

        	<!--Accordion wrapper-->
<div class="accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

    <!-- Accordion card -->
    <div class="card">

        <!-- Card header -->
        <div class="card-header" role="tab" id="headingOne">
            <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <h5 class="mb-0">
                    Collapsible Group Item #1 <i class="fa fa-angle-down rotate-icon"></i>
                </h5>
            </a>
        </div>

        <!-- Card body -->
        <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordionEx">
            <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch
                3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them
                accusamus labore sustainable VHS.
            </div>
        </div>
    </div>
		    <!-- Accordion card -->

		    <!-- Accordion card -->
		    <div class="card">

		        <!-- Card header -->
		        <div class="card-header" role="tab" id="headingTwo">
		            <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
		                <h5 class="mb-0">
		                    Collapsible Group Item #2 <i class="fa fa-angle-down rotate-icon"></i>
		                </h5>
		            </a>
		        </div>

		        <!-- Card body -->
		        <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordionEx">
		            <div class="card-body">
		                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
		                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch
		                3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
		                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
		                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
		                farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them
		                accusamus labore sustainable VHS.
		            </div>
		        </div>
		    </div>
		    <!-- Accordion card -->

		    <!-- Accordion card -->
		    <div class="card">

		        <!-- Card header -->
		        <div class="card-header" role="tab" id="headingThree">
		            <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
		                <h5 class="mb-0">
		                    Collapsible Group Item #3 <i class="fa fa-angle-down rotate-icon"></i>
		                </h5>
		            </a>
		        </div>

		        <!-- Card body -->
		        <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordionEx">
		            <div class="card-body">
		                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
		                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch
		                3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
		                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
		                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
		                farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them
		                accusamus labore sustainable VHS.
		            </div>
		        </div>
		    </div>
		    <!-- Accordion card -->
		</div>
		<!--/.Accordion wrapper-->




      )
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields)







 //end document loader     

 
    );