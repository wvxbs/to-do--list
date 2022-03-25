import React from "react"

const Task = props => (
    <div className="media">
        <div className="media-content">
            <div className="content">
                <div>
                    <p className="subtitle">Data: {props.limitDate} <b>{props.priority}</b></p>
                    <h1 className="title is-3">
                        {props.title}
                    </h1>
                </div>
            </div>
        </div>    
    </div>
)

export default Task