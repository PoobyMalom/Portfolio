import React, {useEffect, useRef} from "react";
import './Gradient-Box.css'

type GradProps = {
    color1: string;
    color2: string;
}

const GradientBox: React.FC<GradProps> = ({color1, color2}) => {
    const gradientBoxRef = useRef<HTMLDivElement>(null);
    console.log(gradientBoxRef);
    useEffect(() => {
        const gradientBox = gradientBoxRef.current;
        if (gradientBox) {
            gradientBox.style.setProperty('--color1', `${color1}`);
            gradientBox.style.setProperty('--color2', `${color2}`);
        }
    }, [color1, color2]);

    return (
        <div ref={gradientBoxRef} className={"Gradient-Box"}></div>
    )
}

export { GradientBox }