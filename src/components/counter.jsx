import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrement = haha => {
    this.setState({ count: this.state.count + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>ZERO TAGS</p>;
    return (
      <ul>
        <li>
          {this.state.tags.map(x => (
            <li key={x}>{x}</li>
          ))}
        </li>
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={haha => this.handleIncrement(haha)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 3 && <p>THERE ARE 3 TAGS</p>}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    const x = "Zero";
    return count === 0 ? x : count;
  }
}

export default Counter;
