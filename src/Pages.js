import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"

const Pages = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact={true} element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Pages