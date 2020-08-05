import React,{Component,Fragment} from 'react'

class demo1 extends Component{
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: [1,2]
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/> 
          <button onClick={this.addList.bind(this)}>增加</button>
        </div>
        <ul>
          {
            this.state.list.map((item,index) => {
              return (
                <li key={index} onClick={this.deleteList.bind(this,index)}>
                  {item}
                </li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
  inputChange(e) {
    // console.log(e.target.value)
    this.setState({
      inputValue: e.target.value
    })
  }
  addList(){
    this.setState(
      {
        list: [...this.state.list,this.state.inputValue],
        inputValue: ''
      }
    )
  }
  deleteList(index){
    let list = this.state.list
    list.splice(index,1)
    this.setState({
      list
    })
  }
}
export default demo1