import React from "react";
import {NavLink} from "react-router-dom";

const Link = ({ to, icon: Icon, value }) => {
    return (
        <NavLink
            exact
            to={to}
        >
            <Icon />
            {value}
        </NavLink>
    );
};

export default Link;