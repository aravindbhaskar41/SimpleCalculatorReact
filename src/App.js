import React from "react";
import "./styles.css";
import Typography from "@material-ui/core/Typography";
import Row from "./components/Row";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/styles";
import { evaluate } from "mathjs";

const useStyle = makeStyles({
  equalsButton: {
    background: "#FFDEAD"
  },
  app: {
    fontFamily: "Roboto",
    textAlign: "left"
  },
  screen: {
    height: 33,
    width: "100%",
    fontSize: 20,
    background: "white",
    border: "1px solid black"
  }
});

export default function App() {
  const [expression, setExpression] = React.useState("");
  const classes = useStyle();
  const handleClick = (_el) => {
    if (_el === "C") {
      console.log("clear is clicked");
      setExpression("");
      return;
    }
    let newExpression = expression;
    if (
      typeof newExpression === "string" ||
      _el === "*" ||
      _el === "+" ||
      _el === "/" ||
      _el === "-"
    )
      newExpression = expression + _el;
    console.log(newExpression);
    setExpression(newExpression);
  };

  const calculate = () => {
    console.log("calculate is clicked");
    try {
      let result = evaluate(expression);
      setExpression(result);
    } catch {
      setExpression("Invalid Expression");
    }
  };

  const buttonsArr = [
    [7, 8, 9, "+"],
    [4, 5, 6, "-"],
    [1, 2, 3, "*"],
    ["C", 0, ".", "/"]
  ];
  return (
    <Box className={classes.app}>
      <h1>Simple Calculator using React</h1>
      <div className="container">
        <Typography
          className={classes.screen}
          variant="subtitle1"
          component="h2"
        >
          {expression}
        </Typography>
        <br />
        <Box className="keypad" width={"100%"}>
          <div className="numbers">
            {buttonsArr.map((el) => (
              <Row buttonsRow={el} onClick={handleClick} />
            ))}
          </div>
          <Button
            className={classes.equalsButton}
            variant="contained"
            id="evaluate"
            onClick={calculate}
          >
            =
          </Button>
          <br />
        </Box>
      </div>
    </Box>
  );
}
