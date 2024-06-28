import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import styles from "../styles/TestInfo.module.css";

const TestInfo = () => {
	const [name, setName] = useState("");
	const [subject, setSubject] = useState("");
	const [difficulty, setDifficulty] = useState("");
	const navigate = useNavigate();

	const handleStart = () => {
		if (name && subject && difficulty) {
			localStorage.setItem("quizUser", JSON.stringify({ name, subject, difficulty }));
			navigate("/start");
		} else {
			alert("Please fill in all fields");
		}
	};

	return (
		<div className={styles.container}>
			<input
				type="text"
				placeholder="Enter your name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<select value={subject} onChange={(e) => setSubject(e.target.value)}>
				<option value="" disabled>
					Select Subject
				</option>
				<option value="math">Math</option>
				<option value="science">Science</option>
				<option value="history">History</option>
			</select>
			<select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
				<option value="" disabled>
					Select difficulty
				</option>
				<option value="easy">Easy</option>
				<option value="medium">Medium</option>
				<option value="hard">Hard</option>
			</select>
			<CustomButton onClick={handleStart}>Submit</CustomButton>
		</div>
	);
};

export default TestInfo;
