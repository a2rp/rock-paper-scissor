import { useState } from "react";
import { FaHandPaper, FaHandRock, FaHandScissors, FaRedo } from "react-icons/fa";
import styles from "./styles.module.scss";

const choices = [
  { value: "rock", label: "Rock", icon: FaHandRock },
  { value: "paper", label: "Paper", icon: FaHandPaper },
  { value: "scissor", label: "Scissor", icon: FaHandScissors },
];

const beats = {
  rock: "scissor",
  paper: "rock",
  scissor: "paper",
};

const RockPaperScissor = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [roundCount, setRoundCount] = useState(0);
  const [result, setResult] = useState("Choose a move to start the round.");

  const handleClick = (value) => {
    const computerMove = choices[Math.floor(Math.random() * choices.length)].value;
    setPlayerChoice(value);
    setComputerChoice(computerMove);
    setRoundCount((count) => count + 1);

    if (value === computerMove) {
      setResult("It is a draw.");
    } else if (beats[value] === computerMove) {
      setPlayerScore((score) => score + 1);
      setResult("You win this round.");
    } else {
      setComputerScore((score) => score + 1);
      setResult("Computer wins this round.");
    }
  };

  const resetGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setPlayerChoice("");
    setComputerChoice("");
    setRoundCount(0);
    setResult("Choose a move to start the round.");
  };

  const getLabel = (value) => choices.find((choice) => choice.value === value)?.label || "Waiting";

  return (
    <section className={styles.container} id="game">
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Quick match</p>
        <h1>Can you beat the computer?</h1>
        <p>Choose rock, paper, or scissor. The score updates after every round.</p>
      </div>

      <div className={styles.scoreboard}>
        <div><span>You</span><strong>{playerScore}</strong></div>
        <div className={styles.rounds}><span>Rounds</span><strong>{roundCount}</strong></div>
        <div><span>Computer</span><strong>{computerScore}</strong></div>
      </div>

      <div className={styles.playCard}>
        <div className={styles.playHeading}>
          <div><p className={styles.eyebrow}>Make your move</p><h2>Pick one</h2></div>
          <button className={styles.resetButton} type="button" onClick={resetGame}><FaRedo /> Reset</button>
        </div>

        <div className={styles.choiceGrid}>
          {choices.map(({ value, label, icon }) => {
            const Icon = icon;
            return (
              <button className={`${styles.choiceButton} ${styles[value]}`} type="button" key={value} onClick={() => handleClick(value)}>
                <Icon />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        <p className={styles.result} aria-live="polite">{result}</p>

        <div className={styles.versus}>
          <div><span>Your choice</span><strong>{getLabel(playerChoice)}</strong></div>
          <span className={styles.vs}>VS</span>
          <div><span>Computer choice</span><strong>{getLabel(computerChoice)}</strong></div>
        </div>
      </div>

      <div className={styles.rules}>
        <p className={styles.eyebrow}>Rules</p>
        <div><span>Rock beats Scissor</span><span>Scissor beats Paper</span><span>Paper beats Rock</span></div>
      </div>
    </section>
  );
};

export default RockPaperScissor;
