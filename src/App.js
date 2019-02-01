import React from 'react'
import { css } from "@emotion/core";
import Search from './Search'
import { ValidationConsumer } from './ValidationContext'

import starWarsNames from "starwars-names";
const items = starWarsNames.all.map(s => ({ name: s, id: s.toLowerCase() }));

const App = () => (
  <>
   <h2>basic example with error support</h2>
  <ValidationConsumer>
    {({ onStateChange, error }) => (
        <Search
          items={items}
          error={error}
          onStateChange={onStateChange}
          itemToString={i => (i ? i.name : "")}
          className={css({ width: 250, margin: "auto" })}
          /> 
    )}
  </ValidationConsumer>
  </>
)

export default App
