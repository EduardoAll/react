import React from "react";

import Button from "./components/Button";
import Container from "./components/Container";
import Typography from "./components/Typography";

import useCounter from "./hooks/useCounter";

const Counter = ({ initialValue }) => {
  const { count, decrement, increment, reset } = useCounter({
    initialValue
  });

  return (
    <Container>
      <Button variant="primary" onClick={decrement}>
        -
      </Button>
      <Typography>{count}</Typography>
      <Button variant="secondary" onClick={increment}>
        +
      </Button>
      <Button class="reseteo" variant="terciary" onClick={reset}>
        reset
      </Button>
    </Container>
  );
};

Counter.displayName = "Counter";

export default Counter;
