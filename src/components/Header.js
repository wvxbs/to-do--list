import React from "react";
import Button from "./header/Button";
import ProfilePic from "./header/ProfilePic";

const Header = props => {

    const SampleNavbarButtons = [
        {
            "title" : "Tarefas",
            "ref" : "Tarefas"
        },
        {
            "title" : "Trabalho",
            "ref" : "Trabalho"
        }
    ]

    const RenderNavbarButtons = Items => {
        return Items.map(i => (
            <Button 
                title={i.title}
            />
        ))
    }

    return (
        <div className="navbar is-white has-shadow">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <h1 className="subtitle">
                        <b> Agendha </b>
                    </h1>    
                </div>
            </div>
            <div className="navbar-end">    
                {RenderNavbarButtons(SampleNavbarButtons)}
                <ProfilePic />
            </div>
        </div>
    )
}

export default Header