import React from "react";
import { ValidationProvider} from './ValidationContext'
import { render } from "react-dom";
import App from './App'

const Index = () => (
  <ValidationProvider>
    <App />
  </ValidationProvider>
)

render(<Index />, document.getElementById("root"));
