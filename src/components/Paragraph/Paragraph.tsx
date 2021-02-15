import React, {FunctionComponent} from "react";
import "./Paragraph.scss";

export interface ParagraphProps {
    text: string,
    variant?: string
}


export const Paragraph:React.FunctionComponent<ParagraphProps> = (props) => {
    
    return (
        <p className={"jdev-paragraph "+props.variant}>{props.text}</p>
    );
}

Paragraph.defaultProps = {
    variant: "standard"
}
