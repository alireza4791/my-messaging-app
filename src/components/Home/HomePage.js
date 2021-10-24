import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { MessageOutlined, ShareAltOutlined, DatabaseOutlined, CoffeeOutlined } from '@ant-design/icons';

import './HomePage.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class HomePage extends Component {

    state = {
        collapsed: false,
        value: '',
        messages: ['hey there', 'random text', 'hello world']
      };


      onChangeValue = event => {
        this.setState({ value: event.target.value });
      };


      onRemoveItem = i => {
        this.setState(state => {
          const messages = state.messages.filter((item, j) => i !== j);
     
          return {
            messages,
          };
        });
      };


      
      onAddItem = () => {
        // not allowed AND not working
        this.setState(state => {
          const messages = state.messages.concat(state.value);
     
          return {
            messages,
            value: '',
          };
        });
      };

      renderMessages = () => {
        return this.state.messages.map((message, index) => {
          return (
            <div class="ui cards">
            <div class="card">
              <div class="content">
                {/* <img alt='avatar' class="right floated mini ui image" /> */}
                <div class="header">
                  Alireza Ghasemabady
                </div>
                <div class="meta">
                  Developer
                </div>
                <div class="description">
                  {message}
                </div>
              </div>
              <div class="extra content">
                <div class="ui two buttons">
                  <div class="ui basic green button">Reply</div>
                  <div
                  class="ui basic red button"
                  onClick={() => this.onRemoveItem(index)}>Delete</div>
                </div>
              </div>
            </div>
          </div>
          )
        })
      }

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
              <div 
              className="site-layout-background" 
              style={{ padding: 24, minHeight: 360, marginTop: 16, textAlign: 'center', position: 'relative' }}>
              
              <ul>
              {this.renderMessages()}
              </ul>
              <div>
                  <div 
                  style={{position: 'absolute', bottom: 5, right: 440}} 
                  className="ui segment">
                    <form 
                    onSubmit={this.onsubmit} 
                    className="ui form" id="TextForm">
                    <div 
                    className="field">
                    <input 
                    value={this.state.value}
                    onChange={this.onChangeValue}
                    type="text" />
                    <input 
                    type="submit" 
                    value="Send"
                    onClick={this.onAddItem}
                    disabled={!this.state.value}
                    style={{ marginTop: 8 }} />
                    </div>
                    </form>
                    </div>
                </div>
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </Layout>
        );
      }
}
