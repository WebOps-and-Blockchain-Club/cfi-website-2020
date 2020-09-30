import React from 'react';
import Heading from './Heading';
import List from './List';

function Achievements(props) {
	return (
		<div>
			<div className="hero">
				<div className="hero-title-container">
					<h2 id="title">
						Our <span className="title-red">Achievements.</span>
					</h2>
					<p>Over 400 sports startups from around the globe applied each year. Only a few made it.</p>
					<p>
						Meet the two cohorts that received 12 weeks of training in business, leadership and pitching skills in
						Berlin in 2017 and 2018.
					</p>
				</div>
			</div>
			<div className="achievements">
				<Heading  />
				<List />
			</div>
		</div>
		
	);
}

export default Achievements;
