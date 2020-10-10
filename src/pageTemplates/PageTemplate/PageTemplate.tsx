import React, {PropsWithChildren} from "react";
import "./PageTemplate.scss";

export interface PageTemplateInterface {
	pageData: JSON
}

export const PageTemplate:React.FunctionComponent<PageTemplateInterface> = (props:PropsWithChildren<PageTemplateInterface>) => {
	return (
		<div id={"page-container"}>
			{props.children}
		</div>
	)
};