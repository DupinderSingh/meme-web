import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import "./Text.css";
import ColorPicker from "../../../components/dashboard/colorPicker/ColorPicker.jsx";
import TextNavRoutes from "./navRoutes/NavRoutes";
import EditorIFrame from "./editorIFrame/EditorIFrame";
import Patterns from "./patterns/Patterns";
import Colors from "./colors/Colors";
import {changeEditorBackground} from "../../../actions/dashboard/text";

class Text extends React.Component {
    componentDidMount() {
        this.props.dispatch(changeEditorBackground({
            background: {color: '#fff', type: 'color'},
            finalBackground: {color: '#fff', type: 'color'}
        }))
    }

    render() {
        return (
            <>
                <div className="row margin-eq-top">
                    <div className="col-sm-12 col-12">
                        <div className="title">
                            Text
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="bs-example">
                            <TextNavRoutes/>
                            <div className="tab-content">
                                <div
                                    className={this.props.textNavigation === "colors" ? "tab-pane fade show active" : "tab-pane fade"}
                                    id="colors">
                                    <div className="row">
                                        <EditorIFrame/>
                                        <Colors/>
                                    </div>
                                </div>
                                <div
                                    className={this.props.textNavigation === "gradients" ? "tab-pane fade show active" : "tab-pane fade"}
                                    id="gradients">
                                    <h4 className="mt-2">Gradients</h4>
                                    <div className="row">
                                        <EditorIFrame/>
                                        <div className="col-sm-10 col-12 colors-box-div">
                                            <div className="colors-box-container">
                                                <ColorPicker/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={this.props.textNavigation === "patterns" ? "tab-pane fade show active" : "tab-pane fade"}
                                    id="patterns">
                                    <h4 className="mt-2">Patterns</h4>
                                    <div className="row">
                                        <EditorIFrame/>
                                        <Patterns/>
                                    </div>
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
    const {textNavigation, background, finalBackground} = state.textReducer;
    return {textNavigation, background, finalBackground}
};
export default withRouter(connect(mapStateToProps)(Text))
