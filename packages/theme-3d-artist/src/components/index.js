import React from "react"
import { connect } from "frontity"
import ThreeJSBackground from "./background"

const Main = () => {

    return (
        <>
            <div>
                <h1> Hello</h1> 
            </div>
            {/* Canvas */}
            <ThreeJSBackground />
        </>
    )
}
export default connect(Main)