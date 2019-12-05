import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import YourDesigns from "./yourDesigns/YourDesigns";
import Trending from "./trending/Trending";
import Text from "./text/Text";
import Photos from "./photos/Photos";
import Videos from "./videos/Videos";
import Gifs from "./gifs/Gifs";
import Templates from "./templates/Templates";
import {getTemplates} from "../../actions/dashboard/templates";

class Index extends React.Component {
    // callGetTemplateApi(page, keywords) {
    //     const url = "https://app.memes.com/stockImages";
    //     const config = {
    //         page,
    //         keywords
    //     };
    //     this.props.dispatch(getTemplates(url, config));
    // }

    componentDidMount() {
        // this.callGetTemplateApi(1, "popular")
    }

    render() {
        return (
            <>
                <YourDesigns/>
                <Trending/>
                <Text/>
                <Photos/>
                <Videos/>
                <Gifs/>
                <Templates/>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {state}
};
export default withRouter(connect(mapStateToProps)(Index))
