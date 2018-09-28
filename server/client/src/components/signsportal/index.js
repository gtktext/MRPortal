import React from 'react';

import { Route } from 'react-router'

import './edit.png'

function signsMain(props){
	return (
	<div class="container">
	<div>
		
	<nav id="tabFormat" style ={{'width':'3000px'}}>
	<ul class="nav nav-tabs">
	<li class="nav-item">
		<a class="nav-link active" href="#!">Photo & Illustration Matched (35)</a>
	</li>
	<li class="nav-item">
		<a class="nav-link" href="#!">Labeled POI (100)</a>
	</li>
	<li class="nav-item">
		<a class="nav-link" href="#!">Unlabeled POI (100)</a>
	</li>
	<li class="nav-item">
		<a class="nav-link" href="#!">Illustrated POI (100)</a>
	</li>
	</ul>		
		</nav>	

		<br />

	{/* <!-- Beginning of Advanced Search --> */}

	<h2 style={{'marginLeft':'9px'}}>Advanced Search</h2>
	<p style={{'marginLeft':'9px'}} class="pm">Various ways to search</p>
		<br />	<br />
	<div class="container">
	<div class="row">
	{/* <!-- 	<div class="d-flex justify-content-start"> --> */}
	<div class="col-sm-4">
	<h3>Location</h3>
	<p>Search for an existing sign by location</p>


	{/* <!-- dropdown menu for Country in Location --> */}
	
	<div class="input-group">
	<div class="input-group-prepend">
		<button style={{'width':'115px'}} class="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="valign">Country</button>
		<div class="dropdown-menu">
		<a class="dropdown-item" href="#">United States</a>
		</div>  
	</div>
	<input type="text" class="form-control" aria-label="Text input with dropdown button" />
	</div>
	<br />
	

	{/* <!-- dropdown menu for State in Location --> */}

	<div class="input-group">
	<div class="input-group-prepend">
		<button style={{'width':'115px'}} class="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="valign">State</button>
		<div class="dropdown-menu">
		<a class="dropdown-item" href="#">Illinois</a>
		<a class="dropdown-item" href="#">Massachusetts</a>
		<a class="dropdown-item" href="#">New York</a>
		</div>
	</div>
	<input type="text" class="form-control" aria-label="Text input with dropdown button" />
	</div>
	<br />

	{/* <!-- dropdown menu for City in Location --> */}

	<div class="input-group">
	<div class="input-group-prepend">
		<button style={{'width':'115px'}} class="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="valign">City</button>
		<div class="dropdown-menu">
		<a class="dropdown-item" href="#">Boston</a>
		<a class="dropdown-item" href="#">Chicago</a>
		<a class="dropdown-item" href="#">New York</a>
		
		</div>
	</div>
	<input type="text" class="form-control" aria-label="Text input with dropdown button" />
	</div>

	<br />

	{/* <!-- dropdown menu for Neighborhoods in Location --> */}

	<div class="input-group">
	<div class="input-group-prepend">
		<button style={{'width':'115px'}} class="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="valign">Neighborhood</button>
		<div class="dropdown-menu">
		<a class="dropdown-item" href="#">Allston</a>
		<a class="dropdown-item" href="#">Back Bay</a>
		<a class="dropdown-item" href="#">Bay Village</a>
		<a class="dropdown-item" href="#">Beacon Hill</a>
		<a class="dropdown-item" href="#">Brighton</a>
		<a class="dropdown-item" href="#">Charleston</a>
		<a class="dropdown-item" href="#">Chinatown</a>
		<a class="dropdown-item" href="#">Dorchester</a>
		<a class="dropdown-item" href="#">Downtown</a>
		<a class="dropdown-item" href="#">East Boston</a>
		<a class="dropdown-item" href="#">Fenway-Kenmore</a>
		<a class="dropdown-item" href="#">Hyde Park</a>
		<a class="dropdown-item" href="#">Jamaica Plain</a>
		<a class="dropdown-item" href="#">Mattapan</a>
		<a class="dropdown-item" href="#">Mid-Dorchester</a>
		<a class="dropdown-item" href="#">Mission Hill</a>
		<a class="dropdown-item" href="#">North End</a>
		<a class="dropdown-item" href="#">Roslinsdale</a>
		<a class="dropdown-item" href="#">Roxbury</a>
		<a class="dropdown-item" href="#">South Boston</a>
		<a class="dropdown-item" href="#">South End</a>
		<a class="dropdown-item" href="#">West End</a>
		<a class="dropdown-item" href="#">West Roxbury</a>
		</div>
	</div>
	<input type="text" class="form-control" aria-label="Text input with dropdown button" />
	</div>
	</div>

	<br />
	<div class="col-sm-4">
	<h3>Category</h3>
	<p>Search for an existing sign by Category</p>

	{/* <!-- dropdown menu for Categories --> */}

	<div class="input-group">
	<div class="input-group-prepend">
		<button class="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All</button>
		<div class="dropdown-menu">
		<a class="dropdown-item" href="#">Parking</a>
		<a class="dropdown-item" href="#">Street</a>
		<a class="dropdown-item" href="#">Temporary</a>
		<a class="dropdown-item" href="#">Traffic</a> 
		</div>
	</div>
	<input type="text" class="form-control" aria-label="Text input with dropdown button" />
	</div>
	</div>
	<br />
	<div class="col-sm-4">
	<h3>Sign Type</h3>
	<p>Search for an existing sign by type</p>

	{/* <!-- dropdown menu for Sign Type --> */}

	<div class="input-group">
	<div class="input-group-prepend">
		<button class="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All</button>
		<div class="dropdown-menu">
		<a class="dropdown-item" href="#">15 Minute Pick Up Drop Off</a>
		<a class="dropdown-item" href="#">Ambulance Parking</a>
		<a class="dropdown-item" href="#">Bus Stop</a>
		<a class="dropdown-item" href="#">Cab Stand</a>
		<a class="dropdown-item" href="#">Commercial Parking</a>
		<a class="dropdown-item" href="#">Emergency Vechicle</a>
		<a class="dropdown-item" href="#">Handicap Parking</a>
		<a class="dropdown-item" href="#">Handicap Parking (During Red Sox Day / Night Games)</a>
		<a class="dropdown-item" href="#">Handicap Ramp</a>
		<a class="dropdown-item" href="#">No Parking</a>
		<a class="dropdown-item" href="#">No Stopping</a>
		<a class="dropdown-item" href="#">Resident Parking Permit 6pm - 7am</a>
		<a class="dropdown-item" href="#">Resident Parking Permit Only</a>
		<a class="dropdown-item" href="#">Show Emergency</a>
		<a class="dropdown-item" href="#">Special Permit Parking</a>
		<a class="dropdown-item" href="#">Street Cleaning</a>
		<a class="dropdown-item" href="#">Street Cleaning - 1st & 3rd Monday</a>
		<a class="dropdown-item" href="#">Street Cleaning - 1st & 3rd Wednesday</a>
		<a class="dropdown-item" href="#">Street Cleaning - 2nd & 4th Monday</a>
		<a class="dropdown-item" href="#">Street Cleaning - 2nd & 4th Wednesday</a>
		<a class="dropdown-item" href="#">Street Cleaning - Friday</a>
		<a class="dropdown-item" href="#">Visitor Parking</a>
		</div>
	</div>
	<input type="text" class="form-control" aria-label="Text input with dropdown button" />
	</div>
	<button type="button" class="btn btn-success" id="searchButton">Search</button>
	</div>
	</div>
	</div>
	</div>
	<br />
	<br />
	<br />
	<h2>All POI's (Search Results)</h2>
	<br />
	<table class="table table-striped" id="twidth">
		<thead class="thead-dark">
			<tr>
			<th>Number</th>
			<th>Street Address</th>
			<th>Sign Category</th>
			<th>Sign Type</th>
			<th>Edit</th>
			</tr>
		</thead>
		<tbody>
			<tr>
			<th scope="row">Sign 1</th>
			<td>Beacon Hill (Back Bay)</td>
			<td>Sign Category</td>
			<td>Sign Type</td>
			<td><img src={ require('./edit.png')}  alt="edit image"/></td>
			</tr>
			<tr>
			<th scope="row">Sign 1</th>
			<td>Marlborough (Back Bay)</td>
			<td>Sign Category</td>
			<td>Sign Type</td>
			<td><img src={ require('./edit.png')} alt="edit image"/></td>
			</tr>
			<tr>
			<th scope="row">Sign 1</th>
			<td>Commonwealth Avenue (Back Bay)</td>
			<td>Sign Category</td>
			<td>Sign Type</td>
			<td><img src={ require('./edit.png')} alt="edit image"/></td>
			</tr>
			<tr>
			<th scope="row">Sign 1</th>
			<td>Beacon Street (Back Bay)</td>
			<td>Sign Category</td>
			<td>Sign Type</td>
			<td><img src={ require('./edit.png')} alt="edit image"/></td>
			</tr>
			<tr>
			<th scope="row">Sign 1</th>
			<td>Beacon Hill (Back Bay)</td>
			<td>Sign Category</td>
			<td>Sign Type</td>
			<td><img src={ require('./edit.png')} alt="edit image"/></td>
			</tr>
			<tr>
			<th scope="row">Sign 1</th>
			<td>Marlborough (Back Bay)</td>
			<td>Sign Category</td>
			<td>Sign Type</td>
			<td><img src={ require('./edit.png')} alt='edit image' /> </td>
			</tr>
		</tbody>
	</table>
	</div>


		)
}
export default signsMain