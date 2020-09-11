import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './Pages/Index'
import Video from './Pages/Video'
import Workplace from './Pages/Workplace'


function AppRouter() {
    let routerList = [
        { path: '/', title: '博客首页', exact: true, component: Index },
        { path: '/video', title: '视频教程', exact: false, component: Video },
        { path: '/workplace', title: '职场技能', exact: false, component: Workplace },
    ]
    return (
        <Router>
            <div className="bodyContent">
                <div className="LeftBar">
                    <h3>一级导航</h3>
                    <ul>
                        {
                            routerList.map((item, index) => {
                                return (
                                    <li key={index}><Link to={item.path}>{item.title}</Link></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="rightContent">
                    {
                        routerList.map((item, index) => {
                            return (
                                <Route key={index} path={item.path} exact={item.exact} component={item.component}></Route>
                            )
                        })
                    }
                </div>
            </div>
        </Router>
    )
}

export default AppRouter;