import React from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import Routes from "./Routes";

const App = () => {
    return (
        <BrowserRouter>
            <Header />

            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <LeftMenu />
                    </div>
                    <div className="col-9">
                        <Routes />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );

};

export default App;