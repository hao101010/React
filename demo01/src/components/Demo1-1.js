import React, { Component, Fragment } from 'react'
import Xiaojia from './ul-component'
import axios from 'axios'

class demo1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['1', '2']
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          <input
            ref={input => this.input = input}
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)} />
          <button onClick={this.addList.bind(this)}>增加</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <Xiaojia key={index} content={item} index={index}
                  deleteList={this.deleteList.bind(this)} />
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
  componentDidMount() {
    axios.post('contractApprove/findPage',
      { "sponsor": "wangwanpeng", "projectName": "", "projectType": "", "contractCode": "", "page": 1, "row": 16 }
    )
      .then(res => {
        console.log('sess', res)
      })
      .catch(err => {
        console.log(err, '访问失败')
      })
  }
  inputChange() {
    // console.log(e.target.value)
    this.setState({
      inputValue: this.input.value
    })
  }
  addList() {
    this.setState(
      {
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
      }
    )
  }
  deleteList(index) {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}
export default demo1