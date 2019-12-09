import React from "react";
import "./Template.css";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Button from "../../../../components/app/button/Button";

class GifTemplate extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    {
                        !this.props.gifPageLoading && !this.props.gifError && this.props.gifs.length > 0 &&
                        this.props.gifs.map((gif) => (
                                <div className="box-container">
                                    <a className="img" href="javascript:;"><img
                                        src={gif.images.original.url}
                                        alt="box-img"/></a>
                                    <div className="dropdown text ">
                                        <Button type="button" className="dropdown-toggle"
                                                data-toggle="dropdown">
                                            <img src={require("../../../../images/3-dots.png")}
                                                 alt="box-img"/>
                                        </Button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">Link 1</a>
                                            <a className="dropdown-item" href="#">Link 2</a>
                                            <a className="dropdown-item" href="#">Link 3</a>
                                        </div>
                                    </div>
                                </div>

                            )
                        )
                    }
                </div>
            </div>
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
export default withRouter(connect(mapStateToProps)(GifTemplate))
