import React from "react";
import Button from "./header/Button";

const Header = props => {
    return (
        <div className="navbar is-white">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <h1 className="subtitle">
                        <b> Agendha </b>
                    </h1>    
                </div>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default Header