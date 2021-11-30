import React from "react";

function SelectFields({ Formas, onChange }) {
  console.log(Formas);
  return (
    <div className="selectFields">
      {Formas.map((Item) => {
        return (
          <div key={Item.id}>
            <label>Seleccione Campo: {Item.label}</label>
            <input
              type="checkbox"
              id={Item.id}
              name={Item.label}
              onChange={onChange}
            />
          </div>
        );
      })}
    </div>
  );
}

export default SelectFields;
