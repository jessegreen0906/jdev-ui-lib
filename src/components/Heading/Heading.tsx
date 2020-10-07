import React, {FunctionComponent, ReactElement} from "react";
import './Heading.scss';

export interface HeadingProps {
    text: string
    level?: number
    pseudoHeading?: boolean
}


export const Heading:React.FunctionComponent<HeadingProps> = (props) => {
    let markup: ReactElement;
    if(props.pseudoHeading) {
        markup = <p className={"jdev-heading pseudo-heading"+props.level}>{props.text}</p>;
    } else {
    
        switch (props.level) {
            case 1: {
                markup = <h1 className={"jdev-heading"}>{props.text}</h1>
                break;
            }
            case 2: {
                markup = <h2 className={"jdev-heading"}>{props.text}</h2>
                break;
            }
            case 3: {
                markup = <h3 className={"jdev-heading"}>{props.text}</h3>
                break;
            }
            case 4: {
                markup = <h4 className={"jdev-heading"}>{props.text}</h4>
                break;
            }
            case 5: {
                markup = <h5 className={"jdev-heading"}>{props.text}</h5>
                break;
            }
            case 6: {
                markup = <h6 className={"jdev-heading"}>{props.text}</h6>
                break;
            }
            default: {
                markup = <div></div>
                console.error('Heading component failed to render');
                break;
            }
        }
    }
    
    return (
        markup
    );
}

Heading.defaultProps = {
    level: 1,
    pseudoHeading: false
}
