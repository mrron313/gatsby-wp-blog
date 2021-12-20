import React from "react"
import { createGlobalStyle } from "styled-components"
import MainMenu from "./MainMenu"

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme === "purple" ? "purple" : "white")};
  }
`
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle theme="purple" />
      <MainMenu />
      {children}
    </React.Fragment>
  )
}