import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppContext from "../AppContext";
import { ArrowRight } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: "block",
    marginTop: "2rem",
  },
  button: {
    borderRadius:'10px'
  },
  textfield:{
    width:"40vw"
  }
}));

function Question() {
  const classes = useStyles();
  const value = useContext(AppContext);

  let { questionAnswer } = value.state;
  let { handleChangeInput, nextQuestion } = value.function;
  return (
    <div>
      <form Validate autoComplete="on" onSubmit={nextQuestion}>
        <TextField
          id="standard-basic"
          label={questionAnswer.question}
          name={questionAnswer.resumeFieldId}
          value={questionAnswer.answer ? questionAnswer.answer : ""}
          onChange={handleChangeInput}
          fullWidth
          className={classes.textfield}
          required
          
        />
        <div className={classes.buttonContainer}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<ArrowRight />}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}
export default Question;
