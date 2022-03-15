import React, { Component } from 'react';
import Button from './Button';
import Header from './Header';

class Calc extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentThemeNo: 1
    }
  }

  handleClick = (value) => {
    console.log(value)
  }

  render() { 
    return (
    <>
      <Header currentThemeNo={this.state.currentThemeNo} />

      <div className="display"></div>
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

        <Button value="RESET" className="btn btn--secondary row-span-2" onClick={this.handleClick} />
        <Button value="=" className="btn btn--warning row-span-2" onClick={this.handleClick} />
      </div>
    </>
    );
  }
}
 
export default Calc;