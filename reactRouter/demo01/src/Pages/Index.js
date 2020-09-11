import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { cid: 123, title: 'react学习第一步' },
                { cid: 345, title: 'react学习第二步' },
                { cid: 567, title: 'react学习第三步' }
            ]
        }
        this.props.history.push('/home/')
    }
    render() {
        return (
            <div>
                <h2>首页</h2>
                {
                    this.state.list.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={'/list/' + item.cid}>{item.title}</Link>
                            </li>
                        )
                    })
                }

            </div>
        );
    }
}

export default Index; 