import React from "react"
import Task from "./pendingtasks/Task"

const PendingTasks = props => {

    let PendingTasks = [
        {
            "title": "Fazer a janta",
            "priority": "!!!!",
            "limitDate" : "23/03/2022"
        },
        {
            "title": "Levar o lixo",
            "priority": "!!",
            "limitDate" : "23/03/2022"
        },
        {
            "title": "Cortar o cabelo",
            "priority": "!!",
            "limitDate" : "23/03/2022"
        },
        {
            "title": "Limpar o teclado",
            "priority": "!!",
            "limitDate" : "23/03/2022"
        }
    ]

    const RenderPendingTasks = Tasks => {
        return Tasks.map(i => (
                <Task   
                    title={i.title}
                    priority={i.priority}
                    limitDate={i.limitDate}
                /> 
            )
        )
    }

    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    {RenderPendingTasks(PendingTasks)}
                </div>
            </div>
        </div>
    )
}

export default PendingTasks