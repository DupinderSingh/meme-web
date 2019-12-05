import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="fluid-container">
                    <div className="border-footer">
                        <hr/>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 copyright-text text-center">&copy; 2019 Meme. All Rights Reserved.</div>
                    </div>
                </div>
            </footer>
        )
    }
}

const mapStateToProps = (state) => {
    return {state}
};

export default withRouter(connect(mapStateToProps)(Footer))
