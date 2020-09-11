import React, { Component } from 'react';

class List extends Component {
    state = {}
    render() {
        return (<h2>列表页 --- {this.state.id}</h2>);
    }
    componentDidMount() {
        console.log(this.props)
        let id = this.props.match.params.id
        this.setState({ id })
    }
}

export default List;