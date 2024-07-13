import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useTranslation } from "react-i18next";

// icons
import mobile_icon from '../../n3_our_services/images/mobile.svg'
import erp_icon from '../../n3_our_services/images/erp.svg'
import design_icon from '../../n3_our_services/images/design.svg'
import settings_icon from '../../n3_our_services/images/settings.svg'
import computer_icon from '../../n3_our_services/images/computer.svg'

function NavServices() {

  const { t } = useTranslation()

  const items = [
    {
      key: "1",
      label: (
        <a
          href="#mobileapp"
          className="flex items-center"
          >
          <span className="p-2 w-[40px] h-[40px] rounded-[50%] bg-custom-green inline-block justify-around flex items-center mr-1">
          <img src={mobile_icon} alt="mobile icon" />
          </span>
          <p>{t('services.box2')}</p>
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          href="#"
          className="flex items-center"
          >
          <span className="p-2 w-[40px] h-[40px] rounded-[50%] bg-custom-green inline-block justify-around flex items-center mr-1">
          <img src={erp_icon} alt="erp icon" />
          </span>
          <p>{t('services.box3')}</p>
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          href="#"
          className="flex items-center"
          >
          <span className="p-2 w-[40px] h-[40px] rounded-[50%] bg-custom-green inline-block justify-around flex items-center mr-1">
          <img src={design_icon} alt="design icon" />
          </span>
          <p>{t('services.box4')}</p>
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          href="#"
          className="flex items-center"
          >
          <span className="p-2 w-[40px] h-[40px] rounded-[50%] bg-custom-green inline-block justify-around flex items-center mr-1">
          <img src={settings_icon} alt="settings icon" />
          </span>
          <p>{t('services.box5')}</p>
        </a>
      ),
    },
    {
      key: "5",
      label: (
        <a
          href="#"
          className="flex items-center"
          >
          <span className="p-2 w-[40px] h-[40px] rounded-[50%] bg-custom-green inline-block justify-around flex items-center mr-1">
          <img src={computer_icon} alt="computer icon" />
          </span>
          <p>{t('services.box6')}</p>
        </a>
      ),
    }
  ];

  return (
    <Dropdown
      menu={{
        items,
      }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {t('navbar.li3.0')}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}

export default NavServices;
