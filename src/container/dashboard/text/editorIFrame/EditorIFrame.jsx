import React from "react";
import "./EditorIFrame.css";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {setCookie} from "../../../../actions/app";

class EditorIFrame extends React.Component {
    openTheEditor() {
        setCookie("backgroundType", this.props.finalBackground.type, 1000);
        setCookie("background", this.props.finalBackground.type === "color" ? this.props.finalBackground.color : this.props.finalBackground.img, 1000);
        window.location.href = "http://192.168.1.107:3001";
    }

    render() {
        return (
            <div className="col-sm-2 col-12 img-box">
                <div className="text-container" style={{cursor: "pointer"}}
                     onClick={this.openTheEditor.bind(this)}>
                                                <span className="text-only-box"
                                                      style={{background: this.props.finalBackground.type === "color" ? this.props.finalBackground.color : ""}}>
                                                    {
                                                        this.props.finalBackground.type === "img" &&
                                                        <img
                                                            src={require(`../../../../images/` + this.props.finalBackground.img)}
                                                            alt={"pattern"}/>
                                                    }
                                                    Text only
                                                </span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {textNavigation, background, finalBackground} = state.textReducer;
    return {textNavigation, background, finalBackground}
};
export default withRouter(connect(mapStateToProps)(EditorIFrame))
