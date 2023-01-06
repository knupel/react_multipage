import { Outlet } from "react-router-dom";

import { Menu } from "../components/menu";

export const Structure = () => {
	return(
		<>
			<Menu/>
			<Outlet/>
		</>
	)
}
