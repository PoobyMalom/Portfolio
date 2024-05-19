import React, {useEffect} from 'react';
import "./Intro.css"
import { LinkButton } from './Link-Button'
import {GradientBox} from "./Gradient-Box";
import {Spacer} from "./Spacer";
import EmailButton from "./Email-Button";
import {Header} from "./Header";

type IntroProps = {
    headerRef: React.RefObject<HTMLDivElement>;
}

const Intro: React.FC<IntroProps> = ({headerRef}) => {
    useEffect(() => {
        const header = headerRef.current;
        console.log(header)
        if (header) {
            const headerHeight = header.offsetHeight;
            const introBody = document.querySelector('.intro-body') as HTMLElement;
            console.log("eek")
            if (introBody) {
                introBody.style.setProperty('--header-height', `${headerHeight}px`);
                console.log("found!")
            }
        }
    }, [headerRef]);

    return (
        <div className={"intro"}>
            <Header ref={headerRef}/>
            <div className={"intro-body"}>
                <div className={"intro-body-left-padding"}></div>
                <div className={"intro-text-box"}>
                    <h1>Hi. I'm Toby.</h1>
                    <h1>An Engineer.</h1>
                    <p>I'm also a Proficient Python, Java, TypeScript, React, C++, and ROS2 Developer. Also
                         passionate about robotics and bringing innovation to product
                        functionalities.</p>
                    <div className={"link-row"}>
                        <LinkButton link={"https://github.com/PoobyMalom"} img_src={"/github.png"} size={50}/>
                        <LinkButton link={"https://www.linkedin.com/in/tobymallon/"} img_src={"/linkedin.png"} size={50}/>
                        <EmailButton email={"tmallon@gmail.com"} size={50} img_src={"/mail.png"}/>
                    </div>
                </div>
                <div className={"my-image"}>
                    <div className={"gradient-column"}>
                        <GradientBox color1={"#DACDFF"} color2={"#85C5D1"}/>
                        <GradientBox color1={"#FEEAEE"} color2={"#EADAF6"}/>
                    </div>
                    <Spacer width={2}/>
                    <div className={"rounded-box"}>
                        <img src={"./portrait.png"} alt={"logo"}/>
                    </div>
                    <Spacer width={2}/>
                    <div className={"gradient-column"}>
                        <GradientBox color1={"#FEF2C6"} color2={"#FAD3EB"}/>
                        <GradientBox color1={"#065276"} color2={"#008081"}/>
                    </div>
                </div>
                <div className={"intro-body-right-padding"}></div>
            </div>
        </div>
    );
}

export { Intro }