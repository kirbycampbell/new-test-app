import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  //Using an arrow constructor instead of the above ^^^
  handleIncrement = () => {
    console.log("Increment clicked", this);
  };

  render() {
    let classes = this.getBadgeClasses();
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  //control + shift + r will auto refactor code. This is the output of that below
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
