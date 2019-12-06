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
import {getGifs} from "../../actions/dashboard/gifs";
import {getTemplates} from "../../actions/dashboard/templates";

class Index extends React.Component {
    componentDidMount() {
        this.props.dispatch(getGifs(this.props.gifSearch));
        const body = {
            page: this.props.templatePageNumber,
            keywords: this.props.templateSearch
        };
        this.props.dispatch(getTemplates(body))
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
    const {gifSearch} = state.gifsReducer;
    const {templatePageNumber, templateSearch} = state.templatesReducer;
    return {gifSearch, templatePageNumber, templateSearch}
};
export default withRouter(connect(mapStateToProps)(Index))
