import { useState } from "react";
import { Layout, Menu } from "antd";
const { Header } = Layout;

const Navbar = () => {
  return (
    <>
      <Layout className="layout-wrapper">
        <Header>
          <div className="logo">Github Search</div>
          <Menu theme="dark" mode="horizontal"></Menu>
        </Header>
      </Layout>
    </>
  );
};

export default Navbar;
