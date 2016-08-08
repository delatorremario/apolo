import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Button } from 'react-bootstrap';

HelloUser = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        console.log('Meteor.user',Meteor.user())
        var user = Meteor.user()
        var email = user && user.emails && user.emails[0].address || null
        console.log('email',email)
        return {
            currentUser: email
        };
    },
    handleLogOut(){
        console.log('log out');
        Meteor.logout();
        //Router.go("/");
    },
    render() {
        return <div>
            {(this.data.currentUser)?
                <span>Hello {this.data.currentUser}!
                    <input onClick={ this.handleLogOut } type="button" className="btn btn-info" value="Log Out"  />
                </span>
                :
                <div className="navigation">
                    <a className="btn btn-primary" href={FlowRouter.path('/login')}>Login</a>
                    <a className="btn btn-default" href={FlowRouter.path('/register')}>Register</a>
                </div>
            }
                </div>

    }
});