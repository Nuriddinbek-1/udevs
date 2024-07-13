import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.svg";
import right_screen_img from "./images/right_screen_img.svg";

// auto-typed animation
import { TypeAnimation } from "react-type-animation";

function MainPage() {

  const { t } = useTranslation();

  return (
    <div>
      <div className="container flex flex-col lg:flex-row mt-10">

        {/* left side of screen */}
        <div className="lg:basis-1/2 font-semibold text-center lg:text-left">
          <div data-aos="fade-up" data-aos-duration="500">
            <img src={logo} alt="udevs-logo" className="mx-auto lg:mx-0 w-[100px] lg:w-auto"/>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <h1 className="my-5 text-3xl lg:text-5xl text-custom-grey">
              {t("main_page.header")}
            </h1>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
            <TypeAnimation
              className="text-3xl lg:text-5xl text-custom-blue"
              sequence={[
                // Same substring at the start will only be typed out once, initially
                `${t('main_page.typed_animation1')}`,
                1000,
                `${t('main_page.typed_animation2')}`,
                1000,
                `${t('main_page.typed_animation3')}`,
                1000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" className="hidden lg:block">
            <button className="bg-custom-blue rounded-custom-r text-white px-20 py-3 mt-20">
              {t("main_page.button")}
            </button>
          </div>
        </div>

        {/* right side of screen */}
        <div className="lg:basis-1/2 mt-10 lg:mt-0">
          <img src={right_screen_img} alt="udevs main image" className="mx-auto"/>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
