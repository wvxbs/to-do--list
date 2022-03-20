import React, {useState, useEffect} from 'react'

const Button = props => {
    const [isActive, setIsActive] = useState(false)

    const HandleClick = () => {
        setIsActive(!isActive)
    }

    return (
        <div className={`dropdown is-right ${isActive ? "is-active" : null}`}>
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={HandleClick}>
                    <span>Listas</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                    <a href="#" className="dropdown-item">
                        Dropdown item
                    </a>
                    <a className="dropdown-item">
                        Other dropdown item
                    </a>
                    <a href="#" className="dropdown-item is-active">
                        Active dropdown item
                    </a>
                    <a href="#" className="dropdown-item">
                        Other dropdown item
                    </a>
                    <hr className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                        With a divider
                    </a>
                </div>
            </div>
        </div>
    )

}

export default Button
