import Image from "next/image";
import Link from "next/link";
import classes from "./navigation.module.scss";

// components
import ConnectButton from "../connectButton/connectButton";

// image
import logo from "@/assets/logo.png";
import xLogo from "@/assets/x-logo.svg";

export default function Navigation() {
  return (
    <nav className={classes.nav}>
      <div className={classes.nav__container}>
        <div className={classes.menu__button__wrapper}>
          <button className={classes.menu__text}>MENU</button>
        </div>
        <Link href="/">
          <Image
            className={classes.nav__logo}
            src={logo}
            alt="navigation logo"
            priority
          />
        </Link>
        <div className={classes.nav__links__wrapper}>
          <a href="https://x.com/JudgeToken?t=Ojg-ZNxG8IQxcjfuB4gdNw&s=08">
            <Image
              src={xLogo}
              priority
              className={classes.nav__x__logo}
              alt="X link"
            />
          </a>
          <ConnectButton className={classes.nav__connect__button} />
        </div>
      </div>
    </nav>
  );
}