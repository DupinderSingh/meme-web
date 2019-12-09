import React from "react";
import "./Gifs.css";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getGifs} from "../../../actions/dashboard/gifs";
import GifTemplate from "./template/Template";
import GifNavRoutes from "./navRoutes/NavRoutes";

class Gifs extends React.Component {
    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.gifSearch !== nextProps.gifSearch) {
            this.props.dispatch(getGifs(nextProps.gifSearch));
        }
    }

    render() {
        return (
            <>
                <div className="row margin-eq-top">
                    <div className="col-sm-12 col-12">
                        <div className="title">
                            Giphy
                        </div>
                    </div>
                </div>
                {
                    this.props.location.pathname === "/gifs" &&
                    <input type="text"/>
                }
                <div className="row">
                    <div className="col-12">
                        <div className="bs-example">
                            <GifNavRoutes/>
                            <div className="tab-content">
                                <div
                                    className={this.props.gifNavigation === "reactions" ? "tab-pane fade show active" : "tab-pane fade"}
                                    id="Reactions">
                                    <GifTemplate/>
                                </div>
                                <div
                                    className={this.props.gifNavigation === "greetings" ? "tab-pane fade show active" : "tab-pane fade"}
                                    id="Greetings">
                                    <GifTemplate/>
                                </div>
                                <div
                                    className={this.props.gifNavigation === "occasions" ? "tab-pane fade show active" : "tab-pane fade"}
                                    id="Occasions">
                                    <GifTemplate/>
                                </div>
                                <div
                                    className={this.props.gifNavigation === "holidays" ? "tab-pane fade show active" : "tab-pane fade"}
                                    id="Holidays">
                                    <GifTemplate/>
                                </div>
                                <div
                                    className={this.props.gifNavigation === "animals" ? "tab-pane fade show active" : "tab-pane fade"}
                                    id="Animals">
                                    <GifTemplate/>
                                </div>
                                <div
                                    className={this.props.gifNavigation === "memes" ? "tab-pane fade show active" : "tab-pane fade"}
                                    id="Memes">
                                    <GifTemplate/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
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
export default withRouter(connect(mapStateToProps)(Gifs))
