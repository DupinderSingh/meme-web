import React from "react";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import "./Text.css";
import ColorPicker from "../../../components/dashboard/colorPicker/ColorPicker.jsx";
import {colors} from "../../../actions/dashboard/colors";
import {patterns} from "../../../actions/dashboard/patterns";
import {setCookie} from "../../../actions/app";

class Text extends React.Component {
    state = {
        background: {color: '#fff', type: 'color'},
        finalBackground: {color: '#fff', type: 'color'},
    };

    pickColor(color) {
        this.setState({
            background: {color: '#fff', type: 'color'},
            finalBackground: {color, type: 'color'},
        })
    }

    openTheEditor() {
        setCookie("backgroundType", this.state.finalBackground.type, 1000);
        setCookie("background", this.state.finalBackground.type === "color" ? this.state.finalBackground.color : this.state.finalBackground.img, 1000);
        window.location.href = "http://192.168.1.107:3001";
    }

    pickPattern(img) {
        this.setState({
            background: {color: '#fff', type: 'color'},
            finalBackground: {img, type: 'img'},
        })
    }

    render() {
        console.log(colors, "colors.....");
        return (
            <>
                <div className="row margin-diff">
                    <div className="col-sm-6 col-12 ur-design">Text</div>
                    <div className="col-sm-6 col-12 see-all"><Link to="/text"
                                                                   className="float-right">See
                        All</Link></div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="bs-example">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a href="#colors" className="nav-link active" data-toggle="tab">Colors</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#gradients" className="nav-link" data-toggle="tab">Gradients</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#patterns" className="nav-link" data-toggle="tab">Patterns</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="colors">
                                    <div className="row">
                                        <div className="col-sm-3 col-12 img-box">
                                            <div className="box-container" style={{cursor: "pointer"}}
                                                 onClick={this.openTheEditor.bind(this)}>
                                                <span className="text-only-box"
                                                      style={{background: this.state.finalBackground.type === "color" ? this.state.finalBackground.color : ""}}>
                                                    {
                                                        this.state.finalBackground.type === "img" &&
                                                        <img
                                                            src={require(`../../../images/` + this.state.finalBackground.img)}
                                                            alt={"pattern"}/>
                                                    }
                                                    Text only
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-sm-9 col-12 colors-box-div">
                                            <div className="colors-box-container">
                                                <ColorPicker thi={this}/>
                                            </div>
                                            {
                                                colors.map((color) => (
                                                    <div className="colors-box-container" style={{cursor: "pointer"}}
                                                         onClick={() => this.pickColor(color)}>
                                                        <span className="random-color-box"
                                                              style={{backgroundColor: color}}/>
                                                    </div>
                                                ))
                                            }
                                            {
                                                <div className="patterns">
                                                    {
                                                        patterns.map((pattern, index) => (
                                                            <img style={{cursor: "pointer"}}
                                                                 onClick={() => this.pickPattern(pattern)}
                                                                 src={require(`../../../images/` + pattern)}
                                                                 alt={"pattern" + index}/>
                                                        ))
                                                    }
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="gradients">
                                    <h4 className="mt-2">Gradients</h4>
                                    <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque. Vivamus nibh urna,
                                        ornare id
                                        gravida ut, mollis a magna. Aliquam porttitor condimentum nisi, eu viverra ipsum
                                        porta
                                        ut. Nam hendrerit bibendum turpis, sed molestie mi fermentum id. Aenean volutpat
                                        velit
                                        sem. Sed consequat ante in rutrum convallis. Nunc facilisis leo at faucibus
                                        adipiscing.</p>
                                </div>
                                <div className="tab-pane fade" id="patterns">
                                    <h4 className="mt-2">Patterns</h4>
                                    <p>Donec vel placerat quam, ut euismod risus. Sed a mi suscipit, elementum sem a,
                                        hendrerit
                                        velit. Donec at erat magna. Sed dignissim orci nec eleifend egestas. Donec eget
                                        mi
                                        consequat massa vestibulum laoreet. Mauris et ultrices nulla, malesuada volutpat
                                        ante.
                                        Fusce ut orci lorem. Donec molestie libero in tempus imperdiet. Cum sociis
                                        natoque
                                        penatibus et magnis.</p>
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
    return {state}
};
export default withRouter(connect(mapStateToProps)(Text))
