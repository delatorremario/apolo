import React from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FieldGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export default class LoginPage extends React.Component {
    constructor (props) {
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();
        const email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        const password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        Meteor.loginWithPassword(email,password, (err) => {
            if(err){
                console.log(err)
                alert('ERROR login: ' + err.message);
            }
            else {
                //alert('Welcome ' + email);
                FlowRouter.go('/')
            }
        })
    }

    render(){
      return (
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="input-group" >
              <input ref="email" type="email" className="form-control" placeholder="Ingrese email" />
            </div>

              <div className="input-group" >
                  <input ref="password" type="password" className="form-control" placeholder="Ingrese contraseña" />
              </div>
              <div className="input-group" >
                  <input type="submit" className="btn btn-info" value="Login"  />
              </div>
          </form>
        </div>
      );
    }


}

