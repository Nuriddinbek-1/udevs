import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useTranslation } from "react-i18next";

import en from "../../../assets/en.svg"
import ru from "../../../assets/ru.svg"

function NavLanguages() {

  const { t, i18n } = useTranslation()

  const changeLang = (e) => {
    const selectedLang = e
    i18n.changeLanguage(selectedLang)
  }

  const items = [
    {
      key: "1",
      label: (
        <span 
          className="flex"
          onClick={() => changeLang('en')}
          >
          <img src={en} alt="english sign" width={20} className="mr-1"/>
          English
        </span>
      ),
    },
    {
      key: "2",
      label: (
        <span 
          className="flex"
          onClick={() => changeLang('ru')}
          >
          <img src={ru} alt="russian sign" width={20} className="mr-1"/>
          Русский
        </span>
      ),
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
      }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {t('navbar.li7')}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}

export default NavLanguages;
