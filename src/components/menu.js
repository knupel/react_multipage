import { Link } from "react-router-dom";

export function Menu() {
	return (
		<div>
			<ul>
				<li><Link to="/">Lab</Link></li>
				<li><Link to="/projet_a">Projet A</Link></li>
				<li><Link to="/projet_b">Projet B</Link></li>
				<li><Link to="/projet_c">Projet C</Link></li>
				<li><Link to="/projet_x">Projet X</Link></li>
			</ul>
		</div>
	)
}