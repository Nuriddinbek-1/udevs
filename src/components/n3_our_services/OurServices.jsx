import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

// icons
import team_icon from './images/team.svg'
import mobile_icon from './images/mobile.svg'
import erp_icon from './images/erp.svg'
import design_icon from './images/design.svg'
import settings_icon from './images/settings.svg'
import computer_icon from './images/computer.svg'

// style
import servicesStyle from './OurServices.module.css'

// aos library
import Aos from "aos";
import "aos/dist/aos.css";

function OurServices() {

  const { t } = useTranslation()

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="mt-40" id="ourservices">
      <div className="container">

        {/* title */}
        <h1 className="title" data-aos="fade-up">{t('services.header')}</h1>

        <div className={`${servicesStyle.big_box} grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-10 lg:gap-y-7`} data-aos="fade-up" data-aos-delay="300">
          <div className="p-3 lg:p-10 bg-custom-green rounded-custom-r h-[150px] lg:h-[200px]">
            <img src={team_icon} alt="team icon" />
            <p>{t('services.box1')}</p>
          </div>
          <div className="p-3 lg:p-10 bg-custom-green rounded-custom-r h-[150px] lg:h-[200px]">
            <img src={mobile_icon} alt="mobile icon" />
            <p>{t('services.box2')}</p>
          </div>
          <div className="p-3 lg:p-10 bg-custom-green rounded-custom-r h-[150px] lg:h-[200px]">
            <img src={erp_icon} alt="erp icon" />
            <p>{t('services.box3')}</p>
          </div>
          <div className="p-3 lg:p-10 bg-custom-green rounded-custom-r h-[150px] lg:h-[200px]">
            <img src={design_icon} alt="design icon" />
            <p>{t('services.box4')}</p>
          </div>
          <div className="p-3 lg:p-10 bg-custom-green rounded-custom-r h-[150px] lg:h-[200px]">
            <img src={settings_icon} alt="settings icon" />
            <p>{t('services.box5')}</p>
          </div>
          <div className="p-3 lg:p-10 bg-custom-green rounded-custom-r h-[150px] lg:h-[200px]">
            <img src={computer_icon} alt="computer icon" />
            <p>{t('services.box6')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
