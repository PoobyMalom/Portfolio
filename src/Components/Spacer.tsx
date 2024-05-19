import React, {useEffect, useRef} from "react";
import './Spacer.css'

type SpacerProps = {
    width: number
}

const Spacer: React.FC<SpacerProps> = ({width}) => {
    const spacerRef = useRef<HTMLDivElement>(null);
    console.log(spacerRef);
    useEffect(() => {
        const gradientBox = spacerRef.current;
        if (gradientBox) {
            gradientBox.style.setProperty('--width', `${width}%`);
        }
    }, [width]);

    return (
        <div ref={spacerRef} className={"Spacer"}></div>
    )
}

export { Spacer }