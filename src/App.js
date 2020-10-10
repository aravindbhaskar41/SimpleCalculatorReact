import React from "react";
import "./styles.css";
import Typography from "@material-ui/core/Typography";
import Row from "./components/Row";
import Button from "@material-ui/core/Button";
import { evaluate } from "mathjs";
export default function App() {
  const [expression, setExpression] = React.useState("");

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
    <>
      <h1>Simple Calculator using React</h1>
      <div className="container">
        <Typography className="screen" variant="subtitle1" component="h2">
          {expression}
        </Typography>
        <br />
        <div className="keypad">
          <div className="numbers">
            {buttonsArr.map((el) => (
              <Row buttonsRow={el} onClick={handleClick} />
            ))}
          </div>
          <Button
            className="equalsButton"
            variant="contained"
            id="evaluate"
            onClick={calculate}
          >
            =
          </Button>
          <br />
        </div>
      </div>
    </>
  );
}
