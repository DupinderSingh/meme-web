import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {SketchPicker} from 'react-color';
import {changeEditorBackground} from "../../../actions/dashboard/text";

class ColorPicker extends React.Component {
    handleChangeComplete = (color, event) => {
        this.props.dispatch(changeEditorBackground({
            background: {color: color.hex, type: 'color'},
            finalBackground: {color: color.hex, type: 'color'},
        }));
    };

    handleChange(color, event) {
        this.props.dispatch(changeEditorBackground({
            background: {color: color.hex, type: 'color'},
            finalBackground: {color: color.hex, type: 'color'},
        }));
    }

    render() {
        return <SketchPicker
            color={this.props.background}
            onChange={this.handleChange.bind(this)}
            onChangeComplete={this.handleChangeComplete.bind(this)}/>
    }
}

const mapStateToProps = (state) => {
    const {textNavigation, background, finalBackground} = state.textReducer;
    return {textNavigation, background, finalBackground}
};
export default withRouter(connect(mapStateToProps)(ColorPicker))
