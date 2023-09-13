import React from "react";
import classes from "./Footer.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TripAdvisorIcon from "../../assets/tripadvisor-32.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={classes.footer}>
      <ul>
        <li>
          <a href="#">VegeApp</a>
        </li>
        <li>
          <ul className={classes["socialNetwork-icon"]}>
            <li>
              <a
                href="https://www.linkedin.com/in/sophiemispelter"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="https://www.tripadvisor.com/" target="_blank">
                <img
                  src={TripAdvisorIcon}
                  alt="TripAdvisor icon to see beautiful comments on our delicious veggie meals!"
                />
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="mailto:&#97;&#115;&#109;&#105;s&#112;e%6c&#116;&#101;%72&#64;ya%68o%6f%2ef&#114;"
            target="_blank"
          >
            {t("footer.contact")}
          </a>
        </li>
        <li>
          <a href="#">{t("footer.legal")}</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
