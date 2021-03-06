import React from "react";
import lazy from '../../../config/lazy'
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";
// import api from '../../config/http';
// import { DatePicker } from 'antd-mobile';
import "./homepage.css";
import { TabBar } from 'antd-mobile';

const Home = lazy(() => import('../home/home'))
// const Detail = lazy(() => import('../detail/detail'))
const Circle = lazy(() => import('../circle/circle'))
const Mine = lazy(() => import('../mine/mine'))
const Quest = lazy(() => import('../quest/quest'))
const Search = lazy(() => import('../../../component/common/search/search'))
const Message = lazy(() => import('../../../component/common/message/message'))



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'home',
          hidden: false,
          fullScreen: false,
          scrollHeight: 'calc(100vh - 44px)'
        };
    }
    
    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
            <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
                <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
                    onClick={(e) => {
                    e.preventDefault();
                    this.setState({
                        hidden: !this.state.hidden,
                    });
                    }}
                >
                    Click to show/hide tab-bar
                </a>
                <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
                    onClick={(e) => {
                    e.preventDefault();
                    this.setState({
                        fullScreen: !this.state.fullScreen,
                    });
                    }}
                >
                    Click to switch fullscreen
                </a>
            </div>
        );
    }

  componentDidMount() {
    // this.props.history.push("/detail/1");
  }
  componentWillReceiveProps(prevProps, prevState) {

  }

  render() {
    let SearchDom = ''
    let scrollHeight = this.state.scrollHeight
    let CanMessage = ''
    if(this.state.selectedTab !== 'mine') {
      SearchDom = (
        <Search history={this.props.history}/>
      )
      scrollHeight = 'calc(100vh - 44px)'
    }else {
      scrollHeight = 'calc(100vh)'
    }

    if(this.state.selectedTab === 'home' || this.state.selectedTab === 'answer') {
      // Message
      CanMessage = (
        <Message history={this.props.history}/>
      )
    }
    return (
        <div>
          {SearchDom}
          <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: scrollHeight }}>
            
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              hidden={this.state.hidden}
            >
              <TabBar.Item
                title="首页"
                key="home"
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                />
                }
                selected={this.state.selectedTab === 'home'}
                // badge={1}
                onPress={() => {
                  this.setState({
                    selectedTab: 'home',
                  });
                }}
                data-seed="logId"
              >
                <Home history={this.props.history}/>
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                title="圈子"
                key="circle"
                // badge={'new'}
                selected={this.state.selectedTab === 'circle'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'circle',
                  });
                }}
                data-seed="logId1"
              >
                <Circle history={this.props.history}/>
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                title="问问"
                key="answer"
                // dot
                selected={this.state.selectedTab === 'answer'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'answer',
                  });
                }}
              >
                <Quest history={this.props.history}/>
              </TabBar.Item>
              <TabBar.Item
                icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                title="我的"
                key="mine"
                selected={this.state.selectedTab === 'mine'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'mine',
                  });
                }}
              >
                <Mine history={this.props.history}/>
              </TabBar.Item>
            </TabBar>
          </div>

          {CanMessage}
    
        </div>
    );
  }
}

export default withRouter(App);
