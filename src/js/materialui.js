import { Button, makeStyles } from "@material-ui/core";
// import { HomeIcon } from '@material-ui/icons';
import React from "react";

const usestyle = makeStyles({
  btn: { color: "red" },
  btn1: { backgroundColor: "yellow" },
});
const Materialui = () => {
  const user = usestyle();

  return (
    <div>
      <Button variant="contained" disableElevation className={user.btn}>
        hello
      </Button>
      <Button
        variant="outlined"
        className={user.btn1}
        onClick={() => {
          alert("23456");
        }}
      >
        click
      </Button>
      <Button
        variant="contained"
        color="primary"
        href="https://material-ui.com/components/buttons/#button"
      >
        {/* <HomeIcon color="primary" /> */}
      </Button>
    </div>
  );
};

export default Materialui;
