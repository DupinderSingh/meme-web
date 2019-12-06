import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {SketchPicker} from 'react-color';

class ColorPicker extends React.Component {
    handleChangeComplete = (color, event) => {
        this.props.thi.setState({
            background: {color: color.hex, type: 'color'},
            finalBackground: {color: color.hex, type: 'color'},
        });
    };

    handleChange(color, event) {
        this.props.thi.setState({
            background: {color: color.hex, type: 'color'},
            finalBackground: {color: color.hex, type: 'color'},
        });
    }

    render() {
        return <SketchPicker
            color={this.props.thi.state.background}
            onChange={this.handleChange.bind(this)}
            onChangeComplete={this.handleChangeComplete.bind(this)}/>
    }
}

const mapStateToProps = (state) => {
    return {state}
};
export default withRouter(connect(mapStateToProps)(ColorPicker))
