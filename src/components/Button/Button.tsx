import React, {FunctionComponent} from "react";
import './Button.scss';

export interface ButtonProps {
    text: string
    action?: Function
    variant?: string
}


export const Button:React.FunctionComponent<ButtonProps> = (props) => {
    
    return (
        <button className={'jdev-button '+props.variant} onClick={props.action}>{props.text}</button>
    );
}

Button.defaultProps = {
    variant: 'standard'
}
