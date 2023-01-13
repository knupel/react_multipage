import { Outlet } from "react-router-dom";

import { Menu } from "./menu";
import "./layout.css"

export const LayoutA = () => {
	return(
		<div className="style_a">
			<Menu/>
			<Outlet/>
		</div>
	)
}

export const LayoutB = () => {
	return(
		<div className="style_b">
			<Menu/>
			<Outlet/>
		</div>
	)
}

export const LayoutC = () => {
	return(
		<div className="style_c">
			<Menu/>
			<Outlet/>
		</div>
	)
}

