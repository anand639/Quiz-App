import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/Leaderboard.module.css";

const Leaderboard = ({ scores }) => {
	return (
		<div className={styles.leaderboard}>
			<h2>Leaderboard</h2>
			<ul>
				{scores.map((score, index) => (
					<li key={index}>
						{score.name}: {score.points}
					</li>
				))}
			</ul>
		</div>
	);
};

Leaderboard.propTypes = {
	scores: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			points: PropTypes.number.isRequired,
		})
	).isRequired,
};

export default Leaderboard;
