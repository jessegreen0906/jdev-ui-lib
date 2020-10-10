import React from "react";
import {PageTemplate, PageTemplateInterface} from "../PageTemplate/PageTemplate";
import {Heading} from "../../components/Heading/Heading";
import {SiteMenu} from "../../components/SiteMenu/SiteMenu";
import "./Basic.scss";
import {Footer} from "../../components/Footer/Footer";

export interface BasicTemplateProperties extends PageTemplateInterface {
	pageData:JSON
}

export const BasicTemplate:React.FunctionComponent<BasicTemplateProperties> = (props) => {
	return (
		<PageTemplate pageData={props.pageData}>
			<SiteMenu />
			<main className={"content-box"}>
				<Heading text={"Page Title"} />
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
			</main>
			<Footer />
		</PageTemplate>
	)
}