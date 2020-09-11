import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import List from './Pages/List'
import Index from './Pages/Index'
import Home from './Pages/Home'


function AppRouter() {
    let RouterList = [
        { path: '/', title: '首页', exact: true, component: Index },
        { path: '/list', title: '列表页', exact: false, component: List },
    ]
    return (
        <div>
            <Router>
                <ul>
                    {/* {
                        RouterList.map((item, index) => {
                            return (<li key={index}><Link to={item.path}>{item.title}</Link></li>)
                        })
                    } */}
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/list/123'>列表页</Link></li>
                </ul>
                {/* {
                    RouterList.map((item, index) => {
                        return (
                            <Route key={index} path={item.path} exact={item.exact} component={item.component}></Route>
                        )
                    })
                } */}
                <Route path='/' exact component={Index}></Route>
                <Route path='/list/:id' component={List}></Route>
                <Route path='/home/' component={Home}></Route>
            </Router>

        </div>
    )
}

export default AppRouter