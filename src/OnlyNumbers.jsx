import { useState } from "react";

const OnlyNumbers = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;

    // No soy experto en regex, me ayude de google para esta expresion.
    if (/^\d*$/.test(newValue)) {
      setValue(newValue);
    }
  };

  return (
    <div>
      <label>Ingresa un número entero positivo:</label>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default OnlyNumbers;
