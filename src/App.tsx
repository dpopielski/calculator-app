import "./App.scss";
import CalcField from "./components/CalcField";
import { useState } from "react";

const characters = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  ",",
  "0",
  "←",
  "+",
];

function App() {
  const [value, setValue] = useState("0");
  // let calculated: boolean = false;

  const addToValue = (char: string) => {
    const last = value[value.length - 1];
    const forbidden = ["/", ",", "+", "-", "*"];

    // if (calculated) {
    //   calculated = false;
    //   setValue("0");
    // }

    if (value.length === 0 && forbidden.includes(char)) return;

    switch (char) {
      case "/":
      case ",":
      case "+":
      case "-":
      case "*":
        if (forbidden.includes(last)) return;
        break;
      case "←":
        let newValue = value.substring(0, value.length - 1);

        if (newValue.length === 0) {
          newValue = "0";
        }
        setValue(newValue);

        return;
    }

    setValue((value === "0" && !forbidden.includes(char) ? "" : value) + char);
  };

  const calculate = () => {
    try {
      let result = "" + eval(value);
      // calculated = true;
      setValue(result);
    } catch (e) {}
  };

  return (
    <>
      <div className="calculator">
        <div className="calculator__container">
          <div className="calculator__calc-area">{value}</div>
          <div className="calculator__area-border"></div>
          <div className="calculator__boxes-container">
            {characters.map((e) => (
              <CalcField char={e} cb={(key) => addToValue(key)} key={e} />
            ))}
          </div>
          <button className="calculator__button" onClick={() => calculate()}>
            RESULT
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
