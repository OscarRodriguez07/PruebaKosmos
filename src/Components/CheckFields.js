import React from "react";

function checkFields({ Formas, FirstName, LastName, Password, Select }) {
  return (
    <div>
      {Formas.map((item) => {
        if (FirstName === true && item.label === "First Name") {
          return (
            <form key={item.id}>
              <label>{item.label}</label>
              <input type={item.type} />
            </form>
          );
        } else if (LastName === true && item.label === "Last Name") {
          return (
            <form key={item.id}>
              <label>{item.label}</label>
              <input type={item.type} />
            </form>
          );
        } else if (Password === true && item.label === "Password") {
          return (
            <form key={item.id}>
              <label>{item.label}</label>
              <input type={item.type} />
            </form>
          );
        } else if (Select === true && item.label === "Select") {
          return (
            <select name={item.label} id={item.id}>
              {item.options.map((option) => {
                return <option value={option.value}>{option.value}</option>;
              })}
            </select>
          );
        }
      })}
    </div>
  );
}

export default checkFields;
