import React, {useState} from 'react'

const Button = props => {
    return (
        <div className="navbar-item">
            <div className="button is-white">
                <b>
                    {props.title}
                </b>
            </div>
        </div>
    )

}

export default Button
