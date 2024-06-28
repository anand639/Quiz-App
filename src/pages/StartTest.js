import React, { useState, useEffect } from "react";
import CustomButton from "../components/CustomButton";
import CustomDialog from "../components/Dialog";
import Timer from "../components/Timer";
import styles from "../styles/StartTest.module.css";

const QUESTIONS_BY_SUBJECT = {
	math: {
		easy: [
			{ question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
			// Add more questions here
		],
		medium: [
			{ question: "What is 5 * 6?", options: ["30", "32", "35"], answer: "30" },
			// Add more questions here
		],
		hard: [
			{ question: "What is the derivative of x^2?", options: ["2x", "x^2", "2"], answer: "2x" },
			// Add more questions here
		],
	},
	science: {
		easy: [
			{
				question: "What planet is known as the Red Planet?",
				options: ["Earth", "Mars", "Jupiter"],
				answer: "Mars",
			},
			// Add more questions here
		],
		medium: [
			{
				question: "What is the chemical symbol for water?",
				options: ["H2O", "O2", "CO2"],
				answer: "H2O",
			},
			// Add more questions here
		],
		hard: [
			{
				question: "What is the speed of light?",
				options: ["3.0 x 10^8 m/s", "3.0 x 10^6 m/s", "3.0 x 10^5 m/s"],
				answer: "3.0 x 10^8 m/s",
			},
			// Add more questions here
		],
	},
	history: {
		easy: [
			{
				question: "Who was the first president of the United States?",
				options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
				answer: "George Washington",
			},
			// Add more questions here
		],
		medium: [
			{
				question: "In which year did the Titanic sink?",
				options: ["1912", "1905", "1898"],
				answer: "1912",
			},
			// Add more questions here
		],
		hard: [
			{
				question: "Who wrote the Declaration of Independence?",
				options: ["Thomas Jefferson", "George Washington", "John Adams"],
				answer: "Thomas Jefferson",
			},
			// Add more questions here
		],
	},
};

const StartTest = () => {
	const [user, setUser] = useState({});
	const [questions, setQuestions] = useState([]);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const quizUser = JSON.parse(localStorage.getItem("quizUser"));
		setUser(quizUser);
		setQuestions(QUESTIONS_BY_SUBJECT[quizUser.subject][quizUser.difficulty]);
	}, []);

	const handleAnswer = (answer) => {
		if (questions[currentQuestionIndex].answer === answer) {
			setScore(score + 2);
		} else {
			setScore(score - 1);
		}
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		} else {
			setOpen(true);
			const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
			leaderboard.push({ name: user.name, points: score });
			localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
		}
	};

	const handleClose = () => {
		setOpen(false);
		window.location.href = "/greeting";
	};

	const handleTimeUp = () => {
		setOpen(true);
		const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
		leaderboard.push({ name: user.name, points: score });
		localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
	};

	return (
		<div className={styles.container}>
			<h2>Welcome, {user.name}</h2>
			<h3>Subject: {user.subject}</h3>
			<h4>Difficulty: {user.difficulty}</h4>
			<Timer initialSeconds={60} onTimeUp={handleTimeUp} />
			{questions.length > 0 && (
				<div>
					<h4>{questions[currentQuestionIndex].question}</h4>
					{questions[currentQuestionIndex].options.map((option, index) => (
						<CustomButton key={index} onClick={() => handleAnswer(option)}>
							{option}
						</CustomButton>
					))}
				</div>
			)}
			<CustomDialog
				open={open}
				handleClose={handleClose}
				title="Quiz Completed"
				content={`Your final score is ${score}`}
			/>
		</div>
	);
};

export default StartTest;
