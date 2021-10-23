import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { MessageOutlined, ShareAltOutlined, DatabaseOutlined, CoffeeOutlined } from '@ant-design/icons';


import './HomePage.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class HomePage extends Component {
    state = {
        collapsed: false,
      };
    
      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
    
      render() {
        const { collapsed } = this.state;
        return (
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <SubMenu key="sub2" icon={<MessageOutlined />} title="Channels">
                  <Menu.Item icon={<DatabaseOutlined />} key="6">Programming</Menu.Item>
                  <Menu.Item icon={<CoffeeOutlined />} key="8">Friends</Menu.Item>
                </SubMenu>
                <Menu.Item key="9" icon={<ShareAltOutlined />}>
                  Share
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }} />
              <Content style={{ margin: '0 16px' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360, marginTop: 16, textAlign: 'center' }}>
                  <h2>Start Messaging</h2>
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </Layout>
        );
      }
}
