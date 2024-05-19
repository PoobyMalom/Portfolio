import React from "react"
import './Header-Button.css'

type HeaderButtonProps = {
    text: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({text}) => {
    return (
        <div className={"header-button"}>
            {text}
        </div>
    )
}

export { HeaderButton }