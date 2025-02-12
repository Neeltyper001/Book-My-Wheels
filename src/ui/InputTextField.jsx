import { FormControl, Input, InputLabel } from "@mui/material";
import { kebabCaseFormatter } from "../utils/kebabCaseFormatter";
import { toLowerCaseFormatter } from "../utils/toLowerCaseFormatter";
function InputTextField({ textFieldLabelContent }) {
    const newRef = kebabCaseFormatter(toLowerCaseFormatter(textFieldLabelContent))
  return (
    <FormControl sx={{ alignSelf: "flex-start" }}>
      <InputLabel htmlFor={`${newRef}`}>{textFieldLabelContent}</InputLabel>
      <Input id={`${newRef}`} type={"text"} variant={"standard"} />
    </FormControl>
  );
}

export default InputTextField;
