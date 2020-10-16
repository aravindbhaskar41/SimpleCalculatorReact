import React from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  numberButton: {
    height: 46,
    margin: 2
  },
  equalsButton: {
    background: blue
  }
});

export default function Row(props) {
  const { buttonsRow, onClick } = props;
  // button.map((el) => console.log(el));
  const classes = useStyles();
  return (
    <>
      {buttonsRow.map((el) => (
        <Button
          variant="contained"
          color={el === "C" ? "secondary" : "primary"}
          className={classes.numberButton}
          onClick={() => onClick(el)}
        >
          {el}
        </Button>
      ))}
    </>
  );
}
