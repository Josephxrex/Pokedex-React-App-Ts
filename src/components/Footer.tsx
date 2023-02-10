import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import pokemonPic from "../assets/pikachu.png";
import locationPic from "../assets/pointer.png";
import itemsPic from "../assets/pokeball.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link 
      className={styles.footerLink} to="/Pokemons">
        <img className={styles.footerIcon} src={pokemonPic} alt="Pokeball" />
        Pokemons
      </Link>
      <Link
        onClick={(event) => event.preventDefault}
        className={styles.footerLink}
        to="/Items"
      >
        <img className={styles.footerIcon} src={itemsPic} alt="Pokeball" />
        Pokemons
      </Link>
      <Link
        onClick={(event) => event.preventDefault}
        className={styles.footerLink}
        to="/location"
      >
        <img className={styles.footerIcon} src={locationPic} alt="Pokeball" />
        Pokemons
      </Link>
    </footer>
  );
};

export default Footer;
