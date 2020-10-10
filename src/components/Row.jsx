import React from "react";

import Button from "@material-ui/core/Button";
export default function Row(props) {
  const { buttonsRow, onClick } = props;
  // button.map((el) => console.log(el));
  return (
    <>
      {buttonsRow.map((el) => (
        <Button
          variant="contained"
          color={el === "C" ? "secondary" : "primary"}
          className="numbersButton"
          onClick={() => onClick(el)}
        >
          {el}
        </Button>
      ))}
    </>
  );
}
