import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.svg";
import right_screen_img from "./images/right_screen_img.svg";

function MainPage() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="container flex mt-10">

        {/* left side of screen */}
        <div className="basis-1/2 font-semibold">
          <img src={logo} alt="udevs-logo" />
          <h1 className="my-5 text-5xl text-custom-grey">
            {t("main_page.title")}
          </h1>
          <p className="text-5xl text-custom-blue">{t("main_page.subtitle")}</p>
          <button className="bg-custom-blue rounded-custom-r text-white px-20 py-3 mt-20">
            {t("main_page.button")}
          </button>
        </div>

        {/* right side of screen */}
        <div className="basis-1/2">
          <img src={right_screen_img} alt="udevs main image" />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
