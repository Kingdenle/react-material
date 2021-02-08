import React, { Component, useState } from 'react'
import { Tabs, Radio, Menu, Layout } from 'antd';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import AddCount from '../router/addCount';
import ButtonPage from '../router/buttonPage';

const MainMenu = () => {
    const { Header, Footer, Sider, Content } = Layout
    const handleClick = e => {
        console.log('click ', e);
    };

    const arr = [
        {
            path: 'button',
            component: ButtonPage
        }, {
            path: 'list',
            component: AddCount
        }, {
            path: 'layout',
            component: ButtonPage
        }, {
            path: 'menu',
            component: ButtonPage
        }, {
            path: 'tab',
            component: ButtonPage
        }, {
            path: 'table',
            component: ButtonPage
        }, {
            path: 'select',
            component: ButtonPage
        }, {
            path: 'input',
            component: ButtonPage
        }, {
            path: 'card',
            component: ButtonPage
        }
    ];

    return (
        <Layout>
            <Sider>
                <Menu
                    onClick={handleClick}
                    mode="inline"
                >
                    {
                        arr.map((item, index) => {
                            return (
                                <Menu.Item key={index}>
                                    <NavLink exact to={item.path}></NavLink>
                                    {item.path}
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
            </Sider>
            <Layout>
                <Header>Header</Header>
                <Content>
                    <Switch>
                        {
                            arr.map((item, index) => {
                                console.log(item);
                                return (
                                    <Route key={index} path={item.path} component={item.component}></Route>
                                )
                            })
                        }
                    </Switch>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    )
}

export default MainMenu;
// export default class SlidingTabsDemo extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             mode: 'left',
//         };
//     }

//     render() {
//         const { mode } = this.state;
//         return (
//             <div>
//                 <Tabs defaultActiveKey="1" tabPosition={mode}>
//                     {[...Array.from({ length: 30 }, (v, i) => i)].map(i => (
//                         <TabPane tab={`Tab-${i}`} key={i} disabled={i === 28}>
//                             Content of tab {i}
//                         </TabPane>
//                     ))}
//                 </Tabs>
//             </div>
//         );
//     }
// }

// const AddCount = () => {
//     const [count, setCount] = useState(0)
//     const addcount = () => {
//         let newCount = count
//         setCount(newCount += 1)
//     }
//     return (
//         <div>
//             <p>{count}</p>
//             <button onClick={addcount}>count++</button>
//         </div>
//     )
// }
// export default AddCount