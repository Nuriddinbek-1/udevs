import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// images
import Mobile_right_screen_img from "./images/right_screen_img.png";
import Mobile_right_screen_img_bg from "./images/right_screen_img_bg.png";

// all logos
import iphone_logo from "./images/iphone.svg";
import android_logo from "./images/android.svg";
import crossplatform_logo from "./images/crossplatform.svg";
import swift_logo from "./images/swift.svg";
import kotlin_logo from "./images/kotlin.svg";
import flutter_logo from "./images/flutter.svg";

// aos library
import Aos from "aos";
import "aos/dist/aos.css";

function MobileApp() {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="mt-10" id="mobileapp">
      <div className="container">
        <h1 className="title">{t("mobile_app.header")}</h1>
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="font-semibold lg:pr-20 lg:order-first">
            <p className="subtitle">{t("mobile_app.info")}</p>
            <div
              className="grid grid-cols-3 gap-3 my-10 text-xl"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom">
              <div className="p-3 bg-custom-green rounded-custom-r h-[120px]">
                <img src={iphone_logo} alt="iphone" />
                <p className="text-sm">IOS</p>
              </div>
              <div className="p-3 bg-custom-green rounded-custom-r h-[120px]">
                <img src={android_logo} alt="android" />
                <p className="text-sm">Android</p>
              </div>
              <div className="p-3 bg-custom-green rounded-custom-r h-[120px]">
                <img src={crossplatform_logo} alt="crossplatform" />
                <p className="text-sm">Crossplatform</p>
              </div>
            </div>

            <p className="text-3xl text-gray-700">
              {t("mobile_app.technologies")}
            </p>
            <div
              className="flex flex-wrap text-center my-5 text-xl"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom">
              <div className="mr-10">
                <img src={swift_logo} alt="swift" />
                <p>Swift</p>
              </div>
              <div className="mr-10">
                <img src={kotlin_logo} alt="kotlin" />
                <p>Kotlin</p>
              </div>
              <div className="mr-10">
                <img src={flutter_logo} alt="flutter" />
                <p>Flutter</p>
              </div>
            </div>
          </div>
          <div
            className="rounded-[25px] overflow:hidden order-first"
            style={{
              backgroundImage: `url(${Mobile_right_screen_img_bg})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}>
            <img
              src={Mobile_right_screen_img}
              alt="mobile main image"
              width={"100%"} 
              data-aos="zoom-in-up"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileApp;
