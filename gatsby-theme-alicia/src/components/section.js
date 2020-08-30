import React, { useState } from 'react';

import Card from '../components/card';
import CardContent from '../components/card-content';

const Section = ({ children, index }) => {
	const [selected, setSelected] = useState(false);

	return (
		<Card index={index} onClick={() => setSelected(!selected)}>
			<CardContent>{children}</CardContent>
		</Card>
	);
};

export default Section;
