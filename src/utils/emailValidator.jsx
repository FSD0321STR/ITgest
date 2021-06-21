import React from "react";
import { FormHelperText } from "@material-ui/core";

function emailValidator(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(email);
  console.log(re.test(email));
  if (re.test(email)) {
    setMail(email);
  } else {
    return <FormHelperText> Inserte un email valido</FormHelperText>;
  }
}

export default emailValidator;
