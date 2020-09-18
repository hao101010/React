import React, { Component } from 'react';
import TemperatureInput from './temperatureInput'

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: ''
        }
        this.toCelsius = this.toCelsius.bind(this)
        this.toFahrenheit = this.toFahrenheit.bind(this)
        this.tryConvert = this.tryConvert.bind(this)
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    }
    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9
    }

    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32
    }
    tryConvert(temperature) {
        const input = parseFloat(temperature)
        if (Number.isNaN(input)) {
            return ''
        }
        let output = 0
        if (this.state.scale === 'f') {
            output = this.toCelsius(input)
        } else {
            output = this.toFahrenheit(input)
        }
        const rounded = Math.round(output * 1000) / 1000
        return rounded.toString()
    }
    handleCelsiusChange(temperature) {
        this.setState({ scale: 'c', temperature })
    }

    handleFahrenheitChange(temperature) {
        this.setState({ scale: 'f', temperature })
    }

    render() {
        const scale = this.state.scale
        const temperature = this.state.temperature
        const celsius = scale === 'f' ? this.tryConvert(temperature) : temperature
        console.log(celsius, 123)
        const fahrenheit = scale === 'c' ? this.tryConvert(temperature) : temperature
        console.log(fahrenheit, 243)

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
            </div>
        )
    }
}

export default Calculator