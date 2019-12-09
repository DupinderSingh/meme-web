// import React from "react";
// import "./Templates.css";
// import {Link, withRouter} from "react-router-dom";
// import Button from "../../../components/app/button/Button";
// import {connect} from "react-redux";
//
// class Templates extends React.Component {
//     render() {
//         return (
//             <>
//                 <div className="row margin-eq">
//                     <div className="col-sm-6 col-12 ur-design">Templates</div>
//                     <div className="col-sm-6 col-12 see-all"><Link to="/templates"
//                                                                    className="float-right">See
//                         All</Link></div>
//                 </div>
//                 <div className="row">
//                     <div className="col-12">
//                         <div className="bs-example">
//                             <ul className="nav nav-tabs">
//                                 <li className="nav-item">
//                                     <a href="#template1"className="nav-link active" data-toggle="tab">Popular</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a href="#template2" className="nav-link" data-toggle="tab">New</a>
//                                 </li>
//                             </ul>
//                             <div className="tab-content">
//                                 <div className="tab-pane fade show active" id="template1">
//                                     {/*<div className="row">*/}
//                                         {
//                                             !this.props.templatesPageLoading && !this.props.templatesError && this.props.templates.length > 0 &&
//                                             this.props.templates.map((template) => (
//                                                 <div className="col-sm-3 col-12 img-box">
//                                                     <div className="box-container">
//                                                         <a className="img" href="javascript:;"><img
//                                                             src={template.image}
//                                                             alt="box-img"/></a>
//                                                         <div className="dropdown text ">
//                                                             <Button type="button" className="dropdown-toggle" data-toggle="dropdown">
//                                                                 <img src={require("../../../images/3-dots.png")} alt="box-img"/>
//                                                             </Button>
//                                                             <div className="dropdown-menu dropdown-menu-right">
//                                                                 <a className="dropdown-item" href="#">Link 1</a>
//                                                                 <a className="dropdown-item" href="#">Link 2</a>
//                                                                 <a className="dropdown-item" href="#">Link 3</a>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             ))
//                                         }
//                                     {/*</div>*/}
//                                 </div>
//                                 <div className="tab-pane fade" id="template2">
//                                     <h4 className="mt-2">Gradients</h4>
//                                     {
//                                         !this.props.templatesPageLoading && !this.props.templatesError && this.props.templates.length > 0 &&
//                                         this.props.templates.map((template) => (
//                                             <div className="col-sm-3 col-12 img-box">
//                                                 <div className="box-container">
//                                                     <a className="img" href="javascript:;"><img
//                                                         src={template.image}
//                                                         alt="box-img"/></a>
//                                                     <div className="dropdown text ">
//                                                         <Button type="button" className="dropdown-toggle" data-toggle="dropdown">
//                                                             <img src={require("../../../images/3-dots.png")} alt="box-img"/>
//                                                         </Button>
//                                                         <div className="dropdown-menu dropdown-menu-right">
//                                                             <a className="dropdown-item" href="#">Link 1</a>
//                                                             <a className="dropdown-item" href="#">Link 2</a>
//                                                             <a className="dropdown-item" href="#">Link 3</a>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))
//                                     }
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }
//
// const mapStateToProps = (state) => {
//     const {
//         templatesPageLoading,
//         templatesError,
//         templatesStatus,
//         templatesMessage,
//         templates
//     } = state.templatesReducer;
//     return {
//         templatesPageLoading,
//         templatesError,
//         templatesStatus,
//         templatesMessage,
//         templates
//     }
// };
// export default withRouter(connect(mapStateToProps)(Templates))
