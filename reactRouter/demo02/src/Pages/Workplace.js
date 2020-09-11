import React from 'react'
import { Route, Link } from 'react-router-dom'
import Money from './workplace/Money'
import Getup from './workplace/Getup'

function Video() {
    return (
        <div>
            <div>
                <ul className="topBar">
                    <li><Link to='/workplace/getup'>早起攻略</Link></li>
                    <li><Link to='/workplace/money'>加薪秘籍</Link></li>
                </ul>
            </div>
            <div>
                <div><h3>职场软技能</h3></div>
                <Route path="/workplace/getup/" component={Getup}></Route>
                <Route path="/workplace/money/" component={Money}></Route>
            </div>
        </div>
    )
}

export default Video