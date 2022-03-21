import React from 'react'

const TaskOverview = props => {

    if (props.Tasks === 0) {
        return (
            <div>
                <h1>
                    Você não tem tarefas pendentes
                </h1>
            </div>
        ) 
    }

    if(props.Tasks === 1) {
        return (
            <div>
                <h1>
                    Você tem uma tarefa pendente
                </h1>
            </div>
        )
    }

    return (
        <div>
            <h1>
                Você tem {props.Tasks} tarefas pendentes
            </h1>
        </div>
    )

}

export default TaskOverview