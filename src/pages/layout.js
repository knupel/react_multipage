import {Outlet, Link} from "react-router-dom";

// function Menu() {
// 	return (
// 		<div>
// 			<ul>
// 				<li>
// 					<Link to="/">Resto</Link>
// 				</li>
// 				<li>
// 					<Link to="/entrees">Entrées</Link>
// 				</li>
// 				<li>
// 					<Link to="/plats">Plats</Link>
// 				</li>
// 				<li>
// 					<Link to="/desserts">Desserts</Link>
// 				</li>
// 			</ul>
// 		</div>
// 	)
// }

const Menu = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to="/">Resto</Link>
				</li>
				<li>
					<Link to="/entrees">Entrées</Link>
				</li>
				<li>
					<Link to="/plats">Plats</Link>
				</li>
				<li>
					<Link to="/desserts">Desserts</Link>
				</li>
			</ul>
		</div>
	)
}

export const Layout = () => {
	return(
		<>
			<Menu/>
			<Outlet/>
		</>
	)
}
