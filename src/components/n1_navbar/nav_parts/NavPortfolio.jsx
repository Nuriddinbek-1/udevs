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
          href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      ),
    },
    {
      key: "4",
      danger: true,
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com">
          3rd menu item
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
