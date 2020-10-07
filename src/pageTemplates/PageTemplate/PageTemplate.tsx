import React, {PropsWithChildren} from "react";

export interface PageTemplateInterface {
	pageData: JSON
}

export const PageTemplate:React.FunctionComponent<PageTemplateInterface> = (props:PropsWithChildren<PageTemplateInterface>) => {
	return (
		<span>Empty page template</span>
	)
};