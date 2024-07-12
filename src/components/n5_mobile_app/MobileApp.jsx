import { useTranslation } from "react-i18next";
import Mobile_right_screen_img from "./images/right_screen_img.png";
import Mobile_right_screen_img_bg from "./images/right_screen_img_bg.png";

// all logos
import iphone_logo from './images/iphone.svg'
import android_logo from './images/android.svg'
import crossplatform_logo from './images/crossplatform.svg'
import swift_logo from './images/swift.svg'
import kotlin_logo from './images/kotlin.svg'
import flutter_logo from './images/flutter.svg'

function MobileApp() {
  const { t } = useTranslation();

  return (
    <div className="mt-10" id="mobileapp">
      <div className="container">
        <h1 className="title">Development of mobile application</h1>
        <div className="grid grid-cols-2 gap-20">
          <div className="font-semibold pr-20">
            <p className="subtitle">
              {t("main_page.subtitle")}
              For each project, we form a team that includes a project manager,
              business analyst, UI / UX designer, DevOps, QA engineer, backend
              and front-end developers.
            </p>
            <div className="grid grid-cols-3 gap-3 my-10 text-xl">
              <div className="p-3 bg-custom-green rounded-custom-r h-[120px]">
                <img src={iphone_logo} alt="iphone" />
                <p>IOS</p>
              </div>
              <div className="p-3 bg-custom-green rounded-custom-r h-[120px]">
                <img src={android_logo} alt="android" />
                <p>Android</p>
              </div>
              <div className="p-3 bg-custom-green rounded-custom-r h-[120px]">
                <img src={crossplatform_logo} alt="crossplatform" />
                <p>Crossplatform</p>
              </div>
            </div>

            <p className="text-3xl text-gray-700">Technologies</p>
            <div className="flex flex-wrap text-center my-5 text-xl">
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
            className="rounded-[25px] overflow:hidden"
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
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileApp;
