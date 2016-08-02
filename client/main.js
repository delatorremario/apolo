import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import Login from '/imports/ui/Login.jsx';

Meteor.startup(() => {
  render(<Login />, document.getElementById('app'));
});

