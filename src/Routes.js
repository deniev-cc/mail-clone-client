import React from "react";
import {Route, Switch} from "react-router-dom";
import Message from "./containers/Message";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Message} />
        </Switch>
    );
};

export default Routes;