import React from 'react';

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
	
	return (
		<nav className="navbar navbar-light bg-primary">
			<span className="navbar-brand mb-0 h1 text-white">Car photos</span>
		</nav>
	);
};

export default Navbar;
