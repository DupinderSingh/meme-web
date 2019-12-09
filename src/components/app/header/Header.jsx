import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import './Header.css';
import Button from "../button/Button";

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark custom-nav">
                <div className="container">
                    <Link to="/index" style={{cursor: "pointer"}} className="navbar-brand"><img
                        src={require("../../../images/logo.png")} alt="logo"/></Link>
                    <Button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ml-auto">
                            {/*<li className="nav-item">*/}
                            {/*    <Link className="nav-link" to="/your-designs">Your Designs</Link>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                            {/*    <Link className="nav-link" to="/trending">Trending</Link>*/}
                            {/*</li>*/}
                            <li className="nav-item">
                                <Link className="nav-link" to="/text">Text</Link>
                            </li>
                            {/*<li className="nav-item">*/}
                            {/*    <Link className="nav-link" to="/photos">Photos</Link>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                            {/*    <Link className="nav-link" to="/videos">Videos</Link>*/}
                            {/*</li>*/}
                            <li className="nav-item">
                                <Link className="nav-link" to="/gifs">Giphy</Link>
                            </li>
                            {/*<li className="nav-item">*/}
                            {/*    <Link className="nav-link" to="/templates">Templates</Link>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {state}
};

export default withRouter(connect(mapStateToProps)(Header))
