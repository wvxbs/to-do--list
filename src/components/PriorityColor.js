const GetPriorityColor = (Priority) => {
    if (Priority === null) 
        return "white"

    if (Priority === "!") 
        return "is-success"
    
    if(Priority == "!!")
        return "is-danger"

    if(Priority == "!!!")
        return "is-danger"
}

export default GetPriorityColor