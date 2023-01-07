import {Link} from "react-router-dom";

export function Menu() {
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
				<li>
					<Link to="/boissons">Boissons</Link>
				</li>
			</ul>
		</div>
	)
}