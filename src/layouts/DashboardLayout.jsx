import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  BulbOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  LaptopOutlined,
  SendOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "@/assets/Logo/Cyberus_hor.png";

const { Header, Sider, Content } = Layout;

export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { pathname } = useLocation();

  return (
    <Layout className="main-layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="nav-logo">
          <img src={Logo} alt="logo" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[pathname]}
          items={[
            {
              key: "/dashboard",
              icon: <DashboardOutlined />,
              label: <NavLink to="/dashboard">Dashboard</NavLink>,
            },
            {
              key: "/campaigns",
              icon: <BulbOutlined />,
              label: <NavLink to="/campaigns">Campaigns</NavLink>,
            },
            {
              key: "/user-and-group",
              icon: <UsergroupAddOutlined />,
              label: <NavLink to="/user-and-group">User & Group</NavLink>,
            },
            {
              key: "/email-templates",
              icon: <MailOutlined />,
              label: <NavLink to="/email-templates">Email Templates</NavLink>,
            },
            {
              key: "/landing-pages",
              icon: <LaptopOutlined />,
              label: <NavLink to="/landing-pages">Landing Pages</NavLink>,
            },
            {
              key: "/sending-profiles",
              icon: <SendOutlined />,
              label: <NavLink to="/sending-profiles">Sending Profiles</NavLink>,
            },
            {
              key: "/user-management",
              icon: <SettingOutlined />,
              label: <NavLink to="/user-management">User Management</NavLink>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
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
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <main>{children}</main>
        </Content>
      </Layout>
    </Layout>
  );
}
