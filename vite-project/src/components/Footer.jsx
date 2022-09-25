import React from "react";
import { FcCopyright } from "react-icons/fc";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import styles from "./styles.module.css";

export const Footer = (onGitHub, onLinkedin) => {
  const Copyright = FcCopyright;
  const GitHub = AiFillGithub;
  const Linkedin = AiFillLinkedin;

  return (
    <div className={styles.footer}>
      <div>
        <Copyright />
      </div>
      <div>Criado por Joyce Bigoli</div>
      <div className={styles.redes}>
        <button onClick={onGitHub}>
          <a href="https://github.com/JoyceBigoli">
            <GitHub size='30' />
          </a>
        </button>
        <button onClick={onLinkedin}>
          <a href="https://www.linkedin.com/in/joyce-bigoli-223aa">
            <Linkedin size='30' />
          </a>
        </button>
      </div>
    </div>
  );
};
