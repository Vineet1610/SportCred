import React from 'react';
import {BrowserRouter, Redirect, Route, Switch, useLocation} from 'react-router-dom';
import signup from './components/signup'
import Landing from './components/Landing'
import Profile from './components/Profile/Profile';


export default props => {

    return (
        <BrowserRouter>
            <Switch>
                <LoginRoute exact path='/' props={props} component={Landing}/>
                <LoginRoute exact path='/login' props={props} component={signup}/>
                <ProfileRoute exact path='/profile' props={props} component={Profile}/>
                <Route path='*' component={NoMatch}/>
            </Switch>
        </BrowserRouter>
    );
}


const ProfileRoute = ({component: Component, props, ...rest}) => {
    return <Component {...props} />;
};


const LoginRoute = ({component: Component, props, ...rest}) => {
    return <Component {...props} />
};

const NoMatch = () => {
    const location = useLocation();

    return (
        <div>
            <h3>
                Error 404! No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
};