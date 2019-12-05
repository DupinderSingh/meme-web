import React from "react";
import "./Photos.css";
import {Link} from "react-router-dom";
import Button from "../../../components/app/button/Button";

export default class Photos extends React.Component {
    render() {
        return (
            <>
                <div className="row margin-eq">
                    <div className="col-sm-6 col-12 ur-design">Your Photos</div>
                    <div className="col-sm-6 col-12 see-all"><Link to="/photos"
                                                                   className="float-right">See
                        All</Link></div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="bs-example">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a href="#recent" className="nav-link active" data-toggle="tab">Recent</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#favorites" className="nav-link" data-toggle="tab">Favorites</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#selfie" className="nav-link" data-toggle="tab">Selfie</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#live-p" className="nav-link" data-toggle="tab">Live Photos</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#Portrait" className="nav-link" data-toggle="tab">Portrait</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#Album1" className="nav-link" data-toggle="tab">Album 1</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="recent">
                                    <div className="row">
                                        <div className="col-sm-3 col-12 img-box">
                                            <div className="box-container">
                                                <a className="img" href="javascript:;"><img
                                                    src={require("../../../images/box-img.png")}/></a>
                                                <div className="dropdown text ">
                                                    <Button type="button" className="dropdown-toggle"
                                                            data-toggle="dropdown">
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
                                        <div className="col-sm-3 col-12 img-box">
                                            <div className="box-container">
                                                <a className="img" href="javascript:;"><img
                                                    src={require("../../../images/box-img.png")}/></a>
                                                <div className="dropdown text ">
                                                    <Button type="button" className="dropdown-toggle"
                                                            data-toggle="dropdown">
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
                                        <div className="col-sm-3 col-12 img-box">
                                            <div className="box-container">
                                                <a className="img" href="javascript:;"><img
                                                    src={require("../../../images/box-img.png")}/></a>
                                                <div className="dropdown text ">
                                                    <Button type="button" className="dropdown-toggle"
                                                            data-toggle="dropdown">
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
                                        <div className="col-sm-3 col-12 img-box">
                                            <div className="box-container">
                                                <a className="img" href="javascript:;"><img
                                                    src={require("../../../images/box-img.png")}/></a>
                                                <div className="dropdown text ">
                                                    <Button type="button" className="dropdown-toggle"
                                                            data-toggle="dropdown">
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
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="favorites">
                                    <h4 className="mt-2">Favorites tab content</h4>
                                    <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque. Vivamus nibh urna,
                                        ornare id gravida ut, mollis a magna. Aliquam porttitor condimentum nisi, eu
                                        viverra ipsum porta ut. Nam hendrerit bibendum turpis, sed molestie mi fermentum
                                        id. Aenean volutpat velit sem. Sed consequat ante in rutrum convallis. Nunc
                                        facilisis leo at faucibus adipiscing.</p>
                                </div>
                                <div className="tab-pane fade" id="selfie">
                                    <h4 className="mt-2">Selfie tab content</h4>
                                    <p>Donec vel placerat quam, ut euismod risus. Sed a mi suscipit, elementum sem a,
                                        hendrerit velit. Donec at erat magna. Sed dignissim orci nec eleifend egestas.
                                        Donec eget mi consequat massa vestibulum laoreet. Mauris et ultrices nulla,
                                        malesuada volutpat ante. Fusce ut orci lorem. Donec molestie libero in tempus
                                        imperdiet. Cum sociis natoque penatibus et magnis.</p>
                                </div>
                                <div className="tab-pane fade" id="live-p">
                                    <h4 className="mt-2">Live Photos tab content</h4>
                                    <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque. Vivamus nibh urna,
                                        ornare id gravida ut, mollis a magna. Aliquam porttitor condimentum nisi, eu
                                        viverra ipsum porta ut. Nam hendrerit bibendum turpis, sed molestie mi fermentum
                                        id. Aenean volutpat velit sem. Sed consequat ante in rutrum convallis. Nunc
                                        facilisis leo at faucibus adipiscing.</p>
                                </div>
                                <div className="tab-pane fade" id="Portrait">
                                    <h4 className="mt-2">Profile tab content</h4>
                                    <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque. Vivamus nibh urna,
                                        ornare id gravida ut, mollis a magna. Aliquam porttitor condimentum nisi, eu
                                        viverra ipsum porta ut. Nam hendrerit bibendum turpis, sed molestie mi fermentum
                                        id. Aenean volutpat velit sem. Sed consequat ante in rutrum convallis. Nunc
                                        facilisis leo at faucibus adipiscing.</p>
                                </div>
                                <div className="tab-pane fade" id="Album1">
                                    <h4 className="mt-2">Album 1 tab content</h4>
                                    <p>Donec vel placerat quam, ut euismod risus. Sed a mi suscipit, elementum sem a,
                                        hendrerit velit. Donec at erat magna. Sed dignissim orci nec eleifend egestas.
                                        Donec eget mi consequat massa vestibulum laoreet. Mauris et ultrices nulla,
                                        malesuada volutpat ante. Fusce ut orci lorem. Donec molestie libero in tempus
                                        imperdiet. Cum sociis natoque penatibus et magnis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
