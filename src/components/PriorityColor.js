const GetPriorityColor = (Priority) => {
    if (Priority === null) 
        return "white"

    if (Priority === "!") 
        return "has-text-black"
    
    if(Priority === "!!")
        return "has-text-warning"

    if(Priority === "!!!")
        return "has-text-danger"
}

export default GetPriorityColor