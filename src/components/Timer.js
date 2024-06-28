import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Timer.module.css";

const Timer = ({ initialSeconds, onTimeUp }) => {
	const [seconds, setSeconds] = useState(initialSeconds);

	useEffect(() => {
		if (seconds > 0) {
			const timerId = setTimeout(() => setSeconds(seconds - 1), 1000);
			return () => clearTimeout(timerId);
		} else {
			onTimeUp();
		}
	}, [seconds, onTimeUp]);

	return (
		<div className={styles.timer}>
			<p>Time Left: {seconds}s</p>
		</div>
	);
};

Timer.propTypes = {
	initialSeconds: PropTypes.number.isRequired,
	onTimeUp: PropTypes.func.isRequired,
};

export default Timer;
