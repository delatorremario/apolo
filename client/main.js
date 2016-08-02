import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';



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



