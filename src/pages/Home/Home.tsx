import React from "react";
import Container from "@material-ui/core/Container";

import { Poker, TopBar } from "components";

import { HomeStyles } from "./styles/Home.styles";

function Home() {
  const classes = HomeStyles();

  return (
    <div className={classes.container}>
      <TopBar />

      <Container maxWidth="md">
        <h1>Planning Poker</h1>

        <h2>Votes</h2>
        <p>(Select one card)</p>

        <Poker />

        <hr />

        <h2>Live results</h2>
        <ul>
          <li>
            Numeric mean: <strong className="mean1"></strong>
          </li>
          <li>
            Indexed mean: <strong className="mean2"></strong>
          </li>
        </ul>

        <hr />

        <h2>So?</h2>
        <p>
          By converting the numbers to their <strong>index</strong> and finding
          the mean, then converting back into fibonacci values, outliers have
          less sway and a more expected result can be determined.
        </p>
      </Container>
    </div>
  );
}

export default Home;
