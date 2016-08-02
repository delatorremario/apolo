import React from 'react';
import { render } from 'react-dom';

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