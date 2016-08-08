import React from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FieldGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export default class RegisterPage extends React.Component {
    constructor (props) {
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();
        const email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        const password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        const password2 = ReactDOM.findDOMNode(this.refs.password2).value.trim();
        if(password===password2)
            Meteor.call('register', email, password, (err, res) => {
                if (err){
                    console.log(err)
                    alert('ERROR rigister : ' + err.message);
                }
                else{
                    Meteor.loginWithPassword(email,password, (err) => {
                        if(err){
                            console.log(err)
                            alert('ERROR login: ' + err.message);
                        }
                        else {
                            alert('Welcome ' + email);
                            FlowRouter.go('/')
                        }
                    })
                }
            });
        else alert('Wrong passwords')
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
                  <input ref="password2" type="password" className="form-control" placeholder="Reingrese la contraseña" />
              </div>
              <div className="input-group" >
                  <input type="submit" className="btn btn-info" value="Register"  />
              </div>
          </form>
        </div>
      );
    }


}

