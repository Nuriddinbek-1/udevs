import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.svg";
import NavServices from "./nav_parts/NavServices";
import NavPortfolio from "./nav_parts/NavPortfolio";
import NavLanguages from "./nav_parts/NavLanguages";

// style
import navStyle from "./Navbar.module.css";

function Navbar() {
  const { t } = useTranslation();

  return (
    <div className={`${navStyle.navbar}`}>
      <div className={`container flex justify-between items-center`}>

        {/* logo of udevs on top left corner in navbar */}
        <img src={logo} alt="udev-logo" width={100} />

        {/* all section in navbar */}
        <ul className={`${navStyle.ul} flex`}>
          <li>
            <a href="#ourservices">{t("navbar.li1")}</a>
          </li>
          <li>
            <a href="#team">{t("navbar.li2")}</a>
          </li>
          <li>
            <a href="mobileapp">
              <NavServices />
            </a>
          </li>
          <li>
            <a href="">{t("navbar.li4")}</a>
          </li>
          <li>
            <a href="">{t("navbar.li5")}</a>
          </li>
          <li>
            <a href="">
              <NavPortfolio />
            </a>
          </li>
          <li>
            <NavLanguages />
          </li>
          <li>
            <a href="#">
              <button className="text-white bg-custom-blue rounded-custom-r leading-[35px] px-5">
                {t("navbar.li8")}
              </button>
            </a>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
