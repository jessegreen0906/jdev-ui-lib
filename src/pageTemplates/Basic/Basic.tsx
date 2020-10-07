import React from "react";
import {PageTemplateInterface} from "../PageTemplate/PageTemplate";

export interface BasicTemplateProperties extends PageTemplateInterface {

}

export const BasicTemplate:React.FunctionComponent<BasicTemplateProperties> = (props) => {
	return (
		<span>Empty basic page template</span>
	)
}