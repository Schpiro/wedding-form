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

  <div id="tab-detalji" >
    <div class="detalji-content">
      <div class="detalji-block">
        <h3>Matičar (opcionalno)</h3>
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
       
        <p><strong>Nakon matičara nema predviđenog programa.</strong> Zbog toga slobodno preskočite taj dio. Mi se družimo s užom obitelji, a vi slobodno odite na plažu, pojesti nešto, prošetati se - uživajte u Lovranu i okolici</p>
        
      </div>

      <div class="detalji-block">
        <h3>Zabava (obavezno!)</h3>
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
        <p><strong>Što nakon matičara?</strong></p>
        <p>Ništa, imate par sati slobodno do večernje fešte  </p>
        <br/>
        <p><strong>Što obući?</strong></p>
        <p>Budite lijepi i zgodni, po danu će biti jako vruće ali predvečer i po noći uz more zna biti svježe, pa ako ste zimogrozni ponesite nešto dugih rukava.</p><br/>
        <p><strong>A parking?</strong></p>
        <p>U Kostreni postoji parking uz glavnu cestu. Najbliži parking je <a href="https://maps.app.goo.gl/oxRxX3aFLjMg1nKh9" target="_blank">ovdje</a>, a osim toga imate <a href="https://maps.app.goo.gl/crfecHUCCTzxoBkx9" target="_blank">ovaj</a> i <a href="https://maps.app.goo.gl/rZBs3QE69saXjB3G9" target="_blank">ovaj</a> ali morate malo više hodati.</p>
        <p>Ako dolazite u Lovran, imate parking <a href="https://maps.app.goo.gl/4TcBQ3P31ry7micD9" target="_blank">ovdje</a> i <a href="https://maps.app.goo.gl/m19Y2kua3MwQDXY57" target="_blank">ovdje</a> i na još nekoliko lokacija u blizini, ali tamo često bude zauzeto.</p>
      </div>
    </div>
  </div>
</section>
`;
