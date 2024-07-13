import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// logo and icons
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";

// dropdown parts
import NavServices from "./nav_parts/NavServices";
import NavPortfolio from "./nav_parts/NavPortfolio";
import NavLanguages from "./nav_parts/NavLanguages";

// style
import navStyle from "./Navbar.module.css";

// aos library
import Aos from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      data-aos="fade-down"
      data-aos-once="true"
      className={`${navStyle.navbar}`}>
      <div className={`container`}>
        {/* navbar for big screen */}
        <div className={`hidden lg:flex justify-between items-center`}>
          <img src={logo} alt="udev-logo" width={100} />

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

        {/* navbar for small screen */}
        <div className={`lg:hidden`}>
          {/* navbar when menu closed */}
          <div className="flex justify-between h-[50px]">
            <img src={logo} alt="udev-logo" width={70} />
            <img
              src={menu}
              alt="menu icon"
              width={25}
              onClick={() => setIsMenuOpen(true)}
            />
          </div>

          {/* navbar when menu opened */}
          <div
            className={`${
              isMenuOpen ? "" : "hidden"
            } fixed z-[1000] h-screen top-0 left-0 w-full bg-custom-green p-3 flex flex-col`}>
            <div className="flex justify-between">
              <img src={logo} alt="udev-logo" width={70} />
              <img
                src={close}
                alt="close icon"
                width={25}
                onClick={() => setIsMenuOpen(false)}
              />
            </div>

            <ul
              className={`${navStyle.ul} flex flex-col my-auto text-center text-2xl`}>
              <li>
                <a href="#mobileapp" onClick={() => setIsMenuOpen(false)}>
                  {t("navbar.li3.0")}
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setIsMenuOpen(false)}>
                  {t("navbar.li5")}
                </a>
              </li>
              <li>
                <a href="#team" onClick={() => setIsMenuOpen(false)}>
                  {t("navbar.li2")}
                </a>
              </li>
            </ul>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="my-5">
              <button className="text-white w-full bg-custom-blue rounded-custom-r leading-[35px] py-2">
                {t("navbar.li8")}
              </button>
            </a>

            {/* social icons */}
            <div className="flex mx-auto my-2">
              <div className="rounded-[50%] bg-[#DDE6FF] p-1 w-[40px] h-[40px]">
                <img src={instagram} alt="instagram" />
              </div>
              <div className="rounded-[50%] bg-[#DDE6FF] p-2 w-[40px] h-[40px] mx-5">
                <img src={twitter} alt="twitter" />
              </div>
              <div className="rounded-[50%] bg-[#DDE6FF] p-2 w-[40px] h-[40px]">
                <img src={youtube} alt="youtube" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
