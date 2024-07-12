import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useTranslation } from "react-i18next";

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
          onClick={() => changeLang('en')}
          >
          English
        </span>
      ),
    },
    {
      key: "2",
      label: (
        <span
          onClick={() => changeLang('ru')}
          >
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
