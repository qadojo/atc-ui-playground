import React from "react";

import NyanCat from "./CatRequestPage/nyan-cat.png";

import CatRequestForm from "./CatRequestPage/CatRequestForm";

export default function CatRequestPage() {
  return (
    <React.Fragment>
      <section className="hero is-link">
        <div className="hero-body">
          <div className="container">
            <img
              src={NyanCat}
              className="is-pulled-right"
              style={{ width: "100px" }}
            />
            <h1 className="title">Приюти кота сегодня!</h1>
            <h2 className="subtitle">
              Мы найдём тебе настоящего хвостатого друга
            </h2>
          </div>
        </div>
      </section>
      <section className="section">
        <CatRequestForm />
      </section>
    </React.Fragment>
  );
}
