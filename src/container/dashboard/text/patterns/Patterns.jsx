import React from "react";
import "./Patterns.css";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {patterns} from "../../../../actions/dashboard/patterns";
import {changeEditorBackground} from "../../../../actions/dashboard/text";

class Patterns extends React.Component {
    pickPattern(img) {
        this.props.dispatch(changeEditorBackground({
            background: {color: '#fff', type: 'color'},
            finalBackground: {img, type: 'img'},
        }))
    }

    render() {
        return (
            <div className="col-sm-10 col-12 colors-box-div">
                {
                    <div className="patterns">
                        {
                            patterns.map((pattern, index) => (
                                <img style={{cursor: "pointer"}}
                                     onClick={() => this.pickPattern(pattern)}
                                     src={require(`../../../../images/` + pattern)}
                                     alt={"pattern" + index}/>
                            ))
                        }
                    </div>
                }
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    const {textNavigation, background, finalBackground} = state.textReducer;
    return {textNavigation, background, finalBackground}
};
export default withRouter(connect(mapStateToProps)(Patterns))




