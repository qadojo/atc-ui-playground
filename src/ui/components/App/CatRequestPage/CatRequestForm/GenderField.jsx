import React from "react";

export default function GenderField(props) {
  function handleGenderChange(e) {
    props.onGenderChange(e.target.value);
  }

  return (
    <div className="field">
      <label className="label">Пол кота</label>
      <div className="control has-icons-left">
        <div className="select">
          <select onChange={handleGenderChange}>
            <option value="">Выбери пол кота</option>
            <option value="MALE">Мальчик</option>
            <option value="FEMALE">Девочка</option>
          </select>
          <span className="icon is-small is-left">
            <i className="fas fa-venus-mars" />
          </span>
        </div>
      </div>
    </div>
  );
}
