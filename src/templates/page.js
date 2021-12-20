import React from "react"
import Layout from "../components/Layout"
import MainMenu from "../components/MainMenu"

export default function page ({ pageContext }) {
  return (
    <Layout>
      <h1>{pageContext.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </Layout>
  )
}

