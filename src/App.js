import React from 'react'
import { css } from "@emotion/core";
import Search from './Search'

import starWarsNames from "starwars-names";

const items = starWarsNames.all.map(s => ({ name: s, id: s.toLowerCase() }));

const App = ({error, onStateChange, ...props}) => (
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
      onStateChange={onStateChange}
      itemToString={i => (i ? i.name : "")}
      className={css({ width: 250, margin: "auto" })}
      {...props}
    />
  </div>
)

export default App
