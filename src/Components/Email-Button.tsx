import React from 'react';

type HeaderButtonProps = {
    email: string;
    img_src: string;
    size: number;
}

const EmailButton: React.FC<HeaderButtonProps> = ({email, img_src, size}) => {
    const body = "";
    const subject = "Hello! I saw your portfolio"

    return (
        <div className={"email-button"}>
            <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} target="_blank" rel="noopener noreferrer">
                <img src={img_src} alt={"email-image"} width={size} height={size}/>
            </a>
        </div>
    );
}

export default EmailButton;