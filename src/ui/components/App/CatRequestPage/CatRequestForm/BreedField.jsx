import React, { useState } from "react";

export function breedIsValid(breed) {
  const re = /^[а-яА-Я]*$/g;
  return re.test(breed);
}

export default function BreedField(props) {
  const [isValid, setIsValid] = useState(true);

  function handleBreedChange(e) {
    const breed = e.target.value;
    const isBreedValid = breedIsValid(breed);

    setIsValid(isBreedValid);

    props.onBreedChange({ breed, isValid: isBreedValid });
  }

  return (
    <div className="field">
      <label className="label">Порода кота</label>
      <div className="control has-icons-left">
        <input
          className={isValid ? "input" : "input is-danger"}
          type="text"
          placeholder="Введи породу кота твоей мечты"
          onChange={handleBreedChange}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-paw" />
        </span>
      </div>
    </div>
  );
}
