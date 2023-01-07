import { Outlet } from "react-router-dom";

import { Menu } from "./menu";
import "./layout.css"

export const Layout_A = () => {
	return(
		<div className="style_a">
			<Menu/>
			<Outlet/>
		</div>
	)
}


export const Layout_B = () => {
	return(
		<div className="style_b">
			<Menu/>
			<Outlet/>
		</div>
	)
}

export const Layout_C = () => {
	return(
		<div className="style_c">
			<Menu/>
			<Outlet/>
		</div>
	)
}

