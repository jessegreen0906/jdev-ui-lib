import React, {FunctionComponent} from "react";
import './SiteMenu.scss';
import {Link} from "../Link/Link";

export interface SiteMenuProps {
	variant?: string
}


export const SiteMenu:React.FunctionComponent<SiteMenuProps> = (props) => {
	
	return (
		<div className={"jdev-site-menu "+props.variant}>
			<nav>
				<ul>
					<li><Link text={"Home"} location={"/home"} /> </li>
					<li className={"current-location1"}><Link text={"Services"} location={"/services"} /> </li>
					<li><Link text={"Blog"} location={"/blog"} /> </li>
					<li><Link text={"Contact me"} location={"/contact-me"} /> </li>
				</ul>
			</nav>
			
		</div>
	);
}

SiteMenu.defaultProps = {
	variant: "standard"
}