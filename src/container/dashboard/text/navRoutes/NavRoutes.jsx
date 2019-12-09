import React from "react";
import "./NavRoutes.css";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {changeTextNav} from "../../../../actions/dashboard/text";

class TextNavRoutes extends React.Component {
    changeTextNavigation(nav) {
        this.props.dispatch(changeTextNav(nav))
    }
    render() {
        return (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a href="#colors"
                       onClick={() => this.changeTextNavigation("colors")}
                       className={this.props.textNavigation === "colors" ? "nav-link active" : "nav-link"}
                       data-toggle="tab">Colors</a>
                </li>
                <li className="nav-item">
                    <a href="#gradients"
                       onClick={() => this.changeTextNavigation("gradients")}
                       className={this.props.textNavigation === "gradients" ? "nav-link active" : "nav-link"}
                       data-toggle="tab">Gradients</a>
                </li>
                <li className="nav-item">
                    <a href="#patterns"
                       onClick={() => this.changeTextNavigation("patterns")}
                       className={this.props.textNavigation === "patterns" ? "nav-link active" : "nav-link"}
                       data-toggle="tab">Patterns</a>
                </li>
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    const {textNavigation} = state.textReducer;
    return {textNavigation}
};
export default withRouter(connect(mapStateToProps)(TextNavRoutes))
