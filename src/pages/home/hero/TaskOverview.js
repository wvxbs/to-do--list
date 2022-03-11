import React from 'react'

const TaskOverview = props => {

    if (props.tasks === 0 ) {
        return (
            <div>
                <h1>
                    Você não tem tarefas pendentes
                </h1>
            </div>
        ) 
    }
    else {
        return (
            <div>
                <h1>
                    Você tem {props.tasks} tarefas pendentes
                </h1>
            </div>
        )
    }
}

export default TaskOverview