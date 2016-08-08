import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

import '/imports/ui/accounts/HelloUser.jsx';

export default class MainLayout extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }

    render() {
        console.log(this.state,this.props)
        return <div className="container">
            <header>
                <HelloUser/>



            </header>
            <main>
                {this.props.content()}  /* note, this is a function call */
            </main>
            <footer>
                This is our footer
            </footer>
        </div>
    }
};