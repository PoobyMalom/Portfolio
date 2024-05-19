import React from "react";
import './Link-Button.css'

type HeaderButtonProps = {
    link: string;
    img_src: string;
    size: number;
}

const LinkButton: React.FC<HeaderButtonProps> = ({link, img_src, size}) => {
    return (
        <div className={"link-button"}>
            <a href={link}>
                <img src={img_src} width={size} height={size} alt={"link"}/>
            </a>
        </div>
    )
}

export { LinkButton }