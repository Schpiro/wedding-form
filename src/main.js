import "./style.css";
import javascriptLogo from "./assets/javascript.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { saveFormData } from "./firebase.js";

document.querySelector("#app").innerHTML = `<section id="title">
  <h1 class="tangerine-bold">Borna & Irena</h1>
  <h2 class="tangerine-regular">20.06.2026.</h2>
</section>

<section id="rsvp">
  <div class="tabs" role="tablist">
    <button
      class="tab-btn active"
      data-tab="rsvp"
      role="tab"
      aria-selected="true"
      aria-controls="tab-rsvp"
    >
      RSVP
    </button>
    <button
      class="tab-btn"
      data-tab="detalji"
      role="tab"
      aria-selected="false"
      aria-controls="tab-detalji"
    >
      Detalji
    </button>
  </div>

  <div id="tab-rsvp" class="tab-panel active" role="tabpanel">
    <form id="rsvp-form">
      <fieldset>
        <legend>
          Vaši podaci <span class="optional-note">(obavezno)</span>
        </legend>
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
            <input type="radio" name="guest1-attending" value="yes" required />
            Da
          </label>
          <label class="radio-option">
            <input type="radio" name="guest1-attending" value="no" required />
            Ne
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
        <div class="checkbox-group">
          <label class="checkbox-option">
            <input type="checkbox" name="accommodation" />
            Treba mi smještaj
          </label>
          <label class="checkbox-option">
            <input type="checkbox" name="transport" />
            Treba mi prijevoz iz Zagreba
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
              placeholder="Glazbene želje, pitanja, pozdravi..."
            ></textarea>
          </div>
        </div>
      </fieldset>

      <button type="submit" class="submit btn">Potvrdi</button>
    </form>
  </div>

  <div id="tab-detalji" class="tab-panel" role="tabpanel">
    <div class="detalji-content">
      <div class="detalji-block">
        <h3>Matičar </h3>
        <p><strong>Vrijeme:</strong> 14:00 - 14:30</p>
        <p><strong>Adresa:</strong> Šetalište maršala Tita 41, Lovran</p>
        <p>
          <strong>Google Maps:</strong>
          <a target="_blank" href="https://maps.app.goo.gl/DzNJ9zrhmvtAKUwQ7"
            >Općina Lovran</a
          >
        </p>
      </div>

      <div class="detalji-block">
        <h3>Zabava</h3>
        <p><strong>Početak:</strong> 20:00</p>
        <p><strong>Adresa:</strong> Rožići bb, Kostrena</p>
        <p>
          <strong>Google Maps:</strong>
          <a target="_blank" href="https://maps.app.goo.gl/3KXyGMMu7k8671PL9"
            >Mosquito Bar</a
          >
        </p>
      </div>

      <div class="detalji-block">
        <h3>Kontakti</h3>
        <p><strong>Borna:</strong> <a href="tel:+385911537637">+385911537637</a></p>
        <p><strong>Irena:</strong> <a href="tel:+385994719889">+385994719889</a></p>
        <p><strong>Anamari</strong> (kuma): <a href="tel:+385919776749">+385919776749</a></p>
      </div>

      <div class="detalji-block">
        <h3>Često postavljana pitanja</h3>
        <p>Nitko još nije postavio pitanja :)</p>
      </div>
    </div>
  </div>
</section>
`;

// Tab switching
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
    document
      .querySelectorAll(".tab-panel")
      .forEach((p) => p.classList.remove("active"));
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
    document.getElementById(`tab-${btn.dataset.tab}`).classList.add("active");
  });
});

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
    accommodation: form["accommodation"].checked,
    transport: form["transport"].checked,
    drink: form["drink"].value.trim(),
    allergies: form["allergies"].value.trim(),
    other: form["other"].value.trim(),
    submittedAt: new Date().toISOString(),
  };
  await saveFormData(data);
  alert("Hvala na potvrdi!");
});
