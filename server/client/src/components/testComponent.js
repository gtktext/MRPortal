import React from 'react';
import Component from 'react';














class Pulldown extends React.Component {
  constructor(props){
    super(props)
    this.state ={
          letter:'Select a number',
          numbers: [[1,'one'], [2, 'two'], [3, 'Three']],
          letters: [[1, 'A'], [2,'B'], [3, 'C']],

          countries:[['united_states'], ['Canada']],
          states: [['Choose a country']],
          filteredStates:[['Choose a State'],],
          filteredCities:[],
          filteredNeighborhoods:[],
          filteredCategories:[],
          signLocation:[
  {
    id: 1,
    Country: 'united_states',
    State: 'massachusetts',
    City: 'boston',
    Neighborhood: 'beacon_hill',
    Category: 'parking',
    SignType: 'no_parking'
  },
  {
    id: 2,
    Country: 'united_states',
    State: 'massachusetts',
    City: 'boston',
    Neighborhood: 'downtown',
    Category: 'street',
    SignType: 'bus_stop'
  },
  {
    id: 3,
    Country: 'united_states',
    State: 'massachusetts',
    City: 'boston',
    Neighborhood: 'brighton',
    Category: 'temporary',
    SignType: 'fifteen_minute_pick_up_drop_off'
  },
  {
    id: 4,
    Country: 'united_states',
    State: 'massachusetts',
    City: 'boston',
    Neighborhood: 'roxbury',
    Category: 'traffic',
    SignType: 'show_emergency'
  },
  {
    id: 5,
    Country: 'united_states',
    State: 'new_york',
    City: 'New_york',
    Neighborhood: 'staten_island',
    Category: 'traffic',
    SignType: 'show_emergency'
  },
  {
    id: 6,
    Country: 'united_states',
    State: 'new_york',
    City: 'new_york',
    Neighborhood: 'Harlem',
    Category: 'street',
    SignType: 'bus_stop'
  },
    
]

    }

  }



//when country is chosen
handleChangeCountry =(e)=>{
  let xx =[]
  let testState = this.state.signLocation.map((state)=>{
    // console.log('xx', xx)
    // // console.log('City', city)
    
    if(state.Country == e.target.value && !xx.includes(state.State)){
      // console.log('Found', xx)
      xx.push(state.State)
      return [state.State]
    }

  })

  while(testState.indexOf(undefined) >-1){
    let index = testState.indexOf(undefined)
    testState.splice(index, 1)
  }
  console.log(testState)
  this.setState({
    filteredStates: testState
  })
  setTimeout(()=>{
      console.log('filteredStates', this.state.filteredStates, testState)

    },1000)
} 


//when state is chosen
handleChangeState=(e)=>{
  if(e.target.value == undefined){
    console.log('Ouch, undefined')
  }
  console.log('change state value',e.target.value)
   const xx =[]
  let testCity = this.state.signLocation.map((city)=>{
    // console.log('xx', xx)
    // // console.log('City', city)
    
    if(city.State == e.target.value && !xx.includes(city.City)){
      // console.log('Found', xx)
      xx.push(city.City)
      return city.City
    }

  })

  while(testCity.indexOf(undefined) >-1){
    let index = testCity.indexOf(undefined)
    testCity.splice(index, 1)
  }

  // for(let x in testCity){
  //   // console.log(testState[x])
  //   if(testCity[x] == undefined){
  //     // console.log('found one')
  //     testCity.splice(x,1)
  //   }
  // }
  console.log('xx',xx)
  this.setState({
    filteredCities: xx
  })
}

//when city is chosen
handleChangeCity=(e)=>{
  console.log('In handleChangeNeighborhood', e.target.value)
  let xx =[]
  let testNeighborhood = this.state.signLocation.map((neighborhood)=>{
    // console.log('xx', xx)
    // // console.log('City', city)
    
    if(neighborhood.City == e.target.value && !xx.includes(neighborhood.Neighborhood)){
      // console.log('Found', xx)
      xx.push(neighborhood.Neighborhood)
      return [neighborhood.Neighborhood]
    }

  })

  while(testNeighborhood.indexOf(undefined) >-1){
    let index = testNeighborhood.indexOf(undefined)
    testNeighborhood.splice(index, 1)
  }
  this.setState({
    filteredNeighborhoods: testNeighborhood
  })
  setTimeout(()=>{
      console.log('filteredNeighborhoods', this.state.filteredNeighborhoods, testNeighborhood)

    },1000)
}



handleChangeNeighborhood =(e)=>{
  console.log('In change neighborfhood')
  let xx = []
  let testCategory= this.state.signLocation.map((category)=>{
    if(category.Neighborhood == e.target.value && !xx.includes(category.Category)){
      xx.push(category.Category)
      return [category.Category]
    }

  })


  while(testCategory.indexOf(undefined) >-1){
    let index = testCategory.indexOf(undefined);
    testCategory.splice(index, 1)
  }
  this.setState({
    filteredCategories: testCategory
  })



}










//When category is chosen
handleChangeCategory=(e)=>{
  console.log('In handleChangeCategory', e.target.value)
  alert('Category is '+ e.target.value)

}



//choose neighborhood







  render() {
    return (
      <div>
        <h1>Test Component</h1>

        <select onChange ={this.handleChangeCountry}>
          <option value = 'choose country'>Choose Country</option>
          {this.state.countries.map((country)=>{
            return <option value = {country}>{country} </option>
          })}
        </select>

        <div>
          <select onChange = {this.handleChangeState}>
            <option  value ='state'>Choose State</option>
            { this.state.filteredStates.map((state)=>{
              // console.log('In map, State is', test)
              return <option value = {state}> {state} </option>
            })

            }
          </select>
        </div>
        <div>
          <select onChange={this.handleChangeCity}>
            <option value ='chooseCity' > Choose City </option>

            { this.state.filteredCities.map((citysing)=>{
              // console.log('In map, city is', citysing)
              return <option value ={citysing}> {citysing} </option>
            })

            }
          </select>
        </div>
        <div>
          <select onChange={this.handleChangeNeighborhood}>
            <option value ='chooseCity' > Choose Neighborhood </option>

            { this.state.filteredNeighborhoods.map((neighborhood)=>{
              // console.log('In map, city is', citysing)
              return <option value ={neighborhood}> {neighborhood} </option>
            })

            }
          </select>
        </div>
        <div>
          <select onChange={this.handleChangeCategory}>
            <option value ='chooseCity' > Choose Category </option>

            { this.state.filteredCategories.map((category)=>{
              console.log('In map, category is', category)
              return <option value ={category}> {category} </option>
            })

            }
          </select>
        </div>
        <br/>
        <br/>
        <br/>

      </div>)
  }
}



export default Pulldown;




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