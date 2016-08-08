import { Accounts } from 'meteor/accounts-base'

Meteor.methods({
    /*login: function(email, password) {
        return ({status: 'ok', message: 'sometoken'});
    },*/
    register:(email, password)=> {
        return Accounts.createUser({email:email,password:password})
    }
})