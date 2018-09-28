import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


import LandingPage from './components/landingPage';
import DocumentLoader from './components/documentLoader';
import ParseDocumentMain from './components/parseMain';
import garageMain from './components/garageportal/garageMain';
import signsMain from './components/signsportal/index'


import { Route } from 'react-router'


//Testing
import TestComponent from './components/testComponent'





class App extends Component {
  constructor(props){
    super(props);
    this.state={
      test: 'This is the test key in state',
      result:[]
    }
    this.getMore = this.getMore.bind(this);
  }
  componentDidMount(){
    var that = this
    var addTitle = []
    for(var x = 1; x<2; x++){
      setTimeout(function(){
              fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(json => {
        console.log('json response',json)
        addTitle = [...json]
        console.log('addTitle', addTitle)

        that.setState({
          result:addTitle,
          test:'This is the changed text'
        })
      })
    }, 10)  
    }
  };

  getMore(){


    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => {
        console.log('json response',json)
        let addTitle = [...this.state.result, ...this.json.result]

        this.setState({
          result:addTitle,
          test:'This is the changed text'
        })
      })  
  }


  render(props) {
    console.log('this.state', this.state)
    const docs =[
  {'Massachussets':[{'Boston':['BackBay','FrontBay']}, {'Cambridge':['neigh1', 'neigh2']}]},

  {'Washington':[{'Seattle':['Ballard','Fremont']}, {'Spokane':['neigh1', 'neigh2']}]} 
  ];

    return (
      <MuiThemeProvider>

        <div className="App" >
            <Navbar />
            <hr />
            <div className = 'moveDown'>
                <Route  docs={this.docs} getMore = {this.getMore} retrievedData = {this.state.result}exact path='/' component={LandingPage}/>
                <Route exact path='/documentloader' component={DocumentLoader}/>
                <Route exact path='/parsedocument' component={ParseDocumentMain}/>
                <Route exact path='/garageportal' component={garageMain}/>
                <Route exact path='/signsportal' component={signsMain}/>
            </div>
            <div>
              {/* <TestComponent /> */}
            </div>


        </div>

      </MuiThemeProvider>
    );
  }
}

export default App;
