import React from 'react'
import NoPendingTasks from './taskoverview/NoPendingTasks'
import PendingTasks from './taskoverview/PendingTasks'

const TaskOverview = props => {

    if (props.Tasks === 0 ) {
        return (
            <NoPendingTasks />
        ) 
    }
    else {
        return (
            <PendingTasks />
        )
    }
}

export default TaskOverview