import React from "react";
import Logo from "../../assets/images/Logo.svg"

const Header = () => {
    return (
        <header className="mt-4 mb-4">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <img src={Logo} alt=""/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;