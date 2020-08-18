import React, { Component } from 'react'
import propTypes from 'prop-types'
class Xiaojia extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    return (
      <li onClick={this.handleClick}>{this.props.content}</li>
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }
  handleClick() {
    this.props.deleteList(this.props.index)
  }
}
Xiaojia.propTypes = {
  content: propTypes.string,
  deleteList: propTypes.func
}
export default Xiaojia;