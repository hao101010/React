import React, { Component } from 'react';
const scaleNames = {
    c: '摄氏温度',
    f: '华氏温度'
}

class TemperatureInput extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {
        // console.log(this.state.input)
        this.props.onTemperatureChange(this.input.value)
    }

    render() {
        const temperature = this.props.temperature
        const scale = this.props.scale
        return (
            <div>
                <span>请输入温度度数（{scaleNames[scale]}）：</span>
                <input
                    ref={input => this.input = input}
                    value={temperature}
                    onChange={this.handleChange} />
            </div>

        )
    }
}

export default TemperatureInput