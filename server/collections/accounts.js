Meteor.methods({
    login: function(email, password) {
        return ({status: 'ok', message: 'sometoken'});
    }
})