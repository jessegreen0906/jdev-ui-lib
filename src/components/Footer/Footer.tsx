import React, {FunctionComponent} from "react";
import "./Footer.scss";

export interface FooterProps {
}


export const Footer:React.FunctionComponent<FooterProps> = (props) => {
	
	return (
		<footer>
			<div className={"content-box"}>
				<p>Copyright Jesse Green 2020</p>
			</div>
		</footer>
	);
}

Footer.defaultProps = {
}