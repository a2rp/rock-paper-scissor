import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Button } from "@mui/material";
import { FaHandRock } from "react-icons/fa";
import { FaHandPaper } from "react-icons/fa";
import { FaHandScissors } from "react-icons/fa";
import { toast } from "react-toastify";

const RockPaperScissor = () => {
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);

    const [playerChoice, setPlayerChoice] = useState("null");
    const [computerChoice, setComputerChoice] = useState("null");

    const [clickCount, setClickCount] = useState(0);

    const handleClick = (value) => {
        setClickCount(clickCount + 1);
        const choicesArray = ["rock", "paper", "scissor"];
        const playerChoice = value;
        const computerChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
        // console.log(playerChoice, computerChoice, "choices");
        setPlayerChoice(playerChoice);
        setComputerChoice(computerChoice);

        if (playerChoice === computerChoice) {
            // toast.warn("Computer and you have selected the same choice.");
        } else if ((playerChoice === "rock" && computerChoice === "scissor") ||
            (playerChoice === "scissor" && computerChoice === "paper") ||
            (playerChoice === "paper" && computerChoice === "rock")) {
            setPlayerScore(playerScore => playerScore + 1);
        } else {
            setComputerScore(computerScore => computerScore + 1);
        }
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Rock-Paper-Scissor</h3>

            <h3 className={styles.clickCount}>Total {clickCount} clicks</h3>

            <div className={styles.buttonsContainer}>
                <Button variant="contained" className={styles.rockButton}
                    onClick={() => handleClick("rock")}
                >
                    <FaHandRock className={styles.icon} />
                    <div className={styles.text}>Rock</div>
                </Button>

                <Button variant="contained" className={styles.paperButton}
                    onClick={() => handleClick("paper")}
                >
                    <FaHandPaper className={styles.icon} />
                    <div className={styles.text}>Paper</div>
                </Button>

                <Button variant="contained" className={styles.scissorButton}
                    onClick={() => handleClick("scissor")}
                >
                    <FaHandScissors className={styles.icon} />
                    <div className={styles.text}>Scissor</div>
                </Button>
            </div>

            <div className={styles.scoreContainer}>
                <div className={styles.playerArea}>
                    <h3 className={styles.title}>Player</h3>
                    <h3>Choice: {playerChoice}</h3>
                    <h3>Score: {playerScore}</h3>
                </div>
                <div className={styles.computerArea}>
                    <h3 className={styles.title}>Computer</h3>
                    <h3>Choice: {computerChoice}</h3>
                    <h3>Score: {computerScore}</h3>
                </div>
            </div>

            <div className={styles.resetContainer}>
                <Button variant="contained" className={styles.resetButton} onClick={() => {
                    setPlayerChoice("null");
                    setComputerChoice("null");
                    setPlayerScore(0);
                    setComputerScore(0);
                }}>reset</Button>
            </div>

            <div className={styles.rulesContainer}>
                <h3 className={styles.rulesHeading}>Rules</h3>
                <div className={styles.rules}>
                    <h3>In rock && scissor: rock wins +1</h3>
                    <h3>In scissor && paper: scissor wins +1</h3>
                    <h3>In paper && rock: paper wins +1</h3>
                </div>
            </div>
        </div>
    )
}

export default RockPaperScissor

