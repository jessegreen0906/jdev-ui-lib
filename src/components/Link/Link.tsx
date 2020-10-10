import React, {FunctionComponent} from "react";
import "./Link.scss";

export interface LinkProps {
    text: string,
    location?: string,
    variant?: string
}


export const Link:React.FunctionComponent<LinkProps> = (props) => {
    
    return (
        <a className={"jdev-link "+props.variant} href={props.location}>{props.text}</a>
    );
}

Link.defaultProps = {
    location: "#",
    variant: "standard"
}
