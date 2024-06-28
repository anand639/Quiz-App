import React, { useState, useEffect } from "react";
import CustomButton from "../components/CustomButton";
import CustomDialog from "../components/Dialog";
import Timer from "../components/Timer";
import styles from "../styles/StartTest.module.css";

const QUESTIONS_BY_SUBJECT = {
	math: {
		easy: [
			{ question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
			{ question: "What is 5 - 3?", options: ["2", "3", "1"], answer: "2" },
			{ question: "What is 10 ÷ 2?", options: ["2", "5", "10"], answer: "5" },
			{ question: "What is 3 x 3?", options: ["6", "9", "12"], answer: "9" },
			{ question: "What is 7 + 1?", options: ["6", "8", "10"], answer: "8" },
		],
		medium: [
			{ question: "What is 5 * 6?", options: ["30", "32", "35"], answer: "30" },
			{ question: "What is 12 + 15?", options: ["25", "27", "30"], answer: "27" },
			{ question: "What is 15 - 7?", options: ["7", "8", "9"], answer: "8" },
			{ question: "What is 36 ÷ 4?", options: ["9", "8", "6"], answer: "9" },
			{ question: "What is 11 x 2?", options: ["20", "21", "22"], answer: "22" },
		],
		hard: [
			{ question: "What is the derivative of x^2?", options: ["2x", "x^2", "2"], answer: "2x" },
			{
				question: "What is the integral of 2x?",
				options: ["x^2", "x^2 + C", "2x + C"],
				answer: "x^2 + C",
			},
			{
				question: "What is the limit of (x^2 - 1) / (x - 1) as x approaches 1?",
				options: ["1", "2", "undefined"],
				answer: "2",
			},
			{
				question: "What is the value of π?",
				options: ["3.14159", "3.14", "3.141"],
				answer: "3.14159",
			},
			{ question: "What is 2^5?", options: ["10", "32", "25"], answer: "32" },
		],
	},
	science: {
		easy: [
			{
				question: "What planet is known as the Red Planet?",
				options: ["Earth", "Mars", "Jupiter"],
				answer: "Mars",
			},
			{
				question: "What is H2O commonly known as?",
				options: ["Oxygen", "Water", "Hydrogen"],
				answer: "Water",
			},
			{
				question: "What gas do plants absorb from the atmosphere?",
				options: ["Oxygen", "Nitrogen", "Carbon Dioxide"],
				answer: "Carbon Dioxide",
			},
			{
				question: "What is the nearest planet to the Sun?",
				options: ["Earth", "Venus", "Mercury"],
				answer: "Mercury",
			},
			{
				question: "What force keeps us on the ground?",
				options: ["Magnetism", "Gravity", "Friction"],
				answer: "Gravity",
			},
		],
		medium: [
			{
				question: "What is the chemical symbol for water?",
				options: ["H2O", "O2", "CO2"],
				answer: "H2O",
			},
			{
				question: "What is the speed of light?",
				options: ["3.0 x 10^8 m/s", "3.0 x 10^6 m/s", "3.0 x 10^5 m/s"],
				answer: "3.0 x 10^8 m/s",
			},
			{
				question: "What is the powerhouse of the cell?",
				options: ["Nucleus", "Mitochondria", "Ribosomes"],
				answer: "Mitochondria",
			},
			{
				question: "What planet is known as the Gas Giant?",
				options: ["Earth", "Jupiter", "Mars"],
				answer: "Jupiter",
			},
			{
				question: "What is the boiling point of water?",
				options: ["90°C", "100°C", "120°C"],
				answer: "100°C",
			},
		],
		hard: [
			{
				question: "What is the formula for photosynthesis?",
				options: [
					"CO2 + H2O -> C6H12O6 + O2",
					"CO2 + H2O -> C6H12O6 + H2O",
					"C6H12O6 + O2 -> CO2 + H2O",
				],
				answer: "CO2 + H2O -> C6H12O6 + O2",
			},
			{
				question: "What is the Heisenberg Uncertainty Principle?",
				options: [
					"It is impossible to know the exact position and momentum of a particle simultaneously.",
					"Energy cannot be created or destroyed.",
					"For every action, there is an equal and opposite reaction.",
				],
				answer:
					"It is impossible to know the exact position and momentum of a particle simultaneously.",
			},
			{
				question: "What is the most abundant gas in the Earth’s atmosphere?",
				options: ["Oxygen", "Hydrogen", "Nitrogen"],
				answer: "Nitrogen",
			},
			{
				question: "What is the universal gravitational constant?",
				options: ["6.674 x 10^-11 N(m/kg)^2", "9.8 m/s^2", "3.14"],
				answer: "6.674 x 10^-11 N(m/kg)^2",
			},
			{
				question: "What is the chemical formula for sulfuric acid?",
				options: ["H2SO3", "H2SO4", "H2CO3"],
				answer: "H2SO4",
			},
		],
	},
	history: {
		easy: [
			{
				question: "Who was the first president of the United States?",
				options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
				answer: "George Washington",
			},
			{
				question: "What year did the Titanic sink?",
				options: ["1905", "1912", "1923"],
				answer: "1912",
			},
			{
				question: "Who discovered America?",
				options: ["Christopher Columbus", "Amerigo Vespucci", "Leif Erikson"],
				answer: "Christopher Columbus",
			},
			{
				question: "What ancient civilization built the pyramids?",
				options: ["Romans", "Greeks", "Egyptians"],
				answer: "Egyptians",
			},
			{
				question: "Who was known as the Maid of Orleans?",
				options: ["Joan of Arc", "Queen Elizabeth I", "Marie Antoinette"],
				answer: "Joan of Arc",
			},
		],
		medium: [
			{
				question: "In which year did World War I begin?",
				options: ["1914", "1916", "1918"],
				answer: "1914",
			},
			{
				question: "Who was the British Prime Minister during World War II?",
				options: ["Winston Churchill", "Neville Chamberlain", "Clement Attlee"],
				answer: "Winston Churchill",
			},
			{
				question: "What was the name of the ship that brought the Pilgrims to America?",
				options: ["Santa Maria", "Mayflower", "Endeavour"],
				answer: "Mayflower",
			},
			{
				question: "What empire did Genghis Khan establish?",
				options: ["Roman Empire", "Mongol Empire", "Ottoman Empire"],
				answer: "Mongol Empire",
			},
			{
				question: "Who was the last tsar of Russia?",
				options: ["Alexander II", "Nicholas II", "Peter the Great"],
				answer: "Nicholas II",
			},
		],
		hard: [
			{
				question: "Who wrote the Declaration of Independence?",
				options: ["Thomas Jefferson", "George Washington", "John Adams"],
				answer: "Thomas Jefferson",
			},
			{
				question: "What was the primary cause of the Russian Revolution?",
				options: [
					"Industrialization",
					"Economic hardship and political repression",
					"Religious conflicts",
				],
				answer: "Economic hardship and political repression",
			},
			{
				question: "In what year was the Berlin Wall built?",
				options: ["1950", "1961", "1970"],
				answer: "1961",
			},
			{
				question: "Who was the leader of the Indian independence movement?",
				options: ["Jawaharlal Nehru", "Indira Gandhi", "Mahatma Gandhi"],
				answer: "Mahatma Gandhi",
			},
			{
				question: "What treaty ended World War I?",
				options: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Tordesillas"],
				answer: "Treaty of Versailles",
			},
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
			setScore((prevScore) => prevScore + 2);
		} else {
			setScore((prevScore) => prevScore - 1);
		}
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		} else {
			const finalScore = score + (questions[currentQuestionIndex].answer === answer ? 2 : -1); // Calculate final score for the last question
			const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
			leaderboard.push({ name: user.name, points: finalScore });
			localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
			localStorage.setItem("finalScore", JSON.stringify(finalScore));
			setOpen(true);
		}
	};

	const handleClose = () => {
		setOpen(false);
		window.location.href = "/greeting";
	};

	const handleTimeUp = () => {
		const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
		leaderboard.push({ name: user.name, points: score });
		localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
		localStorage.setItem("finalScore", JSON.stringify(score));
		setOpen(true);
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
