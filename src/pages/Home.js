import React,{ useEffect} from "react"
import Header from "../components/Header"
import Hero from "./home/Hero"
import SetDocumentTitle from "../utils/SetDocumentTitle"

const Home = () => {

    useEffect(() => {
        SetDocumentTitle("Home")
    })

    return (
        <div>
            <Header />
            <Hero />
        </div>
    )
}

export default Home