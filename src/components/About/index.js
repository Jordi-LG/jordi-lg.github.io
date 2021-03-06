import React from "react";

import "./styles.scss";

const About = () => (
  <section className="about">
    <h1 className="about__title">Profil</h1>
    <p className="about__content">
      J'ai débuté ma carrière professionnelle dans le domaine de la recherche
      biologique en travaillant plusieurs années en cancérologie ainsi qu'en
      parasitologie.
      <br />
      <br />
      Je suis passioné de jeux vidéo, joueur en équipe et collectionneur à mes
      heures perdues. <br />
      J'ai une pratique occassionnelle de tir professionnel, de billard, ainsi
      que des pilates. <br />
      Je favorise les activités qui demandent concentration et rigueur.
      <br />
      <br />
      Ma curiosité m'a mené à un meeting organisé par la formation{" "}
      <a href="https://www.thehackingproject.org/">The Hacking Project</a>, où
      j'ai commencé à m'intéresser au domaine du web et aux technologies
      utilisées.
      <br />
      J'ai complémenté mes acquis en intégrant l'école{" "}
      <a href="https://oclock.io">O'Clock</a>, j'y ai également renforcé mon
      esprit professionnel pour ce nouveau domaine.
      <br />
      <br />
      Aujourd'hui je suis spécialisé en tant que développeur front end
      React/Redux.
      <br />
      J'ai pour ambition de travailler au sein d'une équipe dynamique et
      polyvalente pour perfectionner mes compétences.
    </p>
    <div className="about__images">
      <img src="img/me.png" alt="logo" className="about__me" />
      <img
        src="img/billard.png"
        alt="logo"
        className="about__bubbles about__billard about__me"
      />
      <img
        src="img/bio.png"
        alt="logo"
        className="about__bubbles about__bio about__me"
      />
      <img
        src="img/bubble.png"
        alt="logo"
        className="about__bubbles about__bubble1 about__me"
      />
      <img
        src="img/bubble.png"
        alt="logo"
        className="about__bubbles about__bubble2 about__me"
      />
      <img
        src="img/computer.png"
        alt="logo"
        className="about__bubbles about__computer about__me"
      />
      <img
        src="img/gamepad.png"
        alt="logo"
        className="about__bubbles about__gamepad about__me"
      />
      <img
        src="img/shooting.png"
        alt="logo"
        className="about__bubbles about__shooting about__me"
      />
    </div>
  </section>
);

export default About;
