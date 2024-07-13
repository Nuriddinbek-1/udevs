import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useTranslation } from "react-i18next";

function NavPortfolio() {

  const { t } = useTranslation()

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="#"
          className="flex items-center">
          <span className="w-[30px] h-[30px] rounded-[50%] bg-custom-green inline-block justify-around flex items-center mr-1">D</span>
          Developer
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="#"
          className="flex items-center">
          <span className="w-[30px] h-[30px] rounded-[50%] bg-custom-green inline-block justify-around flex items-center mr-1">S</span>
          Sms.uz
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="#"
          className="flex items-center">
          <span className="w-[30px] h-[30px] rounded-[50%] bg-custom-green inline-block justify-around flex items-center mr-1">G</span>
          Goodzone
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="#" 
          className="flex items-center">
          <span className="w-[30px] h-[30px] rounded-[50%] bg-custom-green inline-block justify-around flex items-center mr-1">I</span>
          Iman
        </a>
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
          {`${t('navbar.li6.0')}`}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}

export default NavPortfolio;
