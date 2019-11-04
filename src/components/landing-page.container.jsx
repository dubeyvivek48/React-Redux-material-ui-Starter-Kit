import React, {Component} from 'react';
import Header from "./shared/Header";
import {Link} from "react-router-dom";

class LandingPageContainer extends Component {
    render() {
        return (
            <div>
                <Header/>
                <h2> Landing Page Container </h2>
                <Link to={"/sign-in"}> sign In</Link>
            </div>
        );
    }
}

export default LandingPageContainer;