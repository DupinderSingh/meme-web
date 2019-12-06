import React from "react";
import "./Gifs.css";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Button from "../../../components/app/button/Button";

class Gifs extends React.Component {
    render() {
        console.log(this.props.gifs, "gifs")
        return (
            <>
                <div className="row margin-eq">
                    <div className="col-sm-6 col-12 ur-design">GIfs</div>
                    <div className="col-sm-6 col-12 see-all"><Link to="/gifs"
                                                                   className="float-right">See
                        All</Link></div>
                </div>
                {
                    this.props.location.pathname === "/gifs" &&
                    <input type="text"/>
                }
                <div className="row">
                    {
                        !this.props.gifPageLoading && !this.props.gifError && this.props.gifs.length > 0 &&
                        this.props.gifs.map((gif) => (
                                <div className="col-sm-3 col-12 img-box">
                                    <div className="box-container">
                                        <a className="img" href="javascript:;"><img
                                            src={gif.images.original.url}
                                            alt="box-img"/></a>
                                        <div className="dropdown text ">
                                            <Button type="button" className="dropdown-toggle" data-toggle="dropdown">
                                                <img src={require("../../../images/3-dots.png")} alt="box-img"/>
                                            </Button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Link 1</a>
                                                <a className="dropdown-item" href="#">Link 2</a>
                                                <a className="dropdown-item" href="#">Link 3</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    }
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
        gifs
    } = state.gifsReducer;
    return {
        gifPageLoading,
        gifError,
        gifStatus,
        gifMessage,
        gifs
    }
};
export default withRouter(connect(mapStateToProps)(Gifs))
