const GetPriorityColor = (Priority) => {
    if(Priority === "!!")
        return "has-text-warning"

    if(Priority === "!!!")
        return "has-text-danger"
}

export default GetPriorityColor