import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      cities: ['Seattle', 'Austin', 'Boston']
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  test(e) {
    console.log('City chosen', e.target.value)
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Add Rule</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} style ={{'maxWidth':'80%'}} >
          <ModalHeader toggle={this.toggle}>Add Rule</ModalHeader>
          <ModalBody>
            <Form>
              <div className = 'container'>
                <div className = 'row'>
                  <div className = 'col-sm'>
                    <div className = 'form-group'>
                      <label>Jurisdiction </label>
                      <input type ='text' />
                    </div>
                    <div className = 'form-group'>
                      <label>Document</label>
                      <input type='text' />
                    </div>
                  </div>
                  <div className = 'col-sm'>
                    <div className = 'form-group' style ={{'border':'solid black 1px'}}>
                    
                      <select className="form-control" id="sel1" >
                          <option>1</option>
                          <option>Part</option>
                          <option>Title</option>
                          <option>Article</option>
                          <option>Section</option>
                          <option>Paragraph</option>
                      </select>
                      <input className = 'form-control' type =  'text' />
                    </div> 
                     <div className = 'form-group' style ={{'border':'solid black 1px'}}>







                     <select onChange={this.test}>
                       {this.state.cities.map((city)=>{
                       return <option value={city}>{city}</option>
                     })}
                     </select>







                    
                      <select className="form-control" id="sel1" >
                          <option>2</option>
                          <option>Part</option>
                          <option>Title</option>
                          <option>Article</option>
                          <option>Section</option>
                          <option>Paragraph</option>
                      </select>
                      <input className = 'form-control' type =  'text' />
                    </div> 
                     <div className = 'form-group' style ={{'border':'solid black 1px'}}>
                    
                      <select className="form-control" id="sel1" >
                          <option>3</option>
                          <option>Part</option>
                          <option>Title</option>
                          <option>Article</option>
                          <option>Section</option>
                          <option>Paragraph</option>
                      </select>
                      <input className = 'form-control' type =  'text' />
                    </div> 
                     <div className = 'form-group' style ={{'border':'solid black 1px'}}>
                    
                      <select className="form-control" id="sel1" >
                          <option>4</option>
                          <option>Part</option>
                          <option>Title</option>
                          <option>Article</option>
                          <option>Section</option>
                          <option>Paragraph</option>
                      </select>
                      <input className = 'form-control' type =  'text' />
                    </div> 
                     <div className = 'form-group' style ={{'border':'solid black 1px'}}>
                    
                      <select className="form-control" id="sel1" >
                          <option>5</option>
                          <option>Part</option>
                          <option>Title</option>
                          <option>Article</option>
                          <option>Section</option>
                          <option>Paragraph</option>
                      </select>
                      <input className = 'form-control' type =  'text' />
                    </div> 
                    
                    
                  </div>
                </div>

              </div>







            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="success"  onClick={this.toggle}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;