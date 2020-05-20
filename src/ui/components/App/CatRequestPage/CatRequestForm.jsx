import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BreedField from "./CatRequestForm/BreedField";
import EmailField from "./CatRequestForm/EmailField";
import GenderField from "./CatRequestForm/GenderField";

import fetch from "cross-fetch";

export default function CatRequestForm() {
  const [catBreed, setCatBreed] = useState({ breed: "", isValid: true });
  const [catGender, setCatGender] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);

  const history = useHistory();

  function handleCreateCatRequest() {
    const { breed } = catBreed;

    fetch("http://localhost:3000/api/cats/requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        catBreed: breed === "" ? null : breed,
        catGender: catGender === "" ? null : catGender,
        userEmail,
      }),
    })
      .then(() => history.push("/success"))
      .catch((e) => console.error(e));
  }

  function handeEmailChange(email) {
    setUserEmail(email);
    setCanSubmit(email != null && email != "" && catBreed.isValid);
  }

  function handleBreedChange(breed) {
    setCatBreed(breed);
    setCanSubmit(userEmail != null && userEmail != "" && breed.isValid);
  }

  return (
    <form className="container">
      <div className="columns">
        <div className="column is-three-quarters-mobile is-half-tablet is-one-third-widescreen">
          <BreedField onBreedChange={handleBreedChange} />
          <GenderField onGenderChange={setCatGender} />
          <EmailField onEmailChange={handeEmailChange} />
          <div>
            <p className="has-text-grey	">
              Мы свяжемся с тобой, как только договоримся
              с&nbsp;подходящим&nbsp;тебе&nbsp;котом
            </p>
          </div>
          <br />
          <div className="field is-grouped">
            <div className="control">
              <button
                className="button is-link"
                onClick={handleCreateCatRequest}
                disabled={!canSubmit}
              >
                Котиндер!
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
