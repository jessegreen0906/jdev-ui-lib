import React from "react"; import {PageTemplate, PageTemplateInterface, renderContent, ContentNode} from "../PageTemplate/PageTemplate";
import {Heading} from "../../components/Heading/Heading";
import {SiteMenu} from "../../components/SiteMenu/SiteMenu";
import "./Basic.scss";
import {Footer} from "../../components/Footer/Footer";


export interface BasicTemplateProperties extends PageTemplateInterface {
	pageData: Array<ContentNode>;
}

export const BasicTemplate:React.FunctionComponent<BasicTemplateProperties> = (props) => {
	return (
		<PageTemplate pageData={props.pageData}>
			<SiteMenu />
			<main className={"content-box"}>
			{
				props.pageData.map((obj) => {
					renderContent(obj);
				})
				// for (let obj in props.pageData) {
				// 	renderContent(obj);
				// }
			}
			</main>
			<Footer />
		</PageTemplate>
	)
}