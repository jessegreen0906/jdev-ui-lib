import React, {PropsWithChildren} from "react";
import "./PageTemplate.scss";
import {Heading, HeadingProps} from "../../components/Heading/Heading";

export interface PageTemplateInterface {
	pageData: Array<ContentNode>
}

export interface ContentNode {
	contentType: string,
	props:PropsWithChildren<any>
}

export const PageTemplate:React.FunctionComponent<PageTemplateInterface> = (props:PropsWithChildren<PageTemplateInterface>) => {
	return (
		<div id={"page-container"}>
			{props.children}
		</div>
	)
};

/**
 *
 * @param content
 */
export const renderContent:Function = (content:ContentNode):JSX.Element => {
	const {contentType, props} = content;
	switch (contentType) {
		case "header":
			if (typeof props === "HeadingProps") {
				const castProps:HeadingProps = (props as HeadingProps);
				return <Heading props={castProps}></Heading>;
			}
			break;
		default:
			console.error("Page data includes invalid content type: " + contentType)
			return <div></div>;
	}
}
