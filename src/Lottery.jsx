import { useState } from "react";
import "./AppHelper";
import "./Ticket";
import { generateTicket, sumArray } from "./AppHelper";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

export default function Lottery({ n, winningSum }) {
  let [ticket, setTicket] = useState(generateTicket(n));
  let isWinning = sumArray(ticket) === winningSum;
  let buyTicket = () => {
    setTicket(generateTicket(n));
  };

  return (
    <div>
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket} />
      <button onClick={buyTicket}>Gen Ticket</button>
      <h2>{isWinning && "Congratulations!! You Won"}</h2>
    </div>
  );
}

Lottery.propTypes = {
  n: PropTypes.number,
  winningSum: PropTypes.number,
};
