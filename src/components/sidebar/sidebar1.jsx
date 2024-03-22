import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DashboardOutlined,
  BulbOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  LaptopOutlined,
  SendOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonIcon from "@mui/icons-material/Person";
import Logo from "../../assets/Logo/Logo";
import { Layout, Menu, Button, theme, Flex } from "antd";
import { Router, useNavigate } from "react-router-dom";
import "../../App.css";
import PageContent from "../Pages/PageContent";

const { Header, Sider, Content } = Layout;

const Sidenav = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Logo />
        <Menu
          theme="dark"
          mode="inline"
          onClick={(item) => {
            navigate(item.key);
          }}
          items={[
            {
              key: "/dashboard",
              icon: <DashboardOutlined />,
              label: "Dashboard",
            },
            {
              key: "/campaigns",
              icon: <BulbOutlined />,
              label: "Campaigns",
            },
            {
              key: "/groups",
              icon: <UsergroupAddOutlined />,
              label: "User & Group",
            },
            {
              key: "/templates",
              icon: <MailOutlined />,
              label: "Email Templates",
            },
            {
              key: "/landing-pages",
              icon: <LaptopOutlined />,
              label: "Landing Pages",
            },
            {
              key: "/sending-profiles",
              icon: <SendOutlined />,
              label: "Sending Profiles",
            },
            {
              key: "/users",
              icon: <SettingOutlined />,
              label: "User Management",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            height: "9vh",
            margin: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              borderRadius: "50%",
            }}
          />

          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              icon={<PersonIcon />}
              style={{
                fontSize: "16px",
                width: 70,
                height: 40,
                left: "3px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Button>

            <Button
              icon={<LogoutOutlinedIcon />}
              style={{
                fontSize: "16px",
                width: 70,
                height: 40,
                marginRight: "20px",
                backgroundColor: "rgb(0,22,40)",
                color: "#FFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Button>
          </div>
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            borderRadius: borderRadiusLG,
            height: "91vh",
          }}
        >
          <PageContent />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Sidenav;
