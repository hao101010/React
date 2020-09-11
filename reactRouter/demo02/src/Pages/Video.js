import React from 'react'
import { Route, Link } from 'react-router-dom'
import ReactPage from './video/ReactPage'
import Flutter from './video/Flutter'
import Vue from './video/Vue'

function Video() {
    return (
        <div>
            <div>
                <ul className="topBar">
                    <li><Link to='/video/reactpage'>React教程</Link></li>
                    <li><Link to='/video/vue'>Vue教程</Link></li>
                    <li><Link to='/video/flutter'>Flutter教程</Link></li>
                </ul>
            </div>
            <div>
                <div><h3>视频教程</h3></div>
                <Route path="/video/reactpage/" component={ReactPage}></Route>
                <Route path="/video/vue/" component={Vue}></Route>
                <Route path="/video/flutter/" component={Flutter}></Route>
            </div>
        </div>
    )
}

export default Video