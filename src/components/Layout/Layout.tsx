import React, { ReactElement } from 'react';
import Navbar from './Navbar/Navbar';
import PropTypes from 'prop-types';

export interface LayoutProps {
	children: ReactElement;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
	return (
		<div>
			<Navbar />
			<div className="mt-4 container">{props.children}</div>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.element.isRequired
};

export default Layout;
