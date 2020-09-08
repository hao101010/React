import React from 'react'
import { connect } from 'react-redux'

// 无状态组件
const TodoList = (props) => {
    let { inputValue, changeInput, btnClick, list, delItem } = props
    return (
        <div>
            <div>
                <input value={inputValue} onChange={changeInput} />
                <button onClick={btnClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index} onClick={() => delItem(index)}>{item}</li>
                    })
                }
            </ul>
        </div>
    );
}

// class TodoList extends Component {
//     // constructor(props) {
//     //     super(props)
//     // }
//     render() {
//         let { inputValue, changeInput, btnClick, list } = this.props
//         return (
//             <div>
//                 <div>
//                     <input value={inputValue} onChange={changeInput} />
//                     <button onClick={btnClick}>提交</button>
//                 </div>
//                 <ul>
//                     {
//                         list.map((item, index) => {
//                             return <li key={index} onClick={this.props.delItem(index)}>{item}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         );
//     }

// }

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        changeInput(e) {
            let input = e.target.value
            let action = {
                type: 'changeinput',
                value: input
            }
            dispatch(action)
        },
        btnClick() {
            let action = {
                type: 'btnclick'
            }
            dispatch(action)
        },
        delItem(index) {
            let action = {
                type: 'deleteitem',
                value: index
            }
            dispatch(action)
        }
    }
}

// 在这里传递两个参数，分别是stateToProps和dispatchToProps
export default connect(stateToProps, dispatchToProps)(TodoList);