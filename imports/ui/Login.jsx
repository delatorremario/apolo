import React from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FieldGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export default class Login extends React.Component {
    constructor (props) {
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();
        const email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        const password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        Meteor.call('login', email, password, (err, res) => {
            if (err) console.log(err);
            else console.log(res);
        });
    }

    render(){
      return (
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="input-group" >
              <input type="email" className="form-control" placeholder="Ingrese email" />
            </div>

              <div className="input-group" >
                  <input type="password" className="form-control" placeholder="Ingrese contraseña" />
              </div>
              <div className="input-group" >
                  <input type="submit" className="btn btn-info" value="Login"  />
              </div>
          </form>
        </div>
      );
    }


}

