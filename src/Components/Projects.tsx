import React from "react"
import "./Projects.css"

const Projects: React.FC = () => {
    return (
        <div className={"Projects"}>
            <div className={"projects-header"}>
                <p>Projects</p>
            </div>
            <div className={"projects-body"}>
                <div className={"projects-box-column"}>
                    <div className={"projects-box-row"}>
                        <p>hi</p>
                        <p>hello</p>
                    </div>
                    <div className={"projects-box-row"}>
                        <p>oop</p>
                        <p>peepee</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Projects }