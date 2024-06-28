import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Leaderboard from "../components/Leaderboard";
import styles from "../styles/Greeting.module.css";

const Greeting = () => {
	const [score, setScore] = useState(0);
	const [leaderboard, setLeaderboard] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const finalScore = JSON.parse(localStorage.getItem("finalScore"));
		setScore(finalScore);
		const leaderboardData = JSON.parse(localStorage.getItem("leaderboard")) || [];
		setLeaderboard(leaderboardData);
	}, []);

	const handleClearLeaderboard = () => {
		localStorage.removeItem("leaderboard");
		setLeaderboard([]);
	};

	return (
		<div className={styles.container}>
			<h1>Hey {localStorage.getItem("name")}!</h1>
			<h2>You have scored: {score}</h2>
			<h3 className={score >= 10 ? styles.pass : styles.fail}>
				Status: {score >= 4 ? "PASS 😊" : "FAIL 😞"}
			</h3>
			<button onClick={() => navigate("/")}>Go to home page</button>
			<Leaderboard scores={leaderboard} />
			<button onClick={handleClearLeaderboard}>Clear Leaderboard</button>
		</div>
	);
};

export default Greeting;
