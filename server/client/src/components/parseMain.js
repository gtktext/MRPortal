import React from 'react';
import ParkingRulesTabs from './parkingRulesTabs'
import SimpleModalWrapped from './parseModalBootstrap'
import Footer from './footer'

const ParseDocumentMain =(props)=>{

	return (
		<div>
		   <div >
			<h1 style = {{color:'white', backgroundColor:'green'}}>Traffic Rules and Regulations City of Boston</h1>
		   </div>
			
			<SimpleModalWrapped />
			<Footer />
        

		</div>

	)

}

export default ParseDocumentMain;