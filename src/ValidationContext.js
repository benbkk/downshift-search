import React, { Component, createContext } from "react";

const Validation = createContext()
export class ValidationProvider extends Component {
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
      <Validation.Provider
        value={({
          onStateChange: this.handleStateChange,
          error
        })}
      >
        {this.props.children}
      </Validation.Provider>
    );
  }
}

export const ValidationConsumer = Validation.Consumer
