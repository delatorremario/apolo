import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

import Login from '/imports/ui/Login.jsx'

MainLayout = React.createClass({



  render() {
    return <div className="container">
      <header>
        This is our header


      </header>
      <main>
        {this.props.content()}  /* note, this is a function call */
      </main>
      <footer>
        This is our footer
      </footer>
    </div>
  }
});

HomePage = React.createClass({
  render () {
    return (
        <div>
          <h1>This is the home page</h1>
          <div className="navigation">
            <a className="btn btn-default" href={FlowRouter.path('/login')}>Login</a>
          </div>
          /* Rendering of material-ui components will work here */
        </div>
    );
  }
});

LoginPage = React.createClass(
    {

      render(){
        return (
            <div>
              <form>
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Ingrese email"/>
                </div>

                <div className="input-group">
                  <input type="password" className="form-control" placeholder="Ingrese contraseña"/>
                </div>
                <div className="input-group">
                  <input type="submit" className="btn btn-info" value="Submit"/>
                </div>
              </form>
            </div>
        );
      }
    }
)

FlowRouter.route('/', {
  name: 'home',
  action: function(params) {
    /* The key 'content' is now a function */
    ReactLayout.render(MainLayout, {
      content() {
        return <HomePage />;
      }
    });
  }
});
FlowRouter.route('/login', {
  name: 'login',
  action: function(params) {
    /* The key 'content' is now a function */
    ReactLayout.render(MainLayout, {
      content() {
        return <LoginPage />;
      }
    });
  }
});