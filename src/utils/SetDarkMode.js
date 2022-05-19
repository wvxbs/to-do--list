import { useEffect, useState } from "react"
const SetDarkMode = () => {
    const [isDark, setIsDark] = useEffect(false)

    useEffect(() => {
        const ClassName = "dark"
                    
        ToggleClass(isDark, ClassName)
    })

    const ToggleClass = (Condition, ClassName) => {
        if (Condition){ 
            window.document.body.classList.add(ClassName)
            return
        }

        window.document.body.classList.add(ClassName)
    }

    return [isDark, setIsDark]
}

export default SetDarkMode