import React from "react";
import "./NavRoutes.css";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {changeGifNav, changeGifSearch} from "../../../../actions/dashboard/gifs";

class GifNavRoutes extends React.Component {
    changeGifNavigation(nav) {
        this.props.dispatch(changeGifNav(nav));
        this.props.dispatch(changeGifSearch(nav));
    }

    render() {
        return (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a href="#Reactions" onClick={() => this.changeGifNavigation("reactions")}
                       className={this.props.gifNavigation === "reactions" ? "nav-link active" : "nav-link"}
                       data-toggle="tab">Reactions</a>
                </li>
                <li className="nav-item">
                    <a href="#Greetings" onClick={() => this.changeGifNavigation("greetings")}
                       className={this.props.gifNavigation === "greetings" ? "nav-link active" : "nav-link"}
                       data-toggle="tab">Greetings</a>
                </li>
                <li className="nav-item">
                    <a href="#Occasions" onClick={() => this.changeGifNavigation("occasions")}
                       className={this.props.gifNavigation === "occasions" ? "nav-link active" : "nav-link"}
                       data-toggle="tab">Occasions</a>
                </li>
                <li className="nav-item">
                    <a href="#Holidays" onClick={() => this.changeGifNavigation("holidays")}
                       className={this.props.gifNavigation === "holidays" ? "nav-link active" : "nav-link"}
                       data-toggle="tab">Holidays</a>
                </li>
                <li className="nav-item">
                    <a href="#Animals" onClick={() => this.changeGifNavigation("animals")}
                       className={this.props.gifNavigation === "animals" ? "nav-link active" : "nav-link"}
                       data-toggle="tab">Animals</a>
                </li>
                <li className="nav-item">
                    <a href="#Memes" onClick={() => this.changeGifNavigation("memes")}
                       className={this.props.gifNavigation === "memes" ? "nav-link active" : "nav-link"}
                       data-toggle="tab">Memes</a>
                </li>
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    const {
        gifPageLoading,
        gifError,
        gifStatus,
        gifMessage,
        gifs,
        gifNavigation,
        gifSearch
    } = state.gifsReducer;
    return {
        gifPageLoading,
        gifError,
        gifStatus,
        gifMessage,
        gifs,
        gifNavigation,
        gifSearch
    }
};
export default withRouter(connect(mapStateToProps)(GifNavRoutes))
