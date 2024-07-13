import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import team_right_screen_img from "./images/right_screen_img.svg";
import NumberCounter from 'number-counter';

// aos library
import Aos from "aos";
import "aos/dist/aos.css";

function Team() {

  const { t } = useTranslation();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="mt-10 bg-custom-green pb-10" id="team">
      <div className="container">
        <h1 className="title" data-aos="fade-up">{t('team.header')}</h1>
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="font-semibold pr-20 lg:order-first">
            <p className="subtitle" data-aos="fade-up" data-aos-delay="300">
              {t('team.info')}
            </p>
            <p className="text-7xl lg:text-9xl text-custom-blue font-semibold my-5">
              <NumberCounter start={70} end={100} delay={2} className="increment" postFix="+"/>
            </p>
            <p className="text-3xl text-gray-700" data-aos="fade-up" data-aos-delay="900">{t('team.counter_text')}</p>
          </div>
          <div className="order-first">
            <img src={team_right_screen_img} alt="udevs main image" className="mx-auto"  data-aos="zoom-in-up"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
