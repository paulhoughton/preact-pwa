import "@material/card/dist/mdc.card.css";
import "@material/button/dist/mdc.button.css";
import "./About.scss";

import { h } from "preact";

export default () => (
  <div class="about-component mdc-card">
    <section class="mdc-card__primary">
      <h1 class="mdc-card__title mdc-card__title--large">
        PWA
      </h1>
    </section>
    <section class="mdc-card__supporting-text">
      About this Application
    </section>
    <section class="mdc-card__actions">
      <a href="#/">
        <button class="mdc-button mdc-button--compact mdc-card__action">
          OK
        </button>
      </a>
    </section>
  </div>
);
