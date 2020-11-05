import React, {FunctionComponent} from "react";
import './InputLabel.scss';

export interface InputLabelProps {
	text: string
}

export const InputLabel:React.FunctionComponent<InputLabelProps> = (props) => {
	return(
		<label className={'jdev-input-label'}>{props.text}</label>
	)
}

InputLabel.defaultProps = {
	text: 'emptyLabel'
}