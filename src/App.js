import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {store} from './index';
import Header from "./components/app/header/Header";
import Footer from "./components/app/footer/Footer";
import Index from "./container/dashboard";
import YourDesigns from "./container/dashboard/yourDesigns/YourDesigns";
import Trending from "./container/dashboard/trending/Trending";
import Text from "./container/dashboard/text/Text";
import Photos from "./container/dashboard/photos/Photos";
import Videos from "./container/dashboard/videos/Videos";
import Gifs from "./container/dashboard/gifs/Gifs";
import Templates from "./container/dashboard/templates/Templates";
import ColorPicker from "./components/dashboard/colorPicker/ColorPicker";

function checkAuth() {
    const {auth} = store.getState().loginReducer;
    const {isAuthenticated} = auth;
    return isAuthenticated
}

export const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => {
        return checkAuth() ?
            <Component {...props}/>
            : <Redirect to='/login'/>
    }
    }/>
);

export const ProtectedRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => {
        return checkAuth() ?
            <Redirect to='/index'/>
            : <Component {...props}/>
    }
    }/>
);

export function BodyWrapper(props) {
    return (
        <div>
            <Header/>
            <section className="four-column">
                <div className="container">
                    <Switch>
                        <PrivateRoute path="/index" component={Index}/>
                        <PrivateRoute path="/your-designs" component={YourDesigns}/>
                        <PrivateRoute path="/trending" component={Trending}/>
                        <PrivateRoute path="/text" component={Text}/>
                        <PrivateRoute path="/photos" component={Photos}/>
                        <PrivateRoute path="/videos" component={Videos}/>
                        <PrivateRoute path="/gifs" component={Gifs}/>
                        <PrivateRoute path="/templates" component={Templates}/>
                        <PrivateRoute path="/color-picker" component={ColorPicker}/>
                        <Redirect from="*" to='/index'/>
                    </Switch>
                </div>
            </section>
        </div>
    )
}

class RouteComponent extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <BodyWrapper props={this.props}/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {auth} = state.loginReducer;
    const {isAuthenticated} = auth;
    return {
        isAuthenticated
    }
}

export default withRouter(connect(mapStateToProps)(RouteComponent));
