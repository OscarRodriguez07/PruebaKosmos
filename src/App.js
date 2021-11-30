import { useState } from "react";
import "./App.css";
import formas from "./form.json";
import CheckFields from "./Components/CheckFields";
import SelectFields from "./Components/SelectFields";

function App() {
  const [inputPassword, setInputPassword] = useState(false);
  const [inputFirstName, setInputFirstName] = useState(false);
  const [inputLastName, setInputLastName] = useState(false);
  const [select, setSelect] = useState(false);
  const onInputChange = (e) => {
    if (e.target.name === "First Name") {
      setInputFirstName(e.target.checked);
    } else if (e.target.name === "Last Name") {
      setInputLastName(e.target.checked);
    } else if (e.target.name === "Password") {
      setInputPassword(e.target.checked);
    } else if (e.target.name === "Select") {
      setSelect(e.target.checked);
    }
  };
  return (
    <div className="App">
      <SelectFields Formas={formas} onChange={onInputChange} />
      <CheckFields
        Formas={formas}
        FirstName={inputFirstName}
        LastName={inputLastName}
        Password={inputPassword}
        Select={select}
      />
    </div>
  );
}

export default App;
