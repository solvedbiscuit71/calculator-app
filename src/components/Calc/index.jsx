import React, { Component } from 'react';
import Button from './Button';
import Header from './Header';

class Calc extends Component {
  constructor(props){
    super(props)
    this.state = {
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

  handleClick = (value) => {
    console.log(value)
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

      <div className="display">399,981</div>
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