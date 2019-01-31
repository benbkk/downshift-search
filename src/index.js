import React from "react";
import { render } from "react-dom";
import App from './App'



class Index extends React.Component {
  state = { error: null };

  handleStateChange = changes => {
    if (changes.hasOwnProperty("inputValue")) {
      this.validateInput(changes.inputValue);
    }
  };

  validateInput(value) {
    this.setState({
      error: value.toLowerCase().includes("e")
        ? null
        : 'You must include the letter "e" in your query'
    });
  }

  render() {
    const { error } = this.state
    return (
      <App
        onStateChange={this.handleStateChange}
        error={error}
        {...this.props}
      />
    );
  }
}
render(<Index />, document.getElementById("root"));
