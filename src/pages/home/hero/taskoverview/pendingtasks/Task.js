import React from "react"

const Task = props => (
    <div className="media">
        <div className="media-content">
            <div className="content">
                <p>
                    <p className="subtitle"> 
                        <strong> {props.title} </strong> {props.priority}
                    </p>
                    <br />
                    <small>Data:    {props.limitDate}</small>
                </p>
            </div>
        </div>    
    </div>
)

export default Task