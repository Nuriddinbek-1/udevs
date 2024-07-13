// style
import footerStyle from "./Footer.module.css";

import logo from "../../assets/logo.svg";
import instagram from "../../assets/instagram.svg"
import twitter from "../../assets/twitter.svg"
import youtube from "../../assets/youtube.svg"
import { useTranslation } from "react-i18next";

function Footer() {

  const { t } = useTranslation()

  return (
    <div className="bg-custom-green pb-10" id="footer">
      <div className="container">

        {/* logo */}
        <div className="py-10">
          <img
            src={logo}
            alt="udevs logo"
            className="mx-auto"
            width={100}
          />
        </div>

        {/* all links in the middle of the footer */}
        <div className={`${footerStyle.footer}`}>
          <div>
            <h4 className="">{t('footer.about.header')}</h4>
            <ul>
              <li>
                <a href="">{t('footer.about.1')}</a>
              </li>
              <li>
                <a href="">{t('footer.about.2')}</a>
              </li>
              <li>
                <a href="">{t('footer.about.3')}</a>
              </li>
              <li>
                <a href="">{t('footer.about.4')}</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="">{t('footer.services.header')}</h4>
            <ul>
              <li>
                <a href="">{t('footer.services.1')}</a>
              </li>
              <li>
                <a href="">{t('footer.services.2')}</a>
              </li>
              <li>
                <a href="">{t('footer.services.3')}</a>
              </li>
              <li>
                <a href="">{t('footer.services.4')}</a>
              </li>
              <li>
                <a href="#">{t('footer.services.5')}</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="">{t('footer.portfolio.header')}</h4>
            <ul>
              <li>
                <a href="">{t('footer.portfolio.1')}</a>
              </li>
              <li>
                <a href="">{t('footer.portfolio.2')}</a>
              </li>
              <li>
                <a href="">{t('footer.portfolio.3')}</a>
              </li>
              <li>
                <a href="">{t('footer.portfolio.4')}</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-5"/>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
        <p>
          {t('footer.copyright')}
        </p>
        <div className="flex mb-5 lg:mb-0">
            <div className="rounded-[50%] bg-[#DDE6FF] p-1 w-[40px] h-[40px]">
                <img src={instagram} alt="instagram"/>
            </div>
            <div className="rounded-[50%] bg-[#DDE6FF] p-2 w-[40px] h-[40px] mx-5">
                <img src={twitter} alt="twitter"/>
            </div>
            <div className="rounded-[50%] bg-[#DDE6FF] p-2 w-[40px] h-[40px]">
                <img src={youtube} alt="youtube"/>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
