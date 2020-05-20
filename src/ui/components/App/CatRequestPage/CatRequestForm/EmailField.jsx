import React from "react";

export default function EmailField(props) {
  function handleEmailChange(e) {
    props.onEmailChange(e.target.value);
  }

  return (
    <div className="field">
      <label className="label">Твоя почта</label>
      <div className="control has-icons-left">
        <input
          className="input "
          type="text"
          placeholder="Введи свою почту"
          onChange={handleEmailChange}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-envelope" />
        </span>
      </div>
    </div>
  );
}
