import "./style.css";
import javascriptLogo from "./assets/javascript.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { setupCounter } from "./counter.js";
import { saveFormData } from "./firebase.js";

document.querySelector("#app").innerHTML = `<section id="center">
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179" />
    <img src="${javascriptLogo}" class="framework" alt="JavaScript logo" />
    <img src="${viteLogo}" class="vite" alt="Vite logo" />
  </div>
  <div>
    <h1>Get started</h1>
    <p>Edit <code>src/main.js</code> and save to test <code>HMR</code></p>
  </div>
  <button id="counter" type="button" class="counter"></button>
</section>

<div class="ticks"></div>

<section id="rsvp">
  <h2>RSVP</h2>
  <form id="rsvp-form">
    <fieldset>
      <legend>Vaši podaci <span class="optional-note">(obavezno)</span></legend>
      <div class="name-row">
        <div class="field">
          <label for="guest1-name">Ime i prezime</label>
          <input
            id="guest1-name"
            name="guest1-name"
            type="text"
            required
            placeholder="Ime i prezime"
          />
        </div>
      </div>
      <div class="radio-group">
        <span class="radio-label">Dolazim na vjenčanje?</span>
        <label class="radio-option">
          <input type="radio" name="guest1-attending" value="yes" required /> Da
        </label>
        <label class="radio-option">
          <input type="radio" name="guest1-attending" value="no" required /> Ne
        </label>
      </div>
    </fieldset>

    <fieldset>
      <legend>
        Plus jedan <span class="optional-note">(opcionalno)</span>
      </legend>
      <div class="name-row">
        <div class="field">
          <label for="guest2-name">Ime i prezime</label>
          <input
            id="guest2-name"
            name="guest2-name"
            type="text"
            placeholder="Ime i prezime"
          />
        </div>
      </div>
      <div class="radio-group">
        <span class="radio-label">Dolazim na vjenčanje?</span>
        <label class="radio-option">
          <input type="radio" name="guest2-attending" value="yes" /> Da
        </label>
        <label class="radio-option">
          <input type="radio" name="guest2-attending" value="no" /> Ne
        </label>
      </div>
    </fieldset>

    <fieldset>
      <legend>Smještaj i prijevoz</legend>
      <div class="radio-group">
        <span class="radio-label">Treba mi smještaj?</span>
        <label class="radio-option">
          <input type="radio" name="accommodation" value="yes" required/> Da
        </label>
        <label class="radio-option">
          <input type="radio" name="accommodation" value="no" required /> Ne
        </label>
      </div>
      <div class="radio-group">
        <span class="radio-label">Treba mi prijevoz iz Zagreba?</span>
        <label class="radio-option">
          <input type="radio" name="transport" value="yes" required /> Da
        </label>
        <label class="radio-option">
          <input type="radio" name="transport" value="no" required /> Ne
        </label>
      </div>
    </fieldset>

    <fieldset>
      <legend>Hrana i piće</legend>
      <div class="name-row">
        <div class="field">
          <label for="drink">Što želite piti?</label>
          <input
            id="drink"
            name="drink"
            type="text"
            
            placeholder="Vino, pivo, bezalkoholno, kokteli (koji?)..."
          />
        </div>
      </div>
      <div class="name-row">
        <div class="field">
          <label for="allergies"
            >Imate li alergije ili posebne prehrambene zahtjeve?</label
          >
          <input
            id="allergies"
            name="allergies"
            type="text"
            placeholder="Ako da, navedite koje"
          />
        </div>
      </div>
    </fieldset>

    <fieldset>
      <legend>Ostalo</legend>
      <div class="name-row">
        <div class="field">
          <label for="other">Ako imate dodatne napomene, pišite :)</label>
          <textarea
            id="other"
            name="other"
            rows="4"
            placeholder="Ako imate dodatne napomene, pišite ovdje..."
          ></textarea>
        </div>
      </div>
    </fieldset>

    <button type="submit" class="counter">Send RSVP</button>
  </form>
</section>
`;

setupCounter(document.querySelector("#counter"));

document.querySelector("#rsvp-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    guest1: {
      firstName: form["guest1-name"].value.trim(),
      attending: form["guest1-attending"].value,
    },
    guest2: {
      firstName: form["guest2-name"].value.trim(),
      attending: form["guest2-attending"].value,
    },
    accommodation: form["accommodation"].value,
    transport: form["transport"].value,
    drink: form["drink"].value.trim(),
    allergies: form["allergies"].value.trim(),
    other: form["other"].value.trim(),
    submittedAt: new Date().toISOString(),
  };
  await saveFormData(data);
  alert("RSVP sent!");
});
