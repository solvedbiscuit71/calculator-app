import React, { Component } from 'react';
import Button from './Button';
import Header from './Header';

class Calc extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentValue: "",
      previousValue: 0,
      currentOperation: "",

      currentThemeNo: 1,
      themes: {}
    }
  }

  updateTheme = (newThemeNo) => {
    const newThemeColors = this.state.themes[newThemeNo]
    for(const [key,value] of Object.entries(newThemeColors)){
      document.documentElement.style.setProperty(key,value);
    }
  }

  addToCurrentValue = (value) => {
    if (value === ".") {
      this.setState({
        currentValue: this.state.currentValue !== "" ? this.state.currentValue + value : "0."
      })
      return
    }
    this.setState({
      currentValue: this.state.currentValue !== "" ? this.state.currentValue + value : value.toString()
    })
  }

  handleOperator = (value) => {
    if (value !== "=") {
      this.setState({
        previousValue: this.state.currentValue !== "" ? +this.state.currentValue : 0,
        currentOperation: value,
        currentValue: ""
      })
    }else {
      let result;
      switch(this.state.currentOperation) {
        case "+":
          result = this.state.previousValue + (this.state.currentValue !== "" ? +this.state.currentValue : 0);
          break
        case "-":
          result = this.state.previousValue - (this.state.currentValue !== "" ? +this.state.currentValue : 0);
          break
        case "x":
          result = this.state.previousValue * (this.state.currentValue !== "" ? +this.state.currentValue : 0);
          break
        case "/":
          result = this.state.previousValue / (this.state.currentValue !== "" ? +this.state.currentValue : 0);
          break
        default:
          result = this.state.currentValue
      }
      this.setState({
        previousValue: 0,
        currentOperation: "",
        currentValue: result.toString()
      })
    }
  }

  handleClick = (value) => {
    if (typeof value === "number" || value === ".") {
      this.addToCurrentValue(value)
    }
    else if (value === "DEL") {
      this.setState({
        currentValue: ""
      })
    }
    else if (value === "RESET") {
      this.setState({
        currentValue: "",
        previousValue: 0,
        currentOperation: ""
      })
    }else {
      this.handleOperator(value)
    }
  }
  
  handleToggle = () => {
    const newTheme = this.state.currentThemeNo + 1 < 4 ? this.state.currentThemeNo + 1 : 1;
    this.updateTheme(newTheme)

    this.setState({
      currentThemeNo: newTheme
    })
  }

  componentDidMount() {
    fetch("theme.json")
      .then(data => data.json())
      .then(data => {
        this.setState({
          themes: data
        })
        this.updateTheme(this.state.currentThemeNo);
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() { 
    return (
    <div className="calc">
      <Header currentThemeNo={this.state.currentThemeNo} onClick={this.handleToggle} />

      <div className="display">
        {this.state.currentValue !== "" ? this.state.currentValue : "0"}
      </div>
      <div className="btn-grid">
        <Button value={7} className="btn btn--primary" onClick={this.handleClick} />
        <Button value={8} className="btn btn--primary" onClick={this.handleClick} />
        <Button value={9} className="btn btn--primary" onClick={this.handleClick} />
        <Button value="DEL" className="btn btn--secondary" onClick={this.handleClick} />

        <Button value={4} className="btn btn--primary" onClick={this.handleClick} />
        <Button value={5} className="btn btn--primary" onClick={this.handleClick} />
        <Button value={6} className="btn btn--primary" onClick={this.handleClick} />
        <Button value="+" className="btn btn--primary" onClick={this.handleClick} />

        <Button value={1} className="btn btn--primary" onClick={this.handleClick} />
        <Button value={2} className="btn btn--primary" onClick={this.handleClick} />
        <Button value={3} className="btn btn--primary" onClick={this.handleClick} />
        <Button value="-" className="btn btn--primary" onClick={this.handleClick} />

        <Button value="." className="btn btn--primary" onClick={this.handleClick} />
        <Button value={0} className="btn btn--primary" onClick={this.handleClick} />
        <Button value="/" className="btn btn--primary" onClick={this.handleClick} />
        <Button value="x" className="btn btn--primary" onClick={this.handleClick} />

        <Button value="RESET" className="btn btn--secondary col-span-2" onClick={this.handleClick} />
        <Button value="=" className="btn btn--warning col-span-2" onClick={this.handleClick} />
      </div>
    </div>
    );
  }
}
 
export default Calc;