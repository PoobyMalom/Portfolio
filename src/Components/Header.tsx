import React from "react";
import './Header.css'
import { HeaderButton } from "./Header-Button"

const Header = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
    return (
        <div className={"header"} ref={ref}>
            <ul>
                <li><HeaderButton text={"About"}/></li>
                <li><HeaderButton text={"Resume"}/></li>
                <li><HeaderButton text={"Projects"}/></li>
                <li><HeaderButton text={"Contact"}/></li>
            </ul>
            <img src={'./tmlogo.png'} alt={"Logo"}/>
        </div>
    );
})

export { Header }