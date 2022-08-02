import { useState, ChangeEvent} from "react";
import { Button, TextInput } from "@carbon/react";

import styles from "./App.module.scss";

function App() {
  const [input, setInput] = useState("");  

  const handleChange = (event: ChangeEvent<HTMLInputElement>)  => {
    setInput(event.target.value);
  };

  const onButtonClick = () => {
    alert("Hi " + input +", Have a nice day!!");
  };

  return (
    <div className={styles.appDiv}>
      <h1>Welcome to Get started with React, TypeScript, and Carbon 11 </h1>
      <div className={styles.bodyDiv}>
        <TextInput
          id="text-input-1"
          type="text"
          labelText="Text input label"
          helperText="Optional help text"
          value={input}
          onChange={handleChange}
        />

        <Button
          kind="primary"
          size="sm"
          type="submit"
          iconDescription={"Description"}
          tooltipAlignment="end"
          tooltipPosition="left"
          onClick={onButtonClick}
        >Click !</Button>
      </div>
    </div>
  );
}

export default App;
