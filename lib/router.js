import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';


import MainLayout from '/imports/ui/MainLayout.jsx';
import '/imports/ui/Home.jsx';
import LoginPage from '/imports/ui/accounts/Login.jsx';
import RegisterPage from '/imports/ui/accounts/Register.jsx';

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
FlowRouter.route('/register', {
    name: 'register',
    action: function(params) {
        /* The key 'content' is now a function */
        ReactLayout.render(MainLayout, {
            content() {
                return <RegisterPage />;
            }
        });
    }
});