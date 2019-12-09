import React from "react";
import "./Color.css";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {colors} from "../../../../actions/dashboard/colors";
import {changeEditorBackground} from "../../../../actions/dashboard/text";

class Colors extends React.Component {
    pickColor(color) {
        this.props.dispatch(changeEditorBackground({
            background: {color: '#fff', type: 'color'},
            finalBackground: {color, type: 'color'},
        }))
    }

    render() {
        return (
            <div className="col-sm-10 col-12 colors-box-div">
                {
                    colors.map((color) => (
                        <div className="colors-box-container" style={{cursor: "pointer"}}
                             onClick={() => this.pickColor(color)}>
                                                        <span className="random-color-box"
                                                              style={{backgroundColor: color}}/>
                        </div>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {textNavigation, background, finalBackground} = state.textReducer;
    return {textNavigation, background, finalBackground}
};
export default withRouter(connect(mapStateToProps)(Colors))




