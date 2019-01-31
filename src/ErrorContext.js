import React, { Component } from "react";
import { render } from "react-dom";
import { css } from "@emotion/core";

import matchSorter from "match-sorter";
import starWarsNames from "starwars-names";

import Search from "./Search";

const items = starWarsNames.all.map(s => ({ name: s, id: s.toLowerCase() }));

class App extends React.Component {
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
    const { error } = this.state;
    return (
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center"
        }}
      >
        <h2>basic example with error support</h2>
        <Search
          items={items}
          onChange={() => {}}
          error={error}
          onStateChange={this.handleStateChange}
          itemToString={i => (i ? i.name : "")}
          className={css({ width: 250, margin: "auto" })}
        />
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
